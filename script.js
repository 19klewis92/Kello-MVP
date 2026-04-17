import { createClient } from '@supabase/supabase-js';

// ── Supabase Client ───────────────────────────────────────────
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://alrgcnzkseipbchfjqzj.supabase.co';

const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFscmdjbnprc2VpcGJjaGZqcXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzOTc4MjMsImV4cCI6MjA5MTk3MzgyM30.2zMZdrIJ-iRxCO3U1GXMM6JeRzK2_T8kdVisoH0G9MM';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── Translations ──────────────────────────────────────────────
const TRANSLATIONS = {
  ko: {
    tagline: '<span class="pink">K</span>뷰티의 첫 <span class="black">H</span>ello',
    loading: 'Kello로 뷰티업데이트 중..',
    next: '다음 →',
    etc: '기타',
    etcPlaceholder: '직접 입력하세요...',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: '한국에 방문한 적 있거나\n방문 계획이 있나요?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'single', label: 'Step 2', title: '한국에서 해보고 싶은\n서비스는?', options: ['헤어', '메이크업', '네일아트', '피부관리(에스테틱)', '왁싱', '속눈썹', '타투', '두피관리', '세신', '기타'], hasEtc: true, grid: true },
      { id: 'q3', type: 'multiple', label: 'Step 3', title: '뷰티샵 예약 시\n불편한 점은?', subtitle: '복수 선택 가능', options: ['의사소통 문제', '한국 번호 인증', '가격 신뢰 문제', '업체 정보 부족', '원하는 시간대 예약 어려움', '기타'], hasEtc: true },
      { id: 'q4', type: 'multiple', label: 'Step 4', title: '필요한 서비스 기능은?', subtitle: '복수 선택 가능', options: ['번역 기능', '예약 대행 서비스', '신뢰할 수 있는 업체/가격 정보', '네비게이션 기능', '대중교통 정보 안내', '택시 호출 기능', '커뮤니티 정보 공유 기능', '기타'], hasEtc: true },
    ]
  },
  en: {
    tagline: 'Your first <span class="pink">K</span>-Beauty <span class="black">H</span>ello',
    loading: 'Updating beauty with Kello..',
    next: 'Next →',
    etc: 'Etc',
    etcPlaceholder: 'Type here...',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: 'Have you visited Korea or\ndo you plan to visit?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'single', label: 'Step 2', title: 'Which service do you want\nto try in Korea?', options: ['Hair', 'Makeup', 'Nails', 'Skincare', 'Waxing', 'Lashes', 'Tattoo', 'Scalp Care', 'Seshin', 'Etc'], hasEtc: true, grid: true },
      { id: 'q3', type: 'multiple', label: 'Step 3', title: 'Pain points when\nbooking a shop?', subtitle: 'Multiple choices', options: ['Language barrier', 'KR Phone verification', 'Price reliability', 'Lack of info', 'Time slot difficulty', 'Etc'], hasEtc: true },
      { id: 'q4', type: 'multiple', label: 'Step 4', title: 'Features you need?', subtitle: 'Multiple choices', options: ['Translation', 'Booking agency', 'Verified info/prices', 'Navigation', 'Public transport info', 'Taxi call', 'Community sharing', 'Etc'], hasEtc: true },
    ]
  },
  ja: {
    tagline: '<span class="pink">K</span>ビューティーへの最初の <span class="black">H</span>ello',
    loading: 'Kelloでビューティー更新中..',
    next: '次へ →',
    etc: 'その他',
    etcPlaceholder: '入力してください...',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: '韓国に訪問したことがあるか\n訪問予定はありますか？', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'single', label: 'Step 2', title: '韓国で体験したい\nサービスは？', options: ['ヘア', 'メイクアップ', 'ネイル', 'エステ', 'ワックス', 'まつげ', 'タトゥー', '頭皮ケア', 'アカスリ', 'その他'], hasEtc: true, grid: true },
      { id: 'q3', type: 'multiple', label: 'Step 3', title: '予約時の不便な点は？', subtitle: '複数選択可', options: ['言葉の壁', '韓国番号認証', '価格の信頼性', '情報の不足', '予約時間の確保', 'その他'], hasEtc: true },
      { id: 'q4', type: 'multiple', label: 'Step 4', title: '必要な機能は？', subtitle: '複数選択可', options: ['翻訳機能', '予約代行', '信頼できる情報', 'ナビゲーション', '公共交通情報', 'タクシー呼び出し', 'コミュニティ', 'その他'], hasEtc: true },
    ]
  },
  zh: {
    tagline: '您的第一个 <span class="pink">K</span>-Beauty <span class="black">H</span>ello',
    loading: '正在通过 Kello 更新美妆..',
    next: '下一步 →',
    etc: '其他',
    etcPlaceholder: '请输入...',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: '您访问过韩国或\n有访问计划吗？', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'single', label: 'Step 2', title: '您想在韩国尝试\n哪种服务？', options: ['美发', '化妆', '美甲', '皮肤管理', '脱毛', '睫毛', '纹身', '头皮护理', '搓澡', '其他'], hasEtc: true, grid: true },
      { id: 'q3', type: 'multiple', label: 'Step 3', title: '预约美容院时的难点？', subtitle: '多选项目', options: ['沟通问题', '韩国手机验证', '价格信赖', '信息不足', '预约时段困难', '其他'], hasEtc: true },
      { id: 'q4', type: 'multiple', label: 'Step 4', title: '您需要的功能？', subtitle: '多选项目', options: ['翻译功能', '预约代办', '可靠的信息/价格', '导航功能', '公共交通信息', '打车功能', '社区分享', '其他'], hasEtc: true },
    ]
  }
};

