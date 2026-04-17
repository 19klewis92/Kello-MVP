import { createClient } from '@supabase/supabase-js';

// ── Supabase Client ───────────────────────────────────────────
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://alrgcnzkseipbchfjqzj.supabase.co';

const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFscmdjbnprc2VpcGJjaGZqcXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzOTc4MjMsImV4cCI6MjA5MTk3MzgyM30.2zMZdrIJ-iRxCO3U1GXMM6JeRzK2_T8kdVisoH0G9MM';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── Survey Config ─────────────────────────────────────────────
const STEPS = [
  {
    id: 'q1',
    type: 'single',
    label: 'Step 1',
    title: '한국에 방문한 적 있거나\n방문 계획이 있나요?',
    options: ['YES', 'NO'],
    grid: false,
    autoNext: true, // auto-advance on selection
  },
  {
    id: 'q2',
    type: 'single',
    label: 'Step 2',
    title: '한국에서 해보고 싶은\n서비스는?',
    options: ['헤어', '메이크업', '네일아트', '피부관리(에스테틱)', '왁싱', '속눈썹', '타투', '두피관리', '세신', '기타'],
    hasEtc: true,
    grid: true,
    autoNext: false,
  },
  {
    id: 'q3',
    type: 'multiple',
    label: 'Step 3',
    title: '뷰티샵 예약 시\n불편한 점은?',
    subtitle: '복수 선택 가능',
    options: ['의사소통 문제', '한국 번호 인증', '가격 신뢰 문제', '업체 정보 부족', '원하는 시간대 예약 어려움', '기타'],
    hasEtc: true,
    grid: false,
    autoNext: false,
  },
  {
    id: 'q4',
    type: 'multiple',
    label: 'Step 4',
    title: '필요한 서비스 기능은?',
    subtitle: '복수 선택 가능',
    options: ['번역 기능', '예약 대행 서비스', '신뢰할 수 있는 업체/가격 정보', '네비게이션 기능', '대중교통 정보 안내', '택시 호출 기능', '커뮤니티 정보 공유 기능', '기타'],
    hasEtc: true,
    grid: false,
    autoNext: false,
  },
];

const TOTAL = STEPS.length;

// ── State ─────────────────────────────────────────────────────
let currentStep = 0;
const answers = {}; // { q1: string, q2: string, q2_etc: string, q3: string[], q3_etc: string, q4: string[], q4_etc: string }

// ── DOM ───────────────────────────────────────────────────────
const surveyScreen   = document.getElementById('survey-screen');
const loadingScreen  = document.getElementById('loading-screen');
const questionBody   = document.getElementById('question-body');
const progressFill   = document.getElementById('progress-fill');
const progressLabel  = document.getElementById('progress-label');
const backBtn        = document.getElementById('back-btn');

// ── Supabase Save ─────────────────────────────────────────────
async function saveSurvey(data) {
  const { error } = await supabase
    .from('survey_responses')
    .insert([{
      visit_experience:  data.visit_experience,
      service_type:      data.service_type,
      service_etc:       data.service_etc       || null,
      pain_points:       data.pain_points,
      pain_etc:          data.pain_etc           || null,
      needed_features:   data.needed_features,
      feature_etc:       data.feature_etc        || null,
    }]);

  if (error) throw error;
}

// ── Render ────────────────────────────────────────────────────
function render(stepIndex, direction = 'forward') {
  const step = STEPS[stepIndex];

  // Progress
  const pct = ((stepIndex + 1) / TOTAL) * 100;
  progressFill.style.width = `${pct}%`;
  progressLabel.textContent = `${stepIndex + 1} / ${TOTAL}`;

  // Back button
  if (stepIndex === 0) {
    backBtn.classList.add('hidden');
  } else {
    backBtn.classList.remove('hidden');
  }

  // Animate out
  questionBody.classList.add('exit');

  setTimeout(() => {
    questionBody.innerHTML = buildStep(step, stepIndex);
    questionBody.classList.remove('exit');
    questionBody.classList.add('enter');

    // Trigger reflow then animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        questionBody.classList.remove('enter');
      });
    });

    attachStepListeners(step, stepIndex);
  }, 200);
}

