import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks in a way that's safe for Vite and browsers
const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || 'https://urxwfvfaxpxigzmulbdb.supabase.co';
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyeHdmdmZheHB4aWd6bXVsYmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzOTAyMTIsImV4cCI6MjA5MTk2NjIxMn0.Tw4m6AJwTf_gHFWF26AdQmP9TAwVebEmC5I-i1VXrAw';

let supabase = null;
if (supabaseUrl && supabaseAnonKey) {
    try {
        supabase = createClient(supabaseUrl, supabaseAnonKey);
    } catch (e) {
        console.error("Failed to initialize Supabase client:", e);
    }
} else {
    console.warn("Supabase credentials missing. Data will not be saved.");
}

const translations = {
    ko: {
        loading: "Kello로 뷰티업데이트 중..",
        result_title: "준비가 완료되었어요!",
        result_desc: "당신에게 딱 맞는 매장들을 확인해보세요.",
        cta_btn: "👉 맞춤 매장 보러가기",
        next_btn: "다음",
        tagline: '<span class="highlight">K</span>-뷰티의 첫 H<span class="highlight">e</span><span class="highlight">ll</span><span class="highlight">o</span>',
        etc: "기타",
        steps: [
            {
                type: "single",
                title: "한국에 방문한 적 있거나\n방문 계획이 있나요?",
                options: ["Yes", "No"],
            },
            {
                type: "multiple",
                title: "한국에서 해보고 싶은 서비스?",
                subtitle: "(중복 선택 가능)",
                options: [
                    "헤어", "메이크업", "네일아트", 
                    "피부관리(에스테틱)", "왁싱", 
                    "속눈썹", "타투", "두피관리", "세신", "기타"
                ],
            },
            {
                type: "multiple",
                title: "뷰티샵 예약 시 불편한 점?",
                subtitle: "(중복 선택 가능)",
                options: [
                    "의사소통 문제", "한국 번호 인증", 
                    "가격 신뢰 문제", "업체 정보 부족", 
                    "원하는 시간대 예약 어려움", "기타"
                ],
            },
            {
                type: "multiple",
                title: "필요한 서비스 기능?",
                subtitle: "(중복 선택 가능)",
                options: [
                    "번역 기능", "예약 대행 서비스", 
                    "신뢰할 수 있는 업체/가격 정보", "네비게이션 기능", 
                    "대중교통 정보 안내", "택시 호출 기능", "커뮤니티 정보 공유 (맛집, 숙박)", "기타"
                ],
            }
        ]
    },
    en: {
        loading: "Updating your beauty with Kello...",
        result_title: "Ready to go!",
        result_desc: "Check out the best shops curated for you.",
        cta_btn: "👉 View My Matches",
        next_btn: "Next",
        tagline: 'Your first H<span class="highlight">e</span><span class="highlight">ll</span><span class="highlight">o</span> to <span class="highlight">K</span>-Beauty',
        etc: "Etc",
        steps: [
            {
                type: "single",
                title: "Have you visited Korea or\ndo you have plans to visit?",
                options: ["Yes", "No"],
            },
            {
                type: "multiple",
                title: "What services do you want to try in Korea?",
                subtitle: "(Multiple selection available)",
                options: [
                    "Hair", "Makeup", "Nail Art", 
                    "Skin Care", "Waxing", 
                    "Eyelashes", "Tattoo", "Scalp Care", "Scrub", "Etc"
                ],
            },
            {
                type: "multiple",
                title: "Challenges when booking a beauty shop?",
                subtitle: "(Multiple selection available)",
                options: [
                    "Communication issues", "Phone authentication", 
                    "Price reliability", "Lack of info", 
                    "Booking difficulty", "Etc"
                ],
            },
            {
                type: "multiple",
                title: "Features you'd find helpful?",
                subtitle: "(Multiple selection available)",
                options: [
                    "Translation", "Booking proxy", 
                    "Verified info/price", "Navigation", 
                    "Public transport info", "Taxi calling", "Community sharing (Food, Stay)", "Etc"
                ],
            }
        ]
    },
    ja: {
        loading: "Kelloでビューティーアップデート中...",
        result_title: "準備ができました！",
        result_desc: "あなたに最適なショップを確認しましょう。",
        cta_btn: "👉 おすすめの店を見る",
        next_btn: "次へ",
        tagline: '<span class="highlight">K</span>-Beautyへの最初のH<span class="highlight">e</span><span class="highlight">ll</span><span class="highlight">o</span>',
        etc: "その他",
        steps: [
            {
                type: "single",
                title: "韓国에訪問したことがありますか、\nまたは訪問予定がありますか？",
                options: ["Yes", "No"],
            },
            {
                type: "multiple",
                title: "韓国でやってみたいサービスは？",
                subtitle: "(複数選択可能)",
                options: [
                    "ヘア", "メイク", "ネイル", 
                    "スキンケア", "ワクシング", 
                    "まつげ", "タトゥー", "頭皮ケア", "あかすり", "その他"
                ],
            },
            {
                type: "multiple",
                title: "美容室予約時の不便な点は？",
                subtitle: "(複数選択可能)",
                options: [
                    "コミュニケーション", "韓国番号認証", 
                    "価格の信頼性", "店舗情報不足", 
                    "予約의難しさ", "その他"
                ],
            },
            {
                type: "multiple",
                title: "必要なサービス機能は？",
                subtitle: "(複数選択可能)",
                options: [
                    "翻訳機能", "予約代行", 
                    "信頼できる情報", "ナビゲーション", 
                    "公共交通機関案内", "タクシー呼び出し", "コミュニティ共有 (グルメ, 宿泊)", "その他"
                ],
            }
        ]
    },
    zh: {
        loading: "正在通过 Kello 更新您的美丽资讯...",
        result_title: "准备就绪！",
        result_desc: "快来查看为您精心挑选的门店吧。",
        cta_btn: "👉 查看我的匹配门店",
        next_btn: "下一步",
        tagline: '开启 <span class="highlight">K</span>-Beauty 的第一个 H<span class="highlight">e</span><span class="highlight">ll</span><span class="highlight">o</span>',
        etc: "其他",
        steps: [
            {
                type: "single",
                title: "您去过韩国或有访问计划吗？",
                options: ["Yes", "No"],
            },
            {
                type: "multiple",
                title: "在韩国想尝试的服务？",
                subtitle: "(可多选)",
                options: [
                    "理发", "化妆", "美甲", 
                    "皮肤管理", "脱毛", 
                    "睫毛", "纹身", "头皮护理", "搓澡", "其他"
                ],
            },
            {
                type: "multiple",
                title: "预约美容店时的不便点？",
                subtitle: "(可多选)",
                options: [
                    "沟通问题", "韩国手机号认证", 
                    "价格信任问题", "信息不足", 
                    "预约困难", "其他"
                ],
            },
            {
                type: "multiple",
                title: "需要的服务功能？",
                subtitle: "(可多选)",
                options: [
                    "翻译功能", "预约代行", 
                    "可靠的信息", "导航", 
                    "公共交通信息", "叫车服务", "社区分享 (美食, 住宿)", "其他"
                ],
            }
        ]
    }
};

