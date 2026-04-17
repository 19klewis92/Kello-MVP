import { createClient } from '@supabase/supabase-js';

// ── Supabase Client ───────────────────────────────────────────
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  'https://alrgcnzkseipbchfjqzj.supabase.co';

const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFscmdjbnprc2VpcGJjaGZqcXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzOTc4MjMsImV4cCI6MjA5MTk3MzgyI30.2zMZdrIJ-iRxCO3U1GXMM6JeRzK2_T8kdVisoH0G9MM';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ── Translations ──────────────────────────────────────────────
const TRANSLATIONS = {
  ko: {
    tagline: '<span class="pink-stroke">K</span><span class="black">뷰티의 첫</span> <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: 'Kello로 뷰티업데이트 중..',
    next: '다음 →',
    prev: '이전',
    etc: '기타',
    etcPlaceholder: '직접 입력하세요...',
    maxSelectMsg: '(최대 3개 선택 가능)',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: '한국에 방문한 적 있거나\n방문 계획이 있나요?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'multiple', maxSelect: 3, label: 'Step 2', title: '한국에서 해보고 싶은\n서비스는?', options: ['헤어', '메이크업', '네일아트', '피부관리(에스테틱)', '왁싱', '속눈썹', '타투', '두피관리', '세신', '기타'], hasEtc: true, grid: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: '뷰티샵 예약 시\n불편한 점은?', options: ['의사소통 문제', '한국 번호 인증', '가격 신뢰 문제', '업체 정보 부족', '원하는 시간대 예약 어려움', '기타'], hasEtc: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: '필요한 서비스 기능은?', options: ['번역 기능', '예약 대행 서비스', '신뢰할 수 있는 업체/가격 정보', '네비게이션 기능', '대중교통 정보 안내', '택시 호출 기능', '커뮤니티 정보 공유 기능', '기타'], hasEtc: true },
    ]
  },
  en: {
    tagline: 'Your first <span class="black">K-Beauty</span> <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: 'Updating beauty with Kello..',
    next: 'Next →',
    prev: 'Prev',
    etc: 'Etc',
    etcPlaceholder: 'Type here...',
    maxSelectMsg: '(Select up to 3)',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: 'Have you visited Korea or\ndo you plan to visit?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'multiple', maxSelect: 3, label: 'Step 2', title: 'Which service do you want\nto try in Korea?', options: ['Hair', 'Makeup', 'Nails', 'Skincare', 'Waxing', 'Lashes', 'Tattoo', 'Scalp Care', 'Seshin', 'Etc'], hasEtc: true, grid: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: 'Pain points when\nbooking a shop?', options: ['Language barrier', 'KR Phone verification', 'Price reliability', 'Lack of info', 'Time slot difficulty', 'Etc'], hasEtc: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: 'Features you need?', options: ['Translation', 'Booking agency', 'Verified info/prices', 'Navigation', 'Public transport info', 'Taxi call', 'Community sharing', 'Etc'], hasEtc: true },
    ]
  },
  ja: {
    tagline: '<span class="black">Kビューティーへの最初の</span> <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: 'Kelloでビューティー更新중..',
    next: '次へ →',
    prev: '以前',
    etc: 'その他',
    etcPlaceholder: '入力してください...',
    maxSelectMsg: '(最大3つまで選択可能)',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: '韓国に訪問したことがあるか\n訪問予定はありますか？', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'multiple', maxSelect: 3, label: 'Step 2', title: '韓国で体験したい\nサービスは？', options: ['ヘア', 'メイクアップ', 'ネイル', 'エステ', 'ワックス', 'まつげ', 'タトゥー', '頭皮ケア', 'アカスリ', 'その他'], hasEtc: true, grid: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: '予約時の不便な点は？', options: ['言葉の壁', '韓国番号認証', '価格の信頼性', '情報の不足', '予約時間の確保', 'その他'], hasEtc: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: '必要な機能は？', options: ['翻訳機能', '予約代行', '信頼できる情報', 'ナビゲーション', '公共交通情報', 'タクシー呼び出し', 'コミュニティ', 'その他'], hasEtc: true },
    ]
  },
  zh: {
    tagline: '您的第一个 <span class="black">K-Beauty</span> <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: '正在通过 Kello 更新美妆..',
    next: '下一步 →',
    prev: '之前',
    etc: '其他',
    etcPlaceholder: '请输入...',
    maxSelectMsg: '(最多可选择3项)',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: '您访问过韩国或\n有访问计划吗？', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'multiple', maxSelect: 3, label: 'Step 2', title: '您想在韩国尝试\n哪种服务？', options: ['美发', '化妆', '美甲', '皮肤管理', '脱毛', '睫毛', '纹身', '头皮护理', '搓澡', '其他'], hasEtc: true, grid: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: '预约美容院时的难点？', options: ['沟通问题', '韩国手机验证', '价格信赖', '信息不足', '预约时段困难', '其他'], hasEtc: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: '您需要的功能？', options: ['翻译功能', '预约代办', '可靠的信息/价格', '导航功能', '公共交通信息', '打车功能', '社区分享', '其他'], hasEtc: true },
    ]
  },
  vi: {
    tagline: '<span class="black">K-Beauty</span> đầu tiên của bạn <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: 'Đang cập nhật làm đẹp với Kello..',
    next: 'Tiếp theo →',
    prev: 'Trước',
    etc: 'Khác',
    etcPlaceholder: 'Nhập ở đây...',
    maxSelectMsg: '(Chọn tối đa 3)',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: 'Bạn đã từng đến Hàn Quốc hoặc\ncó kế hoạch đến không?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'multiple', maxSelect: 3, label: 'Step 2', title: 'Bạn muốn thử dịch vụ nào\ntại Hàn Quốc?', options: ['Làm tóc', 'Trang điểm', 'Làm móng', 'Chăm sóc da', 'Tẩy lông', 'Lông mi', 'Hình xăm', 'Chăm sóc da đầu', 'Seshin (Tẩy da chết)', 'Khác'], hasEtc: true, grid: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: 'Khó khăn khi\nđặt lịch làm đẹp?', options: ['Rào cản ngôn ngữ', 'Xác thực số đt Hàn Quốc', 'Độ tin cậy về giá', 'Thiếu thông tin', 'Khó chọn thời gian', 'Khác'], hasEtc: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: 'Tính năng bạn cần?', options: ['Tính năng dịch thuật', 'Đại lý đặt lịch', 'Thông tin/giá cả uy tín', 'Điều hướng', 'Thông tin giao thông', 'Gọi taxi', 'Chia sẻ cộng đồng', 'Khác'], hasEtc: true },
    ]
  },
  th: {
    tagline: '<span class="black">K-Beauty</span> แรกของคุณ <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: 'กำลังอัปเดตความงามด้วย Kello..',
    next: 'ต่อไป →',
    prev: 'ก่อนหน้า',
    etc: 'อื่นๆ',
    etcPlaceholder: 'พิมพ์ที่นี่...',
    maxSelectMsg: '(เลือกได้สูงสุด 3 ข้อ)',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: 'คุณเคยไปเกาหลีหรือ\nมีแผนจะไปหรือไม่?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'multiple', maxSelect: 3, label: 'Step 2', title: 'บริการที่คุณอยากลอง\nในเกาหลีคืออะไร?', options: ['ทำผม', 'ช่างแต่งหน้า', 'ทำเล็บ', 'ดูแลผิวพรรณ', 'แว็กซ์', 'ขนตา', 'รอยสัก', 'ดูแลหนังศีรษะ', 'เซชิน (สครับผิว)', 'อื่นๆ'], hasEtc: true, grid: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: 'ความลำบากเมื่อ\nจองร้านเสริมสวย?', options: ['อุปสรรคทางภาษา', 'การยืนยันเบอร์เกาหลี', 'ความน่าเชื่อถือของราคา', 'ขาดข้อมูล', 'จองเวลายาก', 'อื่นๆ'], hasEtc: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: 'ฟีเจอร์ที่คุณต้องการ?', options: ['ฟีเจอร์แปลภาษา', 'ตัวแทนจอง', 'ข้อมูลและราคาที่เชื่อถือได้', 'การนำทาง', 'ข้อมูลขนส่งสาธารณะ', 'เรียกแท็กซี่', 'แชร์ข้อมูลชุมชน', 'อื่นๆ'], hasEtc: true },
    ]
  },
  mn: {
    tagline: 'Таны анхны <span class="black">K-Beauty</span> <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: 'Kello ашиглан гоо сайхнаа шинэчилж байна..',
    next: 'Дараах →',
    prev: 'Өмнөх',
    etc: 'Бусад',
    etcPlaceholder: 'Энд бичнэ үү...',
    maxSelectMsg: '(Дээд тал нь 3 сонголт)',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: 'Та Солонгост очиж байсан уу,\nэсвэл очих төлөвлөгөөтэй юу?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'multiple', maxSelect: 3, label: 'Step 2', title: 'Солонгост ямар үйлчилгээ\nавахыг хүсэж байна вэ?', options: ['Үсчний газар', 'Нүүр будалт', 'Хумс засал', 'Арьс арчилгаа', 'Вакс', 'Сормуус', 'Шивээс', 'Хуйхны арчилгаа', 'Сэшин (Бие үрэх)', 'Бусад'], hasEtc: true, grid: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: 'Гоо сайхны салон захиалахад\nтулгардаг бэрхшээл?', options: ['Хэлний бэрхшээл', 'Солонгос дугаар баталгаажуулах', 'Үнийн баталгаагүй байдал', 'Мэдээлэл дутмаг', 'Хүссэн цагтаа захиалах хэцүү', 'Бусад'], hasEtc: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: 'Танд ямар үйлчилгээ\nхэрэгтэй вэ?', options: ['Орчуулга', 'Захиалгын агентлаг', 'Найдвартай мэдээлэл/Үнэ', 'Газрын зураг', 'Нийтийн тээврийн мэдээлэл', 'Такси дуудах', 'Олон нийтийн мэдээлэл хуваалцах', 'Бусад'], hasEtc: true },
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
const logoTagline    = document.getElementById('logo-tagline');
const langTabs       = document.getElementById('lang-tabs');

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

  // Update Tagline
  logoTagline.innerHTML = t.tagline;

  questionBody.classList.add('exit');

  setTimeout(() => {
    questionBody.innerHTML = buildStep(step, t, stepIndex);
    questionBody.classList.remove('exit');
    questionBody.classList.add('enter');

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        questionBody.classList.remove('enter');
      });
    });

    const fill = document.getElementById('progress-fill');
    if (fill) {
      const pct = ((stepIndex + 1) / t.steps.length) * 100;
      fill.style.width = `${pct}%`;
    }

    attachStepListeners(step);
    renderTags(step.id);
  }, 200);
}