// ── Build Step HTML ───────────────────────────────────────────
function buildStep(step, stepIndex) {
  const currentAnswer = answers[step.id] || (step.type === 'multiple' ? [] : '');
  const currentEtc    = answers[`${step.id}_etc`] || '';
  const hasEtcSelected = step.type === 'multiple'
    ? currentAnswer.includes('기타')
    : currentAnswer === '기타';

  const optionClass = step.grid ? 'options grid-2' : 'options';

  const optionsHTML = step.options.map(opt => {
    const isSelected = step.type === 'multiple'
      ? currentAnswer.includes(opt)
      : currentAnswer === opt;

    const isQ1 = step.id === 'q1';

    return `
      <button
        class="option-btn${isSelected ? ' selected' : ''}${isQ1 ? ' q1-btn' : ''}"
        data-value="${opt}"
      >${opt}</button>
    `;
  }).join('');

  const etcHTML = step.hasEtc ? `
    <div class="etc-box${hasEtcSelected ? ' show' : ''}" id="etc-box">
      <input
        type="text"
        class="etc-input"
        id="etc-input"
        placeholder="직접 입력해주세요..."
        value="${currentEtc}"
      >
    </div>
  ` : '';

  const showNextBtn = !step.autoNext;
  const nextBtnHTML = showNextBtn ? `
    <div class="next-wrap">
      <button class="btn-next" id="next-btn">다음 →</button>
    </div>
  ` : '';

  return `
    <div class="step-label">${step.label}</div>
    <h1 class="question-title">${step.title.replace(/\n/g, '<br>')}</h1>
    ${step.subtitle ? `<p class="question-sub">${step.subtitle}</p>` : ''}
    <div class="${optionClass}" id="options-container">
      ${optionsHTML}
    </div>
    ${etcHTML}
    ${nextBtnHTML}
  `;
}

// ── Attach Event Listeners ────────────────────────────────────
function attachStepListeners(step, stepIndex) {
  const container = document.getElementById('options-container');
  const etcBox    = document.getElementById('etc-box');
  const etcInput  = document.getElementById('etc-input');
  const nextBtn   = document.getElementById('next-btn');

  if (!container) return;

  // Option click
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.option-btn');
    if (!btn) return;

    const value = btn.dataset.value;

    if (step.type === 'single') {
      // Single choice
      answers[step.id] = value;

      container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      // Toggle etc box
      if (step.hasEtc) {
        if (value === '기타') {
          etcBox?.classList.add('show');
          setTimeout(() => etcInput?.focus(), 50);
        } else {
          etcBox?.classList.remove('show');
          answers[`${step.id}_etc`] = '';
        }
      }

      // Auto-advance (Q1)
      if (step.autoNext) {
        setTimeout(() => advance(stepIndex), 350);
      }

    } else {
      // Multiple choice
      if (!answers[step.id]) answers[step.id] = [];

      const idx = answers[step.id].indexOf(value);
      if (idx > -1) {
        answers[step.id].splice(idx, 1);
        btn.classList.remove('selected');
      } else {
        answers[step.id].push(value);
        btn.classList.add('selected');
      }

      // Toggle etc box
      if (step.hasEtc && value === '기타') {
        const hasEtc = answers[step.id].includes('기타');
        if (hasEtc) {
          etcBox?.classList.add('show');
          setTimeout(() => etcInput?.focus(), 50);
        } else {
          etcBox?.classList.remove('show');
          answers[`${step.id}_etc`] = '';
        }
      }
    }
  });

  // Etc input
  if (etcInput) {
    etcInput.addEventListener('input', () => {
      answers[`${step.id}_etc`] = etcInput.value;
    });
  }

  // Next button
  if (nextBtn) {
    nextBtn.addEventListener('click', () => advance(stepIndex));
  }
}

// ── Advance / Finish ──────────────────────────────────────────
function advance(stepIndex) {
  if (stepIndex < TOTAL - 1) {
    currentStep++;
    render(currentStep, 'forward');
  } else {
    finish();
  }
}

async function finish() {
  // Show loading
  surveyScreen.classList.remove('active');
  loadingScreen.classList.add('active');

  const q2Answer  = answers['q2'] || '';
  const q3Answers = answers['q3'] || [];
  const q4Answers = answers['q4'] || [];

  const data = {
    visit_experience:  answers['q1'] || '',
    service_type:      q2Answer === '기타' ? '기타' : q2Answer,
    service_etc:       answers['q2_etc'] || '',
    pain_points:       q3Answers.filter(v => v !== '기타'),
    pain_etc:          answers['q3_etc'] || '',
    needed_features:   q4Answers.filter(v => v !== '기타'),
    feature_etc:       answers['q4_etc'] || '',
  };

  try {
    await saveSurvey(data);
    console.log('✅ Survey saved:', data);
  } catch (err) {
    console.error('❌ Failed to save survey:', err);
  }

  // Redirect after short delay
  setTimeout(() => {
    window.location.href = 'https://kello.app';
  }, 1500);
}

// ── Back Button ───────────────────────────────────────────────
backBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    render(currentStep, 'back');
  }
});

// ── Init ──────────────────────────────────────────────────────
render(0);