// ── State ─────────────────────────────────────────────────────
let currentLang = 'ko';
let currentStep = 0;
const answers = {}; 
const etcTags = { q2: [], q3: [], q4: [] }; 

// ── DOM ───────────────────────────────────────────────────────
const surveyScreen   = document.getElementById('survey-screen');
const loadingScreen  = document.getElementById('loading-screen');
const questionBody   = document.getElementById('question-body');
const progressFill   = document.getElementById('progress-fill');
const progressLabel  = document.getElementById('progress-label');
const backBtn        = document.getElementById('back-btn');
const logoTagline    = document.getElementById('logo-tagline');
const langSelector   = document.getElementById('lang-selector');

// ── Supabase Save ─────────────────────────────────────────────
async function saveSurvey(data) {
  const { error } = await supabase
    .from('survey_responses')
    .insert([{
      visit_experience:  data.visit_experience,
      service_type:      data.service_type,
      service_etc:       data.service_etc,
      pain_points:       data.pain_points,
      pain_etc:          data.pain_etc,
      needed_features:   data.needed_features,
      feature_etc:       data.feature_etc,
      language:          currentLang
    }]);
  if (error) throw error;
}

// ── Render ────────────────────────────────────────────────────
function render(stepIndex) {
  const t = TRANSLATIONS[currentLang];
  const step = t.steps[stepIndex];

  // Tagline Update
  logoTagline.innerHTML = t.tagline;

  // Progress
  const pct = ((stepIndex + 1) / t.steps.length) * 100;
  progressFill.style.width = `${pct}%`;
  progressLabel.textContent = `${stepIndex + 1} / ${t.steps.length}`;

  if (stepIndex === 0) backBtn.classList.add('hidden');
  else backBtn.classList.remove('hidden');

  questionBody.classList.add('exit');

  setTimeout(() => {
    questionBody.innerHTML = buildStep(step, t);
    questionBody.classList.remove('exit');
    questionBody.classList.add('enter');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        questionBody.classList.remove('enter');
      });
    });

    attachStepListeners(step);
    renderTags(step.id);
  }, 200);
}