let currentLang = 'ko';
let currentStep = 0;
let answers = {};

const questionBody = document.getElementById('question-body');
const progressLine = document.getElementById('progress-line');
const logoTagline = document.getElementById('logo-tagline');
const progressText = document.getElementById('progress-text');
const backBtn = document.getElementById('back-btn');
const loadingOverlay = document.getElementById('loading-overlay');
const resultContainer = document.getElementById('result-container');
const mainContent = document.getElementById('main-content');
const ctaBtn = document.getElementById('cta-btn');
const langSelector = document.getElementById('lang-selector');

function initLang() {
    langSelector.value = currentLang;
    langSelector.addEventListener('change', (e) => {
        currentLang = e.target.value;
        renderStep(currentStep);
    });
}

function renderUI() {
    const t = translations[currentLang] || translations['ko'];
    ctaBtn.innerText = t.cta_btn;
    if (logoTagline) logoTagline.innerHTML = t.tagline; // Added tagline update
    document.querySelector('.loading-text').innerText = t.loading;
    document.querySelector('.result-container h2').innerText = t.result_title;
    document.querySelector('.result-container p').innerText = t.result_desc;
}

function renderStep(stepIndex) {
    const t = translations[currentLang] || translations['ko'];
    const step = t.steps[stepIndex];
    if (!step) return;

    renderUI();

    // Show/Hide back button
    if (stepIndex > 0) {
        backBtn.classList.remove('hidden');
    } else {
        backBtn.classList.add('hidden');
    }

    // Animation: Fade out
    questionBody.classList.add('fade-out');
    
    setTimeout(() => {
        const stepAnswers = answers[`step_${stepIndex}`] || (step.type === 'multiple' ? [] : null);
        
        questionBody.innerHTML = `
            <div class="step-header">
                <span class="step-indicator">Step ${stepIndex + 1}</span>
                <h1>${step.title.replace('\n', '<br>')}</h1>
                ${step.subtitle ? `<p class="step-subtitle">${step.subtitle}</p>` : ''}
            </div>
            <div class="options-grid ${step.options.length > 5 ? 'grid-2' : ''}">
                ${step.options.map(option => {
                    const isSelected = step.type === 'multiple' 
                        ? (Array.isArray(stepAnswers) && stepAnswers.includes(option))
                        : stepAnswers === option;
                    return `
                        <div class="option-card ${isSelected ? 'selected' : ''}" onclick="toggleOption('${option}', ${stepIndex})">
                            ${option}
                        </div>
                    `;
                }).join('')}
                
                ${step.options.includes(t.etc) ? `
                    <div id="etc-container-${stepIndex}" class="etc-input-container ${answers[`step_${stepIndex}`] && answers[`step_${stepIndex}`].includes(t.etc) ? 'active' : ''}">
                        <div class="etc-input-wrapper">
                            <input type="text" id="etc-input-${stepIndex}" class="etc-input" 
                                placeholder="${t.etc}..." 
                                value="${answers[`etc_text_${stepIndex}`] || ''}" 
                                oninput="updateEtcValue(this.value, ${stepIndex})">
                            <button class="etc-confirm-btn" onclick="toggleOption('${t.etc}', ${stepIndex})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </button>
                        </div>
                    </div>
                ` : ''}

                <div id="etc-tags-${stepIndex}" class="etc-tags-container">
                    ${answers[`etc_text_${stepIndex}`] && !answers[`step_${stepIndex}`]?.includes(t.etc) ? `
                        <div class="etc-tag">
                            <span>${answers[`etc_text_${stepIndex}`]}</span>
                            <button onclick="clearEtc(${stepIndex})">&times;</button>
                        </div>
                    ` : ''}
                </div>
            </div>
            ${step.type === 'multiple' ? `
                <div class="footer-actions">
                    <button class="btn btn-primary next-step-btn" onclick="goToNextStep()">
                        ${t.next_btn}
                    </button>
                </div>
            ` : ''}
        `;
        
        // Update Progress
        const progress = ((stepIndex + 1) / t.steps.length) * 100;
        progressLine.style.width = `${progress}%`;
        progressText.innerText = `${stepIndex + 1}/${t.steps.length}`;
        
        // Reset and animate in
        questionBody.classList.remove('fade-out');
        questionBody.classList.add('fade-in');
        
        setTimeout(() => {
            questionBody.classList.remove('fade-in');
        }, 50);
    }, 300);
}

