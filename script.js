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
    finalLoading: '감사합니다.<br>소중한 피드백은 서비스 개선에 큰 도움이 됩니다.<br><span class="highlight-text">잠시후 <span class="pink">Kello</span>로 뷰티 업데이트 하세요 !</span>',
    next: '다음 →',
    prev: '이전',
    finish: '완료',
    etc: '기타',
    etcPlaceholder: '직접 입력하세요...',
    maxSelectMsg: '(최대 3개 선택 가능)',
    completeTitle: '참여해 주셔서 감사합니다! 🎉',
    completeMsg: '소중한 의견이 Kello 서비스에 반영됩니다.',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: '한국에 방문한 적 있거나\n방문 계획이 있나요?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'single', label: 'Step 2', title: '한국에서 예약 서비스를\n이용해본 적이 있나요?\n<span class="small-title">(식당, 뷰티샵, 호텔 등)</span>', options: ['YES', 'NO'], autoNext: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: '한국에서 해보고 싶은 서비스는?', options: ['헤어', '메이크업', '네일아트', '피부관리(에스테틱)', '왁싱', '속눈썹', '타투', '두피관리', '세신', '기타'], hasEtc: true, grid: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: '뷰티샵 예약 시 불편한 점은?', options: ['의사소통 문제', '한국 번호 인증', '가격 신뢰 문제', '업체 정보 부족', '원하는 시간대 예약 어려움', '기타'], hasEtc: true },
      { id: 'q5', type: 'multiple', maxSelect: 3, label: 'Step 5', title: '필요한 서비스 기능은?', options: ['번역 기능', '예약 대행 서비스', '신뢰할 수 있는 업체/가격 정보', '네비게이션 기능', '대중교통 정보 안내', '택시 호출 기능', '커뮤니티 정보 공유 기능', '기타'], hasEtc: true },
      { id: 'q6', type: 'single', label: 'Step 6', title: '이 문제가 해결된다면,\n예약 서비스에 대한 이용료를 낼 의향이 있나요?', options: ['있음', '조건에 따라 가능', '없음'], autoNext: true },
    ]
  },
  en: {
    tagline: 'Your first <span class="black">K-Beauty</span> <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: 'Updating beauty with Kello..',
    finalLoading: 'Thank you.<br>Your feedback helps us improve.<br><span class="highlight-text">You will meet <span class="pink">Kello</span> soon!</span>',
    next: 'Next →',
    prev: 'Prev',
    finish: 'Finish',
    etc: 'Etc',
    etcPlaceholder: 'Type here...',
    maxSelectMsg: '(Select up to 3)',
    completeTitle: 'Thank you for your feedback! 🎉',
    completeMsg: 'Your input will shape the future of Kello.',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: 'Have you visited Korea or\ndo you plan to visit?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'single', label: 'Step 2', title: 'Have you ever used a booking service in Korea?\n<span class="small-title">(Restaurants, Beauty shops, Hotels, etc.)</span>', options: ['YES', 'NO'], autoNext: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: 'Which service do you want to try in Korea?', options: ['Hair', 'Makeup', 'Nails', 'Skincare', 'Waxing', 'Lashes', 'Tattoo', 'Scalp Care', 'Scrub', 'Etc'], hasEtc: true, grid: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: 'Pain points when booking a shop?', options: ['Language barrier', 'Korea Phone verification', 'Price reliability', 'Lack of info', 'Time slot difficulty', 'Etc'], hasEtc: true },
      { id: 'q5', type: 'multiple', maxSelect: 3, label: 'Step 5', title: 'Features you need?', options: ['Translation', 'Booking agency', 'Verified info/prices', 'Navigation', 'Public transport info', 'Taxi call', 'Community sharing', 'Etc'], hasEtc: true },
      { id: 'q6', type: 'single', label: 'Step 6', title: 'If these issues are resolved,\nwould you be willing to pay a fee for the service?', options: ['Yes', 'Depending on conditions', 'No'], autoNext: true },
    ]
  },
  ja: {
    tagline: '<span class="black">Kビューティーへの最初の</span> <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: 'Kelloでビューティアップデート中..',
    finalLoading: 'ありがとうございます。<br>いただいたご意見はサービスの向上に役立てさせていただきます。<br><span class="highlight-text">まもなく<span class="pink">Kello</span>のサービスをご案内します！</span>',
    next: '次へ →',
    prev: '戻る',
    finish: '完了',
    etc: 'その他',
    etcPlaceholder: '入力してください...',
    maxSelectMsg: '(最大3つまで選択可能)',
    completeTitle: 'ご参加ありがとうございます！🎉',
    completeMsg: 'いただいたご意見はKelloのサービス運営に反映させていただきます。',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: '韓国を訪れたことはありますか？\nまたは、今後の予定はありますか？', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'single', label: 'Step 2', title: '韓国で予約サービスを\n利用したことがありますか？\n<span class="small-title">(レストラン、美容院、ホテルなど)</span>', options: ['YES', 'NO'], autoNext: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: '韓国で体験したいサービスは？', options: ['ヘア', 'メイクアップ', 'ネイル', '皮膚管理(エステ)', 'ワックス', 'まつげ', 'タトゥー', '頭皮ケア', 'アカスリ', 'その他'], hasEtc: true, grid: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: '美容室等の予約時に不便な点は？', options: ['言葉の壁', '韓国の電話番号認証', '不透明な価格設定', '情報の不足', '希望時間の予約が困難', 'その他'], hasEtc: true },
      { id: 'q5', type: 'multiple', maxSelect: 3, label: 'Step 5', title: 'どのような機能が必要ですか？', options: ['翻訳機能', '予約代行サービス', '信頼できる店舗/価格情報', 'ナビゲーション機能', '公共交通機関の案内', 'タクシー配車', 'コミュニティ等の情報共有', 'その他'], hasEtc: true },
      { id: 'q6', type: 'single', label: 'Step 6', title: 'これらの問題が解決された場合、\n予約サービスに対して利用料を支払う意向はありますか？', options: ['はい', '条件によっては可能', 'いいえ'], autoNext: true },
    ]
  },
  zh: {
    tagline: '您的第一个 <span class="black">K-Beauty</span> <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: '正在通过 Kello 更新美妆..',
    finalLoading: '感谢您的反馈。<br>您的意见对我们非常重要。<br><span class="highlight-text">即将带您了解 <span class="pink">Kello</span> 服务！</span>',
    next: '下一步 →',
    prev: '上一步',
    finish: '完成',
    etc: '其他',
    etcPlaceholder: '请输入...',
    maxSelectMsg: '(最多可选择3项)',
    completeTitle: '感谢您的参与！🎉',
    completeMsg: '您的宝贵意见将反映在Kello服务中。',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: '您访问过韩国或\n有访问计划吗？', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'single', label: 'Step 2', title: '您是否在韩国使用过预约服务？\n<span class="small-title">（餐厅、美容院、酒店等）</span>', options: ['YES', 'NO'], autoNext: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: '您想在韩国尝试哪种服务？', options: ['美发', '化妆', '美甲', '皮肤管理', '脱毛', '睫毛', '纹身', '头皮护理', '搓澡', '其他'], hasEtc: true, grid: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: '预约美容院时的难点？', options: ['沟通问题', '韩国手机验证', '价格缺乏透明度', '信息不足', '预约时段困难', '其他'], hasEtc: true },
      { id: 'q5', type: 'multiple', maxSelect: 3, label: 'Step 5', title: '您需要的功能？', options: ['翻译功能', '预约代办', '可靠的信息/价格', '导航功能', '公共交通信息', '打车服务', '社区分享', '其他'], hasEtc: true },
      { id: 'q6', type: 'single', label: 'Step 6', title: '如果这些问题得到解决，\n您愿意支付预约服务的费用吗？', options: ['有', '视条件而定', '没有'], autoNext: true },
    ]
  },
  vi: {
    tagline: '<span class="black">K-Beauty</span> đầu tiên của bạn <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: 'Đang cập nhật làm đẹp với Kello..',
    finalLoading: 'Cảm ơn bạn.<br>Ý kiến của bạn sẽ giúp chúng tôi cải thiện dịch vụ.<br><span class="highlight-text">Bạn sẽ sớm gặp Kello tại <span class="pink">Kello</span>!</span>',
    next: 'Tiếp theo →',
    prev: 'Quay lại',
    finish: 'Hoàn tất',
    etc: 'Khác',
    etcPlaceholder: 'Nhập ở đây...',
    maxSelectMsg: '(Chọn tối đa 3)',
    completeTitle: 'Cảm ơn bạn đã tham gia! 🎉',
    completeMsg: 'Ý kiến của bạn sẽ được phản ánh vào dịch vụ Kello.',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: 'Bạn đã từng đến Hàn Quốc hoặc\ncó kế hoạch đến chưa?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'single', label: 'Step 2', title: 'Bạn đã bao giờ sử dụng dịch vụ đặt chỗ tại Hàn Quốc chưa?\n<span class="small-title">(Nhà hàng, tiệm làm đẹp, khách sạn, v.v.)</span>', options: ['YES', 'NO'], autoNext: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: 'Bạn muốn thử dịch vụ nào tại Hàn Quốc?', options: ['Làm tóc', 'Trang điểm', 'Làm móng', 'Chăm sóc da', 'Tẩy lông', 'Lông mi', 'Hình xăm', 'Chăm sóc da đầu', 'Tẩy da chết toàn thân', 'Khác'], hasEtc: true, grid: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: 'Khó khăn khi đặt lịch làm đẹp?', options: ['Rào cản ngôn ngữ', 'Xác minh số điện thoại Hàn Quốc', 'Lo ngại về giá cả', 'Thiếu thông tin', 'Khó chọn thời gian', 'Khác'], hasEtc: true },
      { id: 'q5', type: 'multiple', maxSelect: 3, label: 'Step 5', title: 'Tính năng bạn cần?', options: ['Dịch thuật', 'Đại lý đặt lịch', 'Thông tin/giá cả uy tín', 'Điều hướng', 'Thông tin giao thông công cộng', 'Gọi taxi', 'Chia sẻ cộng đồng', 'Khác'], hasEtc: true },
      { id: 'q6', type: 'single', label: 'Step 6', title: 'Nếu những vấn đề này được giải quyết,\nbạn có sẵn lòng trả phí cho dịch vụ không?', options: ['Có', 'Tùy điều kiện', 'Không'], autoNext: true },
    ]
  },
  th: {
    tagline: '<span class="black">K-Beauty</span> แรกของคุณ <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: 'กำลังอัปเดตความงามด้วย Kello..',
    finalLoading: 'ขอบคุณค่ะ/ครับ<br>ความคิดเห็นของคุณช่วยให้เราพัฒนาบริการได้ดียิ่งขึ้น<br><span class="highlight-text">เตรียมพบกับ <span class="pink">Kello</span> เร็วๆ นี้!</span>',
    next: 'ถัดไป →',
    prev: 'ย้อนกลับ',
    finish: 'เสร็จสิ้น',
    etc: 'อื่นๆ',
    etcPlaceholder: 'พิมพ์ที่นี่...',
    maxSelectMsg: '(เลือกได้สูงสุด 3 ข้อ)',
    completeTitle: 'ขอบคุณที่เข้าร่วม! 🎉',
    completeMsg: 'ความคิดเห็นของคุณจะนำไปร่วมพัฒนาบริการของ Kello',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: 'คุณเคยไปเกาหลีหรือ\nมีแผนจะเดินทางไปหรือไม่?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'single', label: 'Step 2', title: 'คุณเคยใช้บริการจองในเกาหลีหรือไม่?\n<span class="small-title">(ร้านอาหาร, ร้านเสริมสวย, โรงแรม ฯลฯ)</span>', options: ['YES', 'NO'], autoNext: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: 'บริการเสริมความงามที่คุณอยากลองในเกาหลีคืออะไร?', options: ['ทำผม', 'แต่งหน้า', 'ทำเล็บ', 'ดูแลผิวพรรณ', 'แว็กซ์', 'ต่อขนตา', 'สัก', 'ดูแลหนังศีรษะ', 'สครับผิว (ขัดตัว)', 'อื่นๆ'], hasEtc: true, grid: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: 'ความลำบากเมื่อจองร้านเสริมสวย?', options: ['อุปสรรคทางภาษา', 'การยืนยันเบอร์โทรศัพท์เกาหลี', 'ความไม่ชัดเจนของราคา', 'ข้อมูลไม่เพียงพอ', 'จองเวลาที่ต้องการยาก', 'อื่นๆ'], hasEtc: true },
      { id: 'q5', type: 'multiple', maxSelect: 3, label: 'Step 5', title: 'ฟีเจอร์ที่คุณต้องการ?', options: ['ฟีเจอร์แปลภาษา', 'ตัวแทนรับจอง', 'ข้อมูล/ราคาที่เชื่อถือได้', 'ระบบนำทาง', 'ข้อมูลขนส่งสาธารณะ', 'เรียกแท็กซี่', 'แชร์ข้อมูลในคอมมูนิตี้', 'อื่นๆ'], hasEtc: true },
      { id: 'q6', type: 'single', label: 'Step 6', title: 'หากปัญหาเหล่านี้ได้รับการแก้ไข\nคุณยินดีจะจ่ายค่าธรรมเนียมสำหรับบริการจองหรือไม่?', options: ['มี', 'ขึ้นอยู่กับเงื่อนไข', 'ไม่มี'], autoNext: true },
    ]
  },
  mn: {
    tagline: 'Таны анхны <span class="black">K-Beauty</span> <span class="black">H</span><span class="pink-stroke">ello</span>',
    loading: 'Kello ашиглан гоо сайхнаа шинэчилж байна...',
    finalLoading: 'Баярлалаа.<br>Таны санал хүсэлт үйлчилгээг сайжруулахад туслах болно.<br><span class="highlight-text">Удахгүй <span class="pink">Kello</span>-той танилцаарай!</span>',
    next: 'Дараах →',
    prev: 'Буцах',
    finish: 'Дуусгах',
    etc: 'Бусад',
    etcPlaceholder: 'Энд бичнэ үү...',
    maxSelectMsg: '(Дээд тал нь 3 сонгох)',
    completeTitle: 'Оролцсонд баярлалаа! 🎉',
    completeMsg: 'Таны санал Kello-ийн үйлчилгээнд тусгагдах болно.',
    steps: [
      { id: 'q1', type: 'single', label: 'Step 1', title: 'Та Солонгост очиж байсан уу,\nэсвэл очих төлөвлөгөөтэй юу?', options: ['YES', 'NO'], autoNext: true },
      { id: 'q2', type: 'single', label: 'Step 2', title: 'Та Солонгост захиалгын үйлчилгээ ашиглаж байсан уу?\n<span class="small-title">(Ресторан, гоо сайхан, зочид буудал г.м)</span>', options: ['YES', 'NO'], autoNext: true },
      { id: 'q3', type: 'multiple', maxSelect: 3, label: 'Step 3', title: 'Солонгост ямар үйлчилгээг туршиж үзмээр байна вэ?', options: ['Үс засалт', 'Нүүр будалт', 'Хумс засал', 'Арьс арчилгаа', 'Вакс', 'Сормуус', 'Шивээс', 'Хуйхны арчилгаа', 'Биеийн скраб', 'Бусад'], hasEtc: true, grid: true },
      { id: 'q4', type: 'multiple', maxSelect: 3, label: 'Step 4', title: 'Салон захиалахад тулгардаг бэрхшээл?', options: ['Хэлний бэрхшээл', 'Солонгос утасны дугаар баталгаажуулах', 'Үнэ тодорхойгүй байх', 'Мэдээлэл дутмаг', 'Хүссэн цагтаа захиалах хэцүү', 'Бусад'], hasEtc: true },
      { id: 'q5', type: 'multiple', maxSelect: 3, label: 'Step 5', title: 'Танд ямар функц хэрэгтэй вэ?', options: ['Орчуулга', 'Захиалгын үйлчилгээ', 'Найдвартай мэдээлэл/Үнэ', 'Газрын зураг', 'Нийтийн тээврийн мэдээлэл', 'Такси дуудах', 'Олон нийтийн мэдээлэл хуваалцах', 'Бусад'], hasEtc: true },
      { id: 'q6', type: 'single', label: 'Step 6', title: 'Хэрэв эдгээр асуудлууд шийдэгдвэл\nта захиалгын үйлчилгээний төлбөр төлөхөд бэлэн үү?', options: ['Тийм', 'Нөхцөл байдлаас хамаарна', 'Үгүй'], autoNext: true },
    ]
  }
};