function buildStep(step, t) {
  const currentAnswer = answers[step.id] || (step.type === 'multiple' ? [] : '');
  const etcText = t.etc;
  const hasEtcSelected = step.type === 'multiple'
    ? currentAnswer.includes(etcText)
    : currentAnswer === etcText;

  const optionClass = step.grid ? 'options grid-2' : 'options';
  const optionsHTML = step.options.map(opt => {
    const isSelected = step.type === 'multiple' ? currentAnswer.includes(opt) : currentAnswer === opt;
    return `<button class="option-btn${isSelected ? ' selected' : ''}" data-value="${opt}">${opt}</button>`;
  }).join('');

  const etcHTML = step.hasEtc ? `
    <div class="etc-box${hasEtcSelected ? ' show' : ''}" id="etc-box">
      <div class="etc-input-row">
        <input type="text" class="etc-input" id="etc-input" placeholder="${t.etcPlaceholder}">
        <button class="etc-add-btn" id="etc-add-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        </button>
      </div>
      <div class="etc-tags" id="etc-tags"></div>
    </div>
  ` : '';

  const nextBtnHTML = !step.autoNext ? `
    <div class="next-wrap"><button class="btn-next" id="next-btn">${t.next}</button></div>
  ` : '';

  return `
    <div class="step-label">${step.label}</div>
    <h1 class="question-title">${step.title.replace(/\n/g, '<br>')}</h1>
    ${step.subtitle ? `<p class="question-sub">${step.subtitle}</p>` : ''}
    <div class="${optionClass}" id="options-container">${optionsHTML}</div>
    ${etcHTML}
    ${nextBtnHTML}
  `;
}

function renderTags(stepId) {
  const tagsContainer = document.getElementById('etc-tags');
  if (!tagsContainer || !etcTags[stepId]) return;
  tagsContainer.innerHTML = etcTags[stepId].map((tag, idx) => `
    <div class="tag"><span>${tag}</span><button class="tag-del" onclick="window.removeTag('${stepId}', ${idx})">&times;</button></div>
  `).join('');
}

window.addTag = (stepId) => {
  const input = document.getElementById('etc-input');
  const etcBox = document.getElementById('etc-box');
  const val = input?.value.trim();
  if (!val) return;

  if (!etcTags[stepId].includes(val)) {
    etcTags[stepId].push(val);
    renderTags(stepId);
    
    // Toggle close input on addition
    etcBox?.classList.remove('show');
    
    // Deselect "기타" logic if single, or keep it if multiple but close box
    // To allow re-opening to add more, normally user clicks "기타" again.
  }
  input.value = '';
};

window.removeTag = (stepId, index) => {
  etcTags[stepId].splice(index, 1);
  renderTags(stepId);
};

function attachStepListeners(step) {
  const container = document.getElementById('options-container');
  const etcBox    = document.getElementById('etc-box');
  const etcAddBtn = document.getElementById('etc-add-btn');
  const etcInput  = document.getElementById('etc-input');
  const nextBtn   = document.getElementById('next-btn');
  const etcText   = TRANSLATIONS[currentLang].etc;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.option-btn');
    if (!btn) return;
    const value = btn.dataset.value;

    if (step.type === 'single') {
      answers[step.id] = value;
      container.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if (step.hasEtc) {
        if (value === etcText) etcBox?.classList.toggle('show');
        else { etcBox?.classList.remove('show'); }
      }
      if (step.autoNext) setTimeout(() => advance(), 350);
    } else {
      if (!answers[step.id]) answers[step.id] = [];
      const idx = answers[step.id].indexOf(value);
      if (idx > -1) answers[step.id].splice(idx, 1);
      else answers[step.id].push(value);
      btn.classList.toggle('selected');
      if (step.hasEtc && value === etcText) etcBox?.classList.toggle('show');
    }
  });

  if (etcAddBtn) etcAddBtn.addEventListener('click', () => addTag(step.id));
  if (etcInput) etcInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTag(step.id); });
  if (nextBtn) nextBtn.addEventListener('click', () => advance());
}

function advance() {
  const t = TRANSLATIONS[currentLang];
  if (currentStep < t.steps.length - 1) {
    currentStep++;
    render(currentStep);
  } else {
    finish();
  }
}

async function finish() {
  surveyScreen.classList.remove('active');
  loadingScreen.classList.add('active');
  const data = {
    visit_experience:  answers['q1'] || '',
    service_type:      answers['q2'] || '',
    service_etc:       etcTags['q2'].join(', '),
    pain_points:       answers['q3'] || [],
    pain_etc:          etcTags['q3'].join(', '),
    needed_features:   answers['q4'] || [],
    feature_etc:       etcTags['q4'].join(', '),
  };
  try { await saveSurvey(data); } catch (err) { console.error(err); }
  setTimeout(() => { window.location.href = 'https://kello.app'; }, 1500);
}

backBtn.addEventListener('click', () => { if (currentStep > 0) { currentStep--; render(currentStep); } });

langSelector.addEventListener('change', (e) => {
  currentLang = e.target.value;
  render(currentStep);
});

render(0);