window.toggleOption = function(option, stepIndex) {
    const t = translations[currentLang] || translations['ko'];
    const step = t.steps[stepIndex];
    
    if (step.type === 'single') {
        answers[`step_${stepIndex}`] = option;
        renderStep(stepIndex);
        setTimeout(() => {
            goToNextStep();
        }, 400);
    } else {
        if (!answers[`step_${stepIndex}`]) {
            answers[`step_${stepIndex}`] = [];
        }
        
        const index = answers[`step_${stepIndex}`].indexOf(option);
        if (index > -1) {
            answers[`step_${stepIndex}`].splice(index, 1);
        } else {
            answers[`step_${stepIndex}`].push(option);
        }
        
        const cards = document.querySelectorAll('.option-card');
        cards.forEach(card => {
            if (card.innerText.trim() === option) {
                card.classList.toggle('selected');
            }
        });

        // Update Etc input visibility instantly
        const etcContainer = document.getElementById(`etc-container-${stepIndex}`);
        if (etcContainer && option === t.etc) {
            etcContainer.classList.toggle('active');
            if (etcContainer.classList.contains('active')) {
                setTimeout(() => document.getElementById(`etc-input-${stepIndex}`)?.focus(), 100);
            }
        }

        // Update tags list instantly
        const tagsContainer = document.getElementById(`etc-tags-${stepIndex}`);
        if (tagsContainer) {
            const hasEtc = answers[`step_${stepIndex}`].includes(t.etc);
            const etcText = answers[`etc_text_${stepIndex}`];
            if (etcText && !hasEtc) {
                tagsContainer.innerHTML = `
                    <div class="etc-tag">
                        <span>${etcText}</span>
                        <button onclick="clearEtc(${stepIndex})">&times;</button>
                    </div>
                `;
            } else {
                tagsContainer.innerHTML = '';
            }
        }
    }
};