// ── State ─────────────────────────────────────────────────────
let currentLang = 'ko';
let currentStep = 0;
const answers = {}; 
const etcTags = { q3: [], q4: [], q5: [] }; 

// ── Language Detection ───────────────────────────────────────
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'en';
  currentLang = lang;
  
  // Update Tab UI
  document.querySelectorAll('.lang-tab').forEach(t => {
    if (t.dataset.lang === lang) t.classList.add('active');
    else t.classList.remove('active');
  });
  
  render(currentStep);
}

async function initLanguage() {
  // 1. First priority: Browser/Phone language settings
  const browserLang = navigator.language.split('-')[0];
  const supportedLangs = Object.keys(TRANSLATIONS);
  
  if (supportedLangs.includes(browserLang)) {
    setLanguage(browserLang);
    // Even if found, we can still fetch geo in background for analytics if needed, 
    // but here we just stop if browser lang is supported.
    return;
  }

  // 2. Second priority: Geolocation (IP-based)
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (res.ok) {
      const data = await res.json();
      const countryCode = data.country_code;
      const countryToLang = {
        'KR': 'ko',
        'JP': 'ja',
        'CN': 'zh', 'TW': 'zh', 'HK': 'zh',
        'VN': 'vi',
        'TH': 'th',
        'MN': 'mn'
      };
      const geoLang = countryToLang[countryCode];
      if (geoLang && TRANSLATIONS[geoLang]) {
        setLanguage(geoLang);
        return;
      }
    }
  } catch (err) {
    console.warn('Geolocation detection failed:', err);
  }

  // 3. Default fallback
  setLanguage('en');
}