function buildStep(step, t, stepIndex) {
  const currentAnswer = answers[step.id] || (step.type === 'multiple' ? [] : '');
  const etcText = t.etc;
  const hasEtcSelected = step.type === 'multiple'
    ? (Array.isArray(currentAnswer) && currentAnswer.includes(etcText))
    : currentAnswer === etcText;

  const optionClass = step.grid ? 'options grid-2' : 'options';
  const optionsHTML = step.options.map(opt => {
    const isSelected = step.type === 'multiple' ? (Array.isArray(currentAnswer) && currentAnswer.includes(opt)) : currentAnswer === opt;
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
    </div>
    <div class="etc-tags" id="etc-tags"></div>
  ` : '';

  // Navigation Buttons
  const navHTML = stepIndex === 0 ? '' : `
    <div class="nav-buttons">
      <button class="btn-prev" id="prev-btn">${t.prev}</button>
      <button class="btn-next" id="next-btn">${stepIndex === t.steps.length - 1 ? 'Finish' : t.next}</button>
    </div>
  `;

  const progressHTML = `
    <div class="progress-area inline-progress" style="padding: 15px 0 10px; margin-top: 5px;">
      <div class="progress-meta" style="margin-bottom: 8px;">
        <span class="step-name">${step.label}</span>
        <span class="progress-text">${stepIndex + 1} / ${t.steps.length}</span>
      </div>
      <div class="progress-bar">
        <div id="progress-fill" class="progress-fill"></div>
      </div>
    </div>
  `;

  // Question Title with limit mention
  const displayTitle = step.maxSelect ? `${step.title} <span class="limit-hint" style="font-size: 0.8rem; opacity: 0.7;">${t.maxSelectMsg}</span>` : step.title;

  return `
    <h1 class="question-title">${displayTitle.replace(/\n/g, '<br>')}</h1>
    ${step.subtitle ? `<p class="question-sub">${step.subtitle}</p>` : ''}
    <div class="${optionClass}" id="options-container">${optionsHTML}</div>
    ${etcHTML}
    ${navHTML}
    ${progressHTML}
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
    // Check maxSelect limit for tags too
    const step = TRANSLATIONS[currentLang].steps.find(s => s.id === stepId);
    if (step && step.maxSelect && (answers[stepId]?.length || 0) >= step.maxSelect) {
      alert(TRANSLATIONS[currentLang].maxSelectMsg);
      return;
    }

    etcTags[stepId].push(val);
    renderTags(stepId);
    etcBox?.classList.remove('show');
    if (Array.isArray(answers[stepId])) {
      if (!answers[stepId].includes(TRANSLATIONS[currentLang].etc)) {
        answers[stepId].push(TRANSLATIONS[currentLang].etc);
      }
    } else {
      answers[stepId] = TRANSLATIONS[currentLang].etc;
    }
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
  const prevBtn   = document.getElementById('prev-btn');
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
      if (step.autoNext && value !== etcText) setTimeout(() => advance(), 350);
    } else {
      if (!answers[step.id]) answers[step.id] = [];
      const idx = answers[step.id].indexOf(value);
      
      if (idx > -1) {
        // Toggle off
        answers[step.id].splice(idx, 1);
        btn.classList.remove('selected');
        if (step.hasEtc && value === etcText) etcBox?.classList.remove('show');
      } else {
        // Toggle on (check for maxSelect limit)
        if (step.maxSelect && answers[step.id].length >= step.maxSelect) {
          // Could show a brief hint here
          return;
        }
        answers[step.id].push(value);
        btn.classList.add('selected');
        if (step.hasEtc && value === etcText) etcBox?.classList.add('show');
      }
    }
  });

  if (etcAddBtn) etcAddBtn.addEventListener('click', () => addTag(step.id));
  if (etcInput) etcInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addTag(step.id); });
  if (nextBtn) nextBtn.addEventListener('click', () => advance());
  if (prevBtn) prevBtn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      render(currentStep);
    }
  });
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

langTabs.addEventListener('click', (e) => {
  const tab = e.target.closest('.lang-tab');
  if (!tab) return;
  
  currentLang = tab.dataset.lang;
  document.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  render(currentStep);
});

render(0);