window.updateEtcValue = function(value, stepIndex) {
    answers[`etc_text_${stepIndex}`] = value;
};

window.clearEtc = function(stepIndex) {
    delete answers[`etc_text_${stepIndex}`];
    const tagsContainer = document.getElementById(`etc-tags-${stepIndex}`);
    if (tagsContainer) tagsContainer.innerHTML = '';
};

window.goToNextStep = function() {
    const t = translations[currentLang] || translations['ko'];
    
    // Save current step etc text if it's multiple
    const step = t.steps[currentStep];
    const etcInput = document.getElementById(`etc-input-${currentStep}`);
    if (step.type === 'multiple' && step.options.includes(t.etc) && etcInput) {
        if (answers[`step_${currentStep}`].includes(t.etc)) {
            answers[`etc_text_${currentStep}`] = etcInput.value;
        }
    }

    if (currentStep < t.steps.length - 1) {
        currentStep++;
        renderStep(currentStep);
    } else {
        finishSurvey();
    }
};

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderStep(currentStep);
    }
}

async function finishSurvey() {
    mainContent.classList.add('hidden');
    document.querySelector('.progress-wrapper').classList.add('hidden');
    document.querySelector('.lang-container').classList.add('hidden');
    
    loadingOverlay.classList.remove('hidden');

    try {
        // Save to Supabase if client is available
        if (supabase) {
            const { error } = await supabase
                .from('survey_responses')
                .insert([
                    { 
                        answers: answers, 
                        language: currentLang,
                        created_at: new Date().toISOString()
                    }
                ]);

            if (error) throw error;
            console.log("Survey saved successfully!");
        } else {
            console.warn("Survey not saved to database (client unavailable).");
        }
    } catch (err) {
        console.error("Error saving survey:", err);
    }
    
    setTimeout(() => {
        window.location.href = 'https://www.mykello.com/';
    }, 2000);
}

backBtn.onclick = prevStep;
ctaBtn.onclick = () => window.location.href = 'https://www.mykello.com/';

try {
    initLang();
    renderStep(0);
} catch (e) {
    console.error("Critical error during initialization:", e);
}