// ── Helpers ──────────────────────────────────────────────────
/**
 * Maps localized answer values to their Korean equivalents for consistent DB storage.
 */
function toKorean(stepId, selectedValues) {
  if (!selectedValues || (Array.isArray(selectedValues) && selectedValues.length === 0)) {
    return selectedValues;
  }
  
  const koT = TRANSLATIONS.ko;
  // If already in Korean, no need to map (but we still map 'Etc' to '기타' if needed, 
  // though it should already be '기타').
  if (currentLang === 'ko') return selectedValues;

  const currentT = TRANSLATIONS[currentLang];
  
  const stepIdx = koT.steps.findIndex(s => s.id === stepId);
  if (stepIdx === -1) return selectedValues;
  
  const koStep = koT.steps[stepIdx];
  const currentStep = currentT.steps[stepIdx];
  
  const mapValue = (val) => {
    if (!val) return val;
    // Check if it's the "Etc" option in current language
    if (val === currentT.etc) return koT.etc;
    
    // Find index in current language options
    const optIdx = currentStep.options.indexOf(val);
    if (optIdx !== -1 && koStep.options[optIdx]) {
      return koStep.options[optIdx];
    }
    return val;
  };

  if (Array.isArray(selectedValues)) {
    return selectedValues.map(mapValue);
  }
  return mapValue(selectedValues);
}

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
      visit_experience:   data.visit_experience,
      booking_experience: data.booking_experience,
      service_type:       data.service_type,
      service_etc:        data.service_etc,
      pain_points:        data.pain_points,
      pain_etc:           data.pain_etc,
      needed_features:    data.needed_features,
      feature_etc:        data.feature_etc,
      willingness_to_pay: data.willingness_to_pay,
      language:           currentLang
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
      <button class="btn-next" id="next-btn">${stepIndex === t.steps.length - 1 ? t.finish : t.next}</button>
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

  // Apply line break before hint if maxSelect exists
  const displayTitle = step.maxSelect 
    ? `${step.title}<br><span class="limit-hint" style="font-size: 0.8rem; opacity: 0.7; display: block; margin-top: 4px;">${t.maxSelectMsg}</span>` 
    : step.title;

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
        answers[step.id].splice(idx, 1);
        btn.classList.remove('selected');
        if (step.hasEtc && value === etcText) etcBox?.classList.remove('show');
      } else {
        if (step.maxSelect && answers[step.id].length >= step.maxSelect) {
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
  const t = TRANSLATIONS[currentLang];

  // 1. Update loading text to specific final message
  const loadingTextEl = document.getElementById('loading-text');
  if (loadingTextEl) loadingTextEl.innerHTML = t.finalLoading;

  // 2. Show loading screen
  surveyScreen.classList.remove('active');
  loadingScreen.classList.add('active');

  // 3. Save to Supabase (map to Korean for easy reading)
  const data = {
    visit_experience:   toKorean('q1', answers['q1'] || ''),
    booking_experience: toKorean('q2', answers['q2'] || ''),
    service_type:       Array.isArray(answers['q3']) 
                          ? toKorean('q3', answers['q3']).join(', ') 
                          : toKorean('q3', answers['q3'] || ''),
    service_etc:        etcTags['q3'].join(', '),
    pain_points:        toKorean('q4', answers['q4'] || []),
    pain_etc:           etcTags['q4'].join(', '),
    needed_features:    toKorean('q5', answers['q5'] || []),
    feature_etc:        etcTags['q5'].join(', '),
    willingness_to_pay: toKorean('q6', answers['q6'] || ''),
  };
  try { await saveSurvey(data); } catch (err) { console.error(err); }

  // 4. Redirect to official site after 3 seconds of showing the detailed loading message
  setTimeout(() => {
    window.location.href = 'https://www.mykello.com/';
  }, 3000);
}

langTabs.addEventListener('click', (e) => {
  const tab = e.target.closest('.lang-tab');
  if (!tab) return;
  setLanguage(tab.dataset.lang);
});

// Initialize with auto language detection
initLanguage();
