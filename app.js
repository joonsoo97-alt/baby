/* ============================== 아이콘 ============================== */
const ICON_PATHS = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h5v-6h4v6h5V9.5"/>',
  meal: '<path d="M6 2v6a2 2 0 004 0V2"/><path d="M8 10v12"/><path d="M17 2c-1.7 0-3 2.2-3 6s1.3 6 3 6"/><path d="M17 14v8"/>',
  heart: '<path d="M12 21s-7-4.35-9.5-8.5C.7 9 2 5 5.5 5c2 0 3.5 1.2 4.5 2.7C11 6.2 12.5 5 14.5 5 18 5 19.3 9 17.5 12.5 15 16.65 12 21 12 21z"/>',
  check: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 12l3 3 5-6"/>',
  activity: '<path d="M3 12h4l2 8 4-16 2 8h6"/>',
  camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7l1.5-3h5L16 7"/><circle cx="12" cy="13.5" r="3.3"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  alert: '<path d="M12 3 1 21h22L12 3z"/><path d="M12 10v5M12 18h.01"/>',
  sprout: '<path d="M12 21V10"/><path d="M12 10c0-3-2-5-6-5 0 4 2 6 6 6"/><path d="M12 9c0-3 2-5 6-5 0 4-2 6-6 6"/>',
  video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M16 10l6-3v10l-6-3"/>',
  music: '<circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/><path d="M9 18V4l12-2v14"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0014 0"/><path d="M12 18v4"/>',
  square: '<rect x="5" y="5" width="14" height="14" rx="2"/>',
  play: '<path d="M7 5l12 7-12 7V5z"/>',
  stethoscope: '<path d="M5 3v6a4 4 0 008 0V3"/><path d="M9 15a5 5 0 0010 0v-2"/><circle cx="19" cy="9" r="2"/>',
  scale: '<path d="M12 3v3"/><path d="M4 21h16"/><path d="M5 6h14"/><path d="M7 6l-3 7a3 3 0 006 0z"/><path d="M17 6l-3 7a3 3 0 006 0z"/>',
  download: '<path d="M12 3v12"/><path d="M7 10l5 5 5-5"/><path d="M4 21h16"/>',
  upload: '<path d="M12 21V9"/><path d="M7 14l5-5 5 5"/><path d="M4 21h16"/>',
};
function icon(name, size, cls) {
  return `<svg width="${size||18}" height="${size||18}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${cls||''}">${ICON_PATHS[name]||''}</svg>`;
}

/* ============================== 데이터 ============================== */
const FETAL_DATA = {
  4: ["참깨씨", "아기집이 자궁에 자리를 잡기 시작해요."],
  5: ["참깨", "심장의 원형이 만들어지기 시작해요."],
  6: ["완두콩", "심장이 뛰기 시작하고 신경관이 발달해요."],
  7: ["블루베리", "팔다리의 싹이 자라나기 시작해요."],
  8: ["라즈베리", "손가락과 발가락의 형태가 잡혀가요."],
  9: ["포도", "얼굴의 이목구비가 점점 또렷해져요."],
  10: ["딸기", "주요 장기가 대부분 형성돼요."],
  11: ["무화과", "이 시기부터 '태아'라고 불리기 시작해요."],
  12: ["자두", "손톱과 발톱이 자라기 시작해요."],
  13: ["복숭아", "1분기가 마무리되고 있어요."],
  14: ["레몬", "목이 길어지고 표정을 지을 수 있게 돼요."],
  15: ["사과", "뼈가 단단해지기 시작해요."],
  16: ["아보카도", "머리카락과 눈썹이 자라기 시작해요."],
  17: ["석류", "피하지방층이 생기기 시작해요."],
  18: ["파프리카", "귀가 제자리를 잡고 소리에 반응할 수 있어요."],
  19: ["토마토", "감각기관이 빠르게 발달해요."],
  20: ["바나나", "임신 중반이에요. 태동을 느끼기 시작할 수 있어요."],
  21: ["당근", "눈썹과 속눈썹이 자라요."],
  22: ["파파야", "피부에 주름이 있고 솜털이 자라요."],
  23: ["자몽", "청각이 발달해 외부 소리를 들을 수 있어요."],
  24: ["옥수수", "폐가 발달하는 중요한 시기예요."],
  25: ["콜리플라워", "손을 쥐는 반사 행동이 나타나요."],
  26: ["양상추", "눈을 뜨고 감을 수 있어요."],
  27: ["브로콜리", "2분기가 마무리되고 있어요."],
  28: ["가지", "3분기 시작, 눈을 깜빡일 수 있어요."],
  29: ["버터넛호박", "뇌와 근육이 빠르게 발달해요."],
  30: ["양배추", "양수 안에서 활발히 움직여요."],
  31: ["코코넛", "오감이 계속 발달해요."],
  32: ["잭프루트", "손톱과 발톱이 다 자라요."],
  33: ["파인애플", "뼈가 단단해지되 두개골은 유연함을 유지해요."],
  34: ["멜론", "피부가 매끈해지기 시작해요."],
  35: ["허니듀멜론", "신장이 완전히 발달해요."],
  36: ["로메인상추", "머리를 아래로 향하는 자세를 잡기 시작할 수 있어요."],
  37: ["근대", "만삭에 가까워지고 있어요."],
  38: ["대파", "장기가 대부분 완성돼요."],
  39: ["미니수박", "출산 준비가 거의 끝나가요."],
  40: ["수박", "드디어 예정일이에요!"],
};

const CHECKLIST_TEMPLATE = [
  { id: "t1-1", trimester: 1, label: "산부인과 첫 방문 및 임신 확인" },
  { id: "t1-2", trimester: 1, label: "엽산제 등 임신부 영양제 챙기기 시작" },
  { id: "t1-3", trimester: 1, label: "1차 기형아 검사(NIPT 등) 일정 확인" },
  { id: "t1-4", trimester: 1, label: "입덧 대비 간식·물 챙기기" },
  { id: "t2-1", trimester: 2, label: "정밀 초음파(20~22주) 예약" },
  { id: "t2-2", trimester: 2, label: "임신성 당뇨 검사(24~28주) 예약" },
  { id: "t2-3", trimester: 2, label: "태동 기록 시작하기" },
  { id: "t2-4", trimester: 2, label: "혼인신고·출생신고 등 서류 사전 확인" },
  { id: "t2-5", trimester: 2, label: "육아용품 리스트 작성 시작" },
  { id: "t3-1", trimester: 3, label: "출산 병원·분만 계획 확정" },
  { id: "t3-2", trimester: 3, label: "출산 가방(입원용품) 준비" },
  { id: "t3-3", trimester: 3, label: "카시트 등 신생아 용품 구비" },
  { id: "t3-4", trimester: 3, label: "육아휴직·출산휴가 신청" },
  { id: "t3-5", trimester: 3, label: "산후조리원 예약 확인" },
  { id: "t3-6", trimester: 3, label: "비상 연락망·병원 이동 경로 확인" },
];

const FOOD_CAUTION_WORDS = ["회","육회","생선회","훈제연어","참치","알코올","술","와인","맥주","소주","막걸리","커피","카페인","에너지드링크","생계란","반숙","블루치즈","생햄","저온살균안","비살균","리스테리아"];
const MOODS = ["설렘", "행복", "평온", "피곤", "불안", "걱정", "뿌듯"];
const TABS = [
  { id: "home", label: "홈", icon: "home" },
  { id: "meals", label: "식단", icon: "meal" },
  { id: "diary", label: "일기", icon: "heart" },
  { id: "checklist", label: "체크리스트", icon: "check" },
  { id: "health", label: "건강기록", icon: "activity" },
  { id: "media", label: "미디어", icon: "camera" },
  { id: "settings", label: "설정", icon: "settings" },
];
const MAX_IMAGE_RAW = 15 * 1024 * 1024;
const MAX_VIDEO_RAW = 25 * 1024 * 1024;
const MAX_AUDIO_RAW = 10 * 1024 * 1024;

/* ============================== 유틸 ============================== */
function pad(n) { return String(n).padStart(2, "0"); }
function toISODate(d) { return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; }
function todayISO() { return toISODate(new Date()); }
function uid() { return Math.random().toString(36).slice(2, 10) + Date.now().toString(36); }
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

function calcPregnancy(dueDateStr) {
  if (!dueDateStr) return null;
  const due = new Date(dueDateStr + "T00:00:00");
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const totalDays = 280, msPerDay = 86400000;
  const daysUntilDue = Math.round((due - today) / msPerDay);
  const daysPregnant = totalDays - daysUntilDue;
  const week = Math.floor(daysPregnant / 7) + 1;
  const trimester = week <= 13 ? 1 : week <= 27 ? 2 : 3;
  return { week: Math.max(1, Math.min(42, week)), daysUntilDue, trimester };
}

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = (e) => resolve(e.target.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}
function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = (e) => resolve(e.target.result);
    r.onerror = reject;
    r.readAsDataURL(blob);
  });
}
function resizeImage(file, maxW = 640, quality = 0.75) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxW / img.width);
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

/* ============================== IndexedDB ============================== */
const DB_NAME = "pregnancy-diary-db";
const STORE = "kv";
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => { req.result.createObjectStore(STORE); };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idbGet(key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).get(key);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idbSet(key, value) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(value, key);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => reject(tx.error);
  });
}
async function idbDelete(key) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete(key);
    tx.oncomplete = () => resolve(true);
    tx.onerror = () => reject(tx.error);
  });
}
async function idbAllKeys() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readonly");
    const req = tx.objectStore(STORE).getAllKeys();
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function loadKey(key, fallback) {
  try { const v = await idbGet(key); return v === undefined ? fallback : v; }
  catch (e) { return fallback; }
}
async function saveKey(key, value) { try { await idbSet(key, value); } catch (e) { console.error(e); } }

/* ============================== 상태 ============================== */
let S = { settings: {}, meals: [], diary: [], checked: {}, custom: [], weightLog: [], checkups: [], mediaIndex: [], voiceIndex: [] };
let ui = {
  tab: "home", mealType: "아침", diaryAuthor: "산모", diaryMood: "설렘",
  mediaType: "image", healthSub: "weight",
  avBlobCache: {}, voiceBlobCache: {},
  recording: false, recSeconds: 0, recTimer: null, mediaRecorder: null, chunks: [], micStream: null,
  reportOpen: false, reportFilters: {},
};

async function boot() {
  S.settings = await loadKey("settings", {});
  S.meals = await loadKey("meals", []);
  S.diary = await loadKey("diary", []);
  S.checked = await loadKey("checklist-checked", {});
  S.custom = await loadKey("checklist-custom", []);
  S.weightLog = await loadKey("health-weight", []);
  S.checkups = await loadKey("health-checkups", []);
  S.mediaIndex = await loadKey("media-index", []);
  S.voiceIndex = await loadKey("health-voice-index", []);
  render();
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function preg() { return calcPregnancy(S.settings.dueDate); }

/* ============================== 공통 렌더 조각 ============================== */
function chip(groupClass, value, label, active, extra) {
  return `<button type="button" class="chip ${active ? "active" : ""}" data-value="${esc(value)}" ${extra||""}>${label}</button>`;
}

/* ============================== 온보딩 ============================== */
function renderOnboarding() {
  return `
  <div class="onboard-wrap">
    <div class="card onboard-card">
      <div class="text-center" style="margin-bottom:16px;">
        ${icon("sprout", 26)}
        <h1 style="font-size:21px;font-weight:700;margin:8px 0 4px;">아기의 태명을 지어주세요</h1>
        <p class="muted">시작하기 전에 우리 아기를 부를 이름이 필요해요.</p>
      </div>
      <div class="field"><label>태명 *</label><input id="ob-nick" class="input" placeholder="예: 콩이, 튼튼이" /></div>
      <div class="field"><label>출산예정일 *</label><input id="ob-due" type="date" class="input" /></div>
      <div class="field"><label>산모 이름 (선택)</label><input id="ob-partner" class="input" placeholder="예: 지은" /></div>
      <div id="ob-err" class="err-text" style="display:none;">태명과 출산예정일을 입력해주세요.</div>
      <button class="btn-primary" onclick="submitOnboarding()">시작하기</button>
    </div>
  </div>`;
}
async function submitOnboarding() {
  const nick = document.getElementById("ob-nick").value.trim();
  const due = document.getElementById("ob-due").value;
  const partner = document.getElementById("ob-partner").value.trim();
  if (!nick || !due) { document.getElementById("ob-err").style.display = "block"; return; }
  S.settings = { babyNickname: nick, dueDate: due, partnerName: partner };
  await saveKey("settings", S.settings);
  render();
}

/* ============================== 홈 ============================== */
function renderHome() {
  const p = preg();
  const nick = S.settings.babyNickname || "아기";
  const week = p.week;
  const fetal = FETAL_DATA[Math.min(40, Math.max(4, week))];
  const todayMeals = S.meals.filter((m) => m.date === todayISO());
  const weekDiary = S.diary.filter((d) => d.week === week);
  const templ = CHECKLIST_TEMPLATE.filter((c) => c.trimester === p.trimester);
  const done = templ.filter((c) => S.checked[c.id]).length;
  const pct = templ.length ? Math.round((done / templ.length) * 100) : 0;
  const dialR = 56, circ = 2 * Math.PI * dialR, dialPct = Math.min(1, week / 40);
  const offset = circ * (1 - dialPct);

  const chartHtml = S.weightLog.length > 1 ? renderMiniChart(S.weightLog.slice(-10)) : "";

  return `
  <div class="flex-col gap-3">
    <div class="card" style="background:linear-gradient(135deg,var(--sage-light),#fff);">
      <div class="flex items-center gap-3">
        <div class="dial-wrap">
          <svg width="132" height="132" style="transform:rotate(-90deg)">
            <circle cx="66" cy="66" r="${dialR}" stroke="var(--line)" stroke-width="10" fill="none"/>
            <circle cx="66" cy="66" r="${dialR}" stroke="var(--sage)" stroke-width="10" fill="none"
              stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
          </svg>
          <div class="dial-center">
            ${icon("sprout", 18)}
            <div class="serif" style="font-size:26px;font-weight:700;line-height:1.1;">${week}주</div>
            <div style="font-size:11px;color:var(--sub);">${Math.round(dialPct*100)}% 성장</div>
          </div>
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:12px;color:var(--sub);">${S.settings.partnerName ? esc(S.settings.partnerName)+"님과 "+esc(nick)+", " : ""}D-${p.daysUntilDue}</div>
          <div class="serif" style="font-size:17px;font-weight:600;margin-top:2px;">지금 ${esc(nick)}는 ${fetal[0]} 크기예요</div>
          <div style="font-size:13px;color:var(--sub);margin-top:4px;line-height:1.5;">${fetal[1]}</div>
        </div>
      </div>
    </div>
    <div class="grid-3">
      <div class="card stat-card"><div class="stat-num" style="color:var(--sage);">${todayMeals.length}</div><div class="stat-label">오늘 식단 기록</div></div>
      <div class="card stat-card"><div class="stat-num" style="color:var(--accent);">${weekDiary.length}</div><div class="stat-label">이번주 일기</div></div>
      <div class="card stat-card"><div class="stat-num" style="color:var(--gold);">${pct}%</div><div class="stat-label">체크리스트</div></div>
    </div>
    ${chartHtml}
  </div>`;
}

function renderMiniChart(data) {
  const w = 280, h = 120, pad = 24;
  const vals = data.map((d) => d.weight);
  const min = Math.min(...vals) - 1, max = Math.max(...vals) + 1;
  const stepX = (w - pad * 2) / Math.max(1, data.length - 1);
  const pts = data.map((d, i) => {
    const x = pad + i * stepX;
    const y = h - pad - ((d.weight - min) / (max - min)) * (h - pad * 2);
    return `${x},${y}`;
  }).join(" ");
  return `
  <div class="card">
    <div class="section-title"><h2>몸무게 추이</h2></div>
    <svg width="100%" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">
      <polyline points="${pts}" fill="none" stroke="var(--sage)" stroke-width="2.5"/>
      ${data.map((d, i) => { const x = pad + i * stepX; const y = h - pad - ((d.weight - min) / (max - min)) * (h - pad * 2); return `<circle cx="${x}" cy="${y}" r="3" fill="var(--sage)"/>`; }).join("")}
    </svg>
  </div>`;
}

/* ============================== 식단 ============================== */
function renderMeals() {
  const grouped = {};
  S.meals.forEach((m) => { (grouped[m.date] = grouped[m.date] || []).push(m); });
  const dates = Object.keys(grouped).sort().reverse();

  return `
  <div class="flex-col gap-3">
    <div class="card">
      <div class="section-title"><h2>오늘 뭐 해줬나요?</h2></div>
      <div class="grid-2">
        <div class="field"><label>날짜</label><input id="meal-date" type="date" class="input" value="${todayISO()}"/></div>
        <div class="field"><label>구분</label>
          <div class="flex gap-2 wrap" id="meal-type-group">
            ${["아침","점심","저녁","간식"].map(t=>chip("meal-type", t, t, ui.mealType===t, `onclick="selectMealType('${t}')"`)).join("")}
          </div>
        </div>
      </div>
      <div class="field"><label>메뉴</label><input id="meal-menu" class="input" placeholder="예: 소고기미역국, 계란찜" oninput="checkMealCaution()"/></div>
      <div id="meal-warn" class="warn-box" style="display:none;">${icon("alert",15)}<span>임신 중 주의가 필요할 수 있는 재료가 포함되어 있어요. 섭취 전 담당 의사와 상담해보세요.</span></div>
      <div class="field"><label>메모 (선택)</label><input id="meal-note" class="input" placeholder="예: 잘 먹었음, 입덧 있었음"/></div>
      <button class="btn-primary" onclick="addMeal()">${icon("plus",15)} 기록 추가</button>
    </div>
    ${dates.length===0 ? '<p class="muted text-center">아직 기록된 식단이 없어요.</p>' : dates.map((d) => `
      <div class="card">
        <div style="font-weight:600;font-size:13px;color:var(--sub);margin-bottom:8px;">${d}</div>
        <div class="flex-col gap-2">
          ${grouped[d].map((m) => `
            <div class="meal-row">
              <div style="min-width:0;">
                <span class="badge">${esc(m.mealType)}</span>
                <span style="font-size:14px;">${esc(m.menu)}</span>
                ${m.caution ? icon("alert",12) : ""}
                ${m.note ? `<div style="font-size:12px;color:var(--sub);margin-top:2px;">${esc(m.note)}</div>` : ""}
              </div>
              <button class="btn-icon danger" onclick="removeMeal('${m.id}')">${icon("trash",14)}</button>
            </div>`).join("")}
        </div>
      </div>`).join("")}
  </div>`;
}
function selectMealType(t) {
  ui.mealType = t;
  document.querySelectorAll("#meal-type-group .chip").forEach((el) => el.classList.toggle("active", el.dataset.value === t));
}
function checkMealCaution() {
  const v = document.getElementById("meal-menu").value;
  const c = FOOD_CAUTION_WORDS.some((w) => v.includes(w));
  document.getElementById("meal-warn").style.display = c ? "flex" : "none";
}
async function addMeal() {
  const menu = document.getElementById("meal-menu").value.trim();
  if (!menu) return;
  const date = document.getElementById("meal-date").value || todayISO();
  const note = document.getElementById("meal-note").value.trim();
  const caution = FOOD_CAUTION_WORDS.some((w) => menu.includes(w));
  S.meals = [{ id: uid(), date, mealType: ui.mealType, menu, note, caution }, ...S.meals];
  await saveKey("meals", S.meals);
  render();
}
async function removeMeal(id) { S.meals = S.meals.filter((m) => m.id !== id); await saveKey("meals", S.meals); render(); }

/* ============================== 일기 ============================== */
function renderDiary() {
  const p = preg();
  return `
  <div class="flex-col gap-3">
    <div class="card">
      <div class="section-title"><h2>${p.week}주차 일기</h2></div>
      <div class="flex gap-2" id="diary-author-group" style="margin-bottom:10px;">
        ${chip("", "산모", "산모 이야기", ui.diaryAuthor==="산모", `onclick="selectDiaryAuthor('산모')"`)}
        ${chip("", "아기", "아기에게", ui.diaryAuthor==="아기", `onclick="selectDiaryAuthor('아기')"`)}
      </div>
      <div class="flex gap-2 wrap" id="diary-mood-group" style="margin-bottom:10px;">
        ${MOODS.map((m)=>chip("", m, m, ui.diaryMood===m, `onclick="selectDiaryMood('${m}')"`)).join("")}
      </div>
      <textarea id="diary-content" class="input" rows="4" placeholder="오늘 하루, 느낀 점을 자유롭게 적어보세요."></textarea>
      <div style="height:10px;"></div>
      <button class="btn-primary" onclick="addDiary()">${icon("plus",15)} 일기 저장</button>
    </div>
    ${S.diary.length===0 ? '<p class="muted text-center">아직 작성된 일기가 없어요.</p>' : S.diary.map((d) => `
      <div class="card">
        <div class="flex justify-between items-center">
          <div class="flex gap-2 items-center wrap">
            <span style="font-size:12px;font-weight:700;color:${d.author==="산모"?"var(--accent)":"var(--sage)"};">${esc(d.author)}</span>
            <span style="font-size:11px;color:var(--sub);">${d.date} · ${d.week?d.week+"주차":""} · ${esc(d.mood)}</span>
          </div>
          <button class="btn-icon danger" onclick="removeDiary('${d.id}')">${icon("trash",14)}</button>
        </div>
        <p style="font-size:14px;margin-top:8px;line-height:1.6;white-space:pre-wrap;">${esc(d.content)}</p>
      </div>`).join("")}
  </div>`;
}
function selectDiaryAuthor(v) { ui.diaryAuthor = v; document.querySelectorAll("#diary-author-group .chip").forEach((el) => el.classList.toggle("active", el.dataset.value === v)); }
function selectDiaryMood(v) { ui.diaryMood = v; document.querySelectorAll("#diary-mood-group .chip").forEach((el) => el.classList.toggle("active", el.dataset.value === v)); }
async function addDiary() {
  const content = document.getElementById("diary-content").value.trim();
  if (!content) return;
  const p = preg();
  S.diary = [{ id: uid(), date: todayISO(), week: p.week, author: ui.diaryAuthor, mood: ui.diaryMood, content }, ...S.diary];
  await saveKey("diary", S.diary);
  render();
}
async function removeDiary(id) { S.diary = S.diary.filter((d) => d.id !== id); await saveKey("diary", S.diary); render(); }

/* ============================== 체크리스트 ============================== */
function renderChecklist() {
  const p = preg();
  const labels = { 1: "1분기 (1~13주)", 2: "2분기 (14~27주)", 3: "3분기 (28주~)" };
  return `
  <div class="flex-col gap-3">
    ${[1,2,3].map((tri) => {
      const items = [...CHECKLIST_TEMPLATE.filter((c) => c.trimester===tri), ...S.custom.filter((c) => c.trimester===tri)];
      const isCurrent = tri === p.trimester;
      return `
      <div class="card" style="${isCurrent ? "border-color:var(--sage);border-width:2px;" : ""}">
        <div class="section-title"><h2>${labels[tri]}</h2>${isCurrent ? `<span style="font-size:11px;color:var(--sage);background:var(--sage-light);padding:3px 9px;border-radius:999px;font-weight:600;">지금 여기</span>` : ""}</div>
        <div class="flex-col gap-2">
          ${items.map((item) => `
            <label style="display:flex;align-items:center;gap:9px;cursor:pointer;">
              <input type="checkbox" ${S.checked[item.id]?"checked":""} onchange="toggleChecklist('${item.id}')" style="width:17px;height:17px;accent-color:var(--sage);"/>
              <span style="flex:1;font-size:14px;${S.checked[item.id]?"color:var(--sub);text-decoration:line-through;":""}">${esc(item.label)}</span>
              ${item.custom ? `<button class="btn-icon danger" onclick="removeCustomItem('${item.id}')">${icon("trash",13)}</button>` : ""}
            </label>`).join("")}
          ${items.length===0 ? '<p class="muted">등록된 항목이 없어요.</p>' : ""}
        </div>
        <div class="flex gap-2" style="margin-top:12px;">
          <input id="new-item-${tri}" class="input" placeholder="직접 항목 추가" onkeydown="if(event.key==='Enter')addCustomItem(${tri})"/>
          <button class="btn-icon" onclick="addCustomItem(${tri})">${icon("plus",16)}</button>
        </div>
      </div>`;
    }).join("")}
    <p class="muted text-center" style="font-size:11.5px;padding:0 12px;">정확한 검사·서류 일정은 담당 병원과 기관의 안내를 우선해 확인해주세요.</p>
  </div>`;
}
async function toggleChecklist(id) { S.checked = { ...S.checked, [id]: !S.checked[id] }; await saveKey("checklist-checked", S.checked); render(); }
async function addCustomItem(tri) {
  const input = document.getElementById(`new-item-${tri}`);
  const text = input.value.trim();
  if (!text) return;
  S.custom = [...S.custom, { id: uid(), trimester: tri, label: text, custom: true }];
  await saveKey("checklist-custom", S.custom);
  render();
}
async function removeCustomItem(id) { S.custom = S.custom.filter((c) => c.id !== id); await saveKey("checklist-custom", S.custom); render(); }

/* ============================== 건강기록 ============================== */
function renderHealth() {
  const p = preg();
  const sub = ui.healthSub;
  let body = "";
  if (sub === "weight") {
    body = `
    <div class="card">
      <div class="section-title"><h2>오늘 기록</h2></div>
      <div class="grid-2">
        <div class="field"><label>몸무게 (kg)</label><input id="w-weight" type="number" step="0.1" class="input"/></div>
        <div class="field"><label>컨디션</label>
          <select id="w-condition" class="input">${["좋음","보통","힘듦"].map((c)=>`<option>${c}</option>`).join("")}</select>
        </div>
      </div>
      <button class="btn-primary" onclick="addWeight()">${icon("plus",15)} 추가</button>
    </div>
    ${S.weightLog.length>0 ? `<div class="card">${renderMiniChart(S.weightLog)}<div class="flex-col gap-2" style="margin-top:10px;">
      ${[...S.weightLog].reverse().map((w) => `
        <div class="list-row" style="align-items:center;">
          <span style="color:var(--sub);font-size:13px;">${w.date}</span>
          <span style="font-size:13px;">${w.weight}kg · ${esc(w.condition)}</span>
          <button class="btn-icon danger" onclick="removeWeight('${w.id}')">${icon("trash",12)}</button>
        </div>`).join("")}
    </div></div>` : ""}`;
  } else if (sub === "checkup") {
    body = `
    <div class="card">
      <div class="section-title"><h2>검진 기록 추가</h2></div>
      <div class="field"><label>검진일</label><input id="cu-date" type="date" class="input" value="${todayISO()}"/></div>
      <div class="field"><label>소견/내용</label><textarea id="cu-note" class="input" rows="3" placeholder="검진 결과, 의사 소견 등"></textarea></div>
      <div class="field"><label>다음 검진일 (선택)</label><input id="cu-next" type="date" class="input"/></div>
      <button class="btn-primary" onclick="addCheckup()">${icon("plus",15)} 저장</button>
    </div>
    ${S.checkups.map((c) => `
      <div class="card">
        <div class="flex justify-between items-center">
          <div style="font-size:12px;color:var(--sub);">${c.date}${c.week?" · "+c.week+"주차":""}</div>
          <button class="btn-icon danger" onclick="removeCheckup('${c.id}')">${icon("trash",13)}</button>
        </div>
        <p style="font-size:14px;margin-top:6px;white-space:pre-wrap;">${esc(c.note)}</p>
        ${c.next ? `<div style="font-size:12px;color:var(--sage);margin-top:6px;">다음 검진: ${c.next}</div>` : ""}
      </div>`).join("")}`;
  } else {
    body = `
    <div class="card">
      <div class="section-title"><h2>의사쌤과의 대화 녹음</h2></div>
      <div class="field"><label>메모 (선택)</label><input id="voice-note" class="input" placeholder="예: 24주차 정기검진"/></div>
      <button class="btn-primary" id="rec-btn" onclick="toggleRecording()">${icon("mic",15)} <span id="rec-btn-label">음성 녹음 시작</span></button>
      <div id="rec-err" class="err-text"></div>
      <div class="text-center muted" style="margin:10px 0;">또는</div>
      <label class="file-btn" for="voice-file">${icon("mic",15)} 음성 파일 업로드 (10MB 이하)
        <input id="voice-file" type="file" accept="audio/*" onchange="handleVoiceFile(this)"/>
      </label>
      <div id="media-err" class="err-text"></div>
    </div>
    ${S.voiceIndex.length===0 ? '<p class="muted text-center">아직 저장된 음성 기록이 없어요.</p>' : S.voiceIndex.map((v) => `
      <div class="card">
        <div class="flex justify-between items-center">
          <div style="font-size:12px;color:var(--sub);">${v.date}${v.week?" · "+v.week+"주차":""}${v.note?" · "+esc(v.note):""}</div>
          <button class="btn-icon danger" onclick="removeVoice('${v.id}')">${icon("trash",13)}</button>
        </div>
        <div style="margin-top:8px;">
          ${ui.voiceBlobCache[v.id] ? `<audio controls src="${ui.voiceBlobCache[v.id]}" style="width:100%;"></audio>` : `<button class="btn-primary" onclick="loadVoiceBlob('${v.id}')">${icon("play",14)} 불러와서 재생</button>`}
        </div>
      </div>`).join("")}`;
  }

  return `
  <div class="flex-col gap-3">
    <div class="flex gap-2 wrap">
      ${chip("", "weight", icon("scale",12)+" 몸무게·컨디션", sub==="weight", `onclick="selectHealthSub('weight')"`)}
      ${chip("", "checkup", icon("stethoscope",12)+" 병원 검진", sub==="checkup", `onclick="selectHealthSub('checkup')"`)}
      ${chip("", "voice", icon("mic",12)+" 의사쌤 음성기록", sub==="voice", `onclick="selectHealthSub('voice')"`)}
    </div>
    ${body}
  </div>`;
}
function selectHealthSub(v) { ui.healthSub = v; render(); }
async function addWeight() {
  const weight = parseFloat(document.getElementById("w-weight").value);
  if (!weight) return;
  const condition = document.getElementById("w-condition").value;
  S.weightLog = [...S.weightLog, { id: uid(), date: todayISO(), weight, condition }].sort((a,b)=>a.date.localeCompare(b.date));
  await saveKey("health-weight", S.weightLog);
  render();
}
async function removeWeight(id) { S.weightLog = S.weightLog.filter((w) => w.id !== id); await saveKey("health-weight", S.weightLog); render(); }
async function addCheckup() {
  const note = document.getElementById("cu-note").value.trim();
  if (!note) return;
  const date = document.getElementById("cu-date").value || todayISO();
  const next = document.getElementById("cu-next").value;
  const p = preg();
  S.checkups = [{ id: uid(), date, note, next, week: p.week }, ...S.checkups];
  await saveKey("health-checkups", S.checkups);
  render();
}
async function removeCheckup(id) { S.checkups = S.checkups.filter((c) => c.id !== id); await saveKey("health-checkups", S.checkups); render(); }

async function addVoice(dataUrl, note) {
  const id = uid();
  await saveKey(`health-voice-blob:${id}`, dataUrl);
  const p = preg();
  S.voiceIndex = [{ id, date: todayISO(), week: p.week, note }, ...S.voiceIndex];
  await saveKey("health-voice-index", S.voiceIndex);
}
async function loadVoiceBlob(id) {
  const data = await loadKey(`health-voice-blob:${id}`, null);
  if (data) { ui.voiceBlobCache[id] = data; render(); }
}
async function removeVoice(id) {
  S.voiceIndex = S.voiceIndex.filter((v) => v.id !== id);
  await saveKey("health-voice-index", S.voiceIndex);
  await idbDelete(`health-voice-blob:${id}`);
  delete ui.voiceBlobCache[id];
  render();
}
async function handleVoiceFile(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  document.getElementById("media-err").textContent = "";
  if (file.size > MAX_AUDIO_RAW) { document.getElementById("media-err").textContent = "파일이 너무 커요. 10MB 이하 음성 파일을 사용해주세요."; input.value = ""; return; }
  const dataUrl = await fileToDataURL(file);
  const note = document.getElementById("voice-note").value.trim();
  await addVoice(dataUrl, note);
  render();
}

async function toggleRecording() {
  if (ui.recording) {
    const dataUrl = await stopRecording();
    if (dataUrl) {
      const note = document.getElementById("voice-note") ? document.getElementById("voice-note").value.trim() : "";
      await addVoice(dataUrl, note);
    }
    render();
  } else {
    await startRecording();
  }
}
async function startRecording() {
  const errEl = document.getElementById("rec-err");
  if (errEl) errEl.textContent = "";
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    ui.micStream = stream;
    const mr = new MediaRecorder(stream);
    ui.chunks = [];
    mr.ondataavailable = (e) => { if (e.data.size > 0) ui.chunks.push(e.data); };
    mr.start();
    ui.mediaRecorder = mr;
    ui.recording = true;
    ui.recSeconds = 0;
    const btn = document.getElementById("rec-btn");
    const label = document.getElementById("rec-btn-label");
    if (btn) btn.classList.add("danger-bg");
    if (label) label.textContent = "녹음 중지 (00:00)";
    ui.recTimer = setInterval(() => {
      ui.recSeconds++;
      const mm = String(Math.floor(ui.recSeconds/60)).padStart(2,"0");
      const ss = String(ui.recSeconds%60).padStart(2,"0");
      const l = document.getElementById("rec-btn-label");
      if (l) l.textContent = `녹음 중지 (${mm}:${ss})`;
    }, 1000);
  } catch (e) {
    if (errEl) errEl.textContent = "마이크를 사용할 수 없어요. 파일 업로드로 추가해주세요.";
  }
}
function stopRecording() {
  return new Promise((resolve) => {
    const mr = ui.mediaRecorder;
    if (!mr) return resolve(null);
    mr.onstop = async () => {
      clearInterval(ui.recTimer);
      ui.recording = false;
      if (ui.micStream) ui.micStream.getTracks().forEach((t) => t.stop());
      const blob = new Blob(ui.chunks, { type: "audio/webm" });
      const dataUrl = await blobToDataURL(blob);
      resolve(dataUrl);
    };
    mr.stop();
  });
}

/* ============================== 미디어 ============================== */
function renderMedia() {
  const t = ui.mediaType;
  return `
  <div class="flex-col gap-3">
    <div class="card">
      <div class="section-title"><h2>사진·동영상·음성 추가</h2></div>
      <div class="flex gap-2" id="media-type-group" style="margin-bottom:10px;">
        ${chip("", "image", icon("camera",12)+" 사진", t==="image", `onclick="selectMediaType('image')"`)}
        ${chip("", "video", icon("video",12)+" 동영상", t==="video", `onclick="selectMediaType('video')"`)}
        ${chip("", "audio", icon("music",12)+" 음성", t==="audio", `onclick="selectMediaType('audio')"`)}
      </div>
      <div class="field"><label>메모 (선택)</label><input id="media-note" class="input" placeholder="예: 태동 느낀 날"/></div>
      <div id="media-file-slot">${renderMediaFileButton(t)}</div>
      <div id="media-err2" class="err-text"></div>
    </div>
    ${S.mediaIndex.length===0 ? '<p class="muted text-center">아직 등록된 미디어가 없어요.</p>' : `
    <div class="media-grid">
      ${S.mediaIndex.map((m) => `
        <div class="media-item">
          ${m.type==="image" ? `<img src="${m.thumb}" alt=""/>` :
            m.type==="video" ? (ui.avBlobCache[m.id] ? `<video controls src="${ui.avBlobCache[m.id]}"></video>` : `<button class="media-placeholder" onclick="loadAvBlob('${m.id}')">${icon("video",22)}<span style="font-size:11px;">불러와서 재생</span></button>`) :
            `<div class="media-placeholder" style="cursor:default;">${icon("music",22)}${ui.avBlobCache[m.id] ? `<audio controls src="${ui.avBlobCache[m.id]}" style="width:90%;"></audio>` : `<button class="btn-primary" style="width:auto;padding:6px 14px;" onclick="loadAvBlob('${m.id}')">${icon("play",13)} 재생</button>`}</div>`}
          <div class="media-caption">${m.week?m.week+"주차 · ":""}${m.date}${m.note?" · "+esc(m.note):""}</div>
          <button class="media-del" onclick="removeMedia('${m.id}')">${icon("x",13)}</button>
        </div>`).join("")}
    </div>`}
  </div>`;
}
function renderMediaFileButton(t) {
  if (t === "image") return `<label class="file-btn" for="media-file">${icon("camera",15)} 사진 선택<input id="media-file" type="file" accept="image/*" onchange="handleMediaImage(this)"/></label>`;
  if (t === "video") return `<label class="file-btn" for="media-file">${icon("video",15)} 동영상 선택 (25MB 이하)<input id="media-file" type="file" accept="video/*" onchange="handleMediaAv(this,'video')"/></label>`;
  return `<label class="file-btn" for="media-file">${icon("music",15)} 음성 파일 선택 (10MB 이하)<input id="media-file" type="file" accept="audio/*" onchange="handleMediaAv(this,'audio')"/></label>`;
}
function selectMediaType(t) {
  ui.mediaType = t;
  document.querySelectorAll("#media-type-group .chip").forEach((el) => el.classList.toggle("active", el.dataset.value === t));
  document.getElementById("media-file-slot").innerHTML = renderMediaFileButton(t);
}
async function handleMediaImage(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  document.getElementById("media-err2").textContent = "";
  if (file.size > MAX_IMAGE_RAW) { document.getElementById("media-err2").textContent = "이미지가 너무 커요."; input.value = ""; return; }
  const thumb = await resizeImage(file);
  const note = document.getElementById("media-note").value.trim();
  const p = preg();
  S.mediaIndex = [{ id: uid(), type: "image", date: todayISO(), week: p.week, note, thumb }, ...S.mediaIndex];
  await saveKey("media-index", S.mediaIndex);
  render();
}
async function handleMediaAv(input, kind) {
  const file = input.files && input.files[0];
  if (!file) return;
  document.getElementById("media-err2").textContent = "";
  const limit = kind === "video" ? MAX_VIDEO_RAW : MAX_AUDIO_RAW;
  if (file.size > limit) { document.getElementById("media-err2").textContent = `파일이 너무 커요. ${Math.round(limit/1024/1024)}MB 이하 파일을 사용해주세요.`; input.value = ""; return; }
  const dataUrl = await fileToDataURL(file);
  const id = uid();
  await saveKey(`media-blob:${id}`, dataUrl);
  const note = document.getElementById("media-note").value.trim();
  const p = preg();
  S.mediaIndex = [{ id, type: kind, date: todayISO(), week: p.week, note }, ...S.mediaIndex];
  await saveKey("media-index", S.mediaIndex);
  render();
}
async function loadAvBlob(id) {
  const data = await loadKey(`media-blob:${id}`, null);
  if (data) { ui.avBlobCache[id] = data; render(); }
}
async function removeMedia(id) {
  const item = S.mediaIndex.find((m) => m.id === id);
  S.mediaIndex = S.mediaIndex.filter((m) => m.id !== id);
  await saveKey("media-index", S.mediaIndex);
  if (item && item.type !== "image") await idbDelete(`media-blob:${id}`);
  delete ui.avBlobCache[id];
  render();
}

/* ============================== 설정 / 백업 ============================== */
function renderSettings() {
  return `
  <div class="flex-col gap-3">
    <div class="card">
      <div class="section-title"><h2>기본 정보</h2></div>
      <div class="field"><label>태명</label><input id="st-nick" class="input" value="${esc(S.settings.babyNickname||"")}"/></div>
      <div class="field"><label>출산예정일</label><input id="st-due" type="date" class="input" value="${esc(S.settings.dueDate||"")}"/></div>
      <div class="field"><label>산모 이름 (선택)</label><input id="st-partner" class="input" value="${esc(S.settings.partnerName||"")}"/></div>
      <button class="btn-primary" onclick="saveSettings()">저장</button>
      <p class="muted" style="font-size:11.5px;margin-top:12px;line-height:1.6;">모든 기록은 이 기기의 개인 저장 공간(브라우저)에 보관돼요. 기기를 바꾸거나 브라우저 데이터를 지우면 사라질 수 있으니, 아래 백업 기능을 꼭 이용해주세요.</p>
    </div>
    <div class="card">
      <div class="section-title"><h2>데이터 백업</h2></div>
      <p class="muted" style="margin-bottom:10px;">모든 기록(식단·일기·체크리스트·건강기록·사진·동영상·음성)을 파일 하나로 내보내거나, 내보낸 파일로 복원할 수 있어요.</p>
      <div class="flex-col gap-2">
        <button class="btn-primary" onclick="exportData()">${icon("download",15)} 내보내기 (백업 파일 저장)</button>
        <label class="file-btn" for="import-file">${icon("upload",15)} 가져오기 (백업 파일로 복원)
          <input id="import-file" type="file" accept="application/json" onchange="importData(this)"/>
        </label>
      </div>
      <div id="backup-msg" class="muted" style="margin-top:8px;"></div>
    </div>
    <div class="card">
      <div class="section-title"><h2>예쁜 기록 리포트 (PDF·인쇄)</h2></div>
      <p class="muted" style="margin-bottom:10px;">기간과 항목을 골라 깔끔하게 정리된 리포트를 만들어요. 만든 뒤 인쇄 대화상자에서 "PDF로 저장"을 고르면 PDF 파일로 남고, 프린터를 고르면 바로 출력돼요.</p>
      <div class="grid-2">
        <div class="field"><label>시작일 (선택)</label><input id="rp-from" type="date" class="input"/></div>
        <div class="field"><label>종료일 (선택)</label><input id="rp-to" type="date" class="input"/></div>
      </div>
      <div class="field"><label>포함할 항목</label>
        <div class="flex-col gap-2">
          <label style="display:flex;align-items:center;gap:8px;"><input type="checkbox" id="rp-meals" checked/> 식단 기록</label>
          <label style="display:flex;align-items:center;gap:8px;"><input type="checkbox" id="rp-diary" checked/> 일기</label>
          <label style="display:flex;align-items:center;gap:8px;"><input type="checkbox" id="rp-checklist" checked/> 체크리스트</label>
          <label style="display:flex;align-items:center;gap:8px;"><input type="checkbox" id="rp-health" checked/> 건강기록</label>
          <label style="display:flex;align-items:center;gap:8px;"><input type="checkbox" id="rp-photos" checked/> 사진</label>
        </div>
      </div>
      <button class="btn-primary" onclick="openReport()">리포트 미리보기</button>
    </div>
  </div>`;
}

/* ============================== 리포트(PDF/인쇄) ============================== */
function openReport() {
  ui.reportFilters = {
    from: document.getElementById("rp-from").value,
    to: document.getElementById("rp-to").value,
    meals: document.getElementById("rp-meals").checked,
    diary: document.getElementById("rp-diary").checked,
    checklist: document.getElementById("rp-checklist").checked,
    health: document.getElementById("rp-health").checked,
    photos: document.getElementById("rp-photos").checked,
  };
  ui.reportOpen = true;
  render();
}
function closeReport() { ui.reportOpen = false; render(); }
function printReport() { window.print(); }

function renderReportView() {
  const f = ui.reportFilters;
  const inRange = (d) => (!f.from || d >= f.from) && (!f.to || d <= f.to);
  const p = preg();
  const periodLabel = (f.from || f.to) ? `${f.from || "처음"} ~ ${f.to || "지금"}` : "전체 기간";

  let sections = "";

  if (f.meals) {
    const items = S.meals.filter((m) => inRange(m.date)).sort((a, b) => a.date.localeCompare(b.date));
    sections += `<div class="report-section"><h2>${icon("meal",16)} 식단 기록</h2>${
      items.length === 0 ? '<p class="muted">기록 없음</p>' :
      items.map((m) => `<div class="report-entry"><b>${m.date} · ${esc(m.mealType)}</b> — ${esc(m.menu)}${m.note ? " ("+esc(m.note)+")" : ""}</div>`).join("")
    }</div>`;
  }
  if (f.diary) {
    const items = S.diary.filter((d) => inRange(d.date)).sort((a, b) => a.date.localeCompare(b.date));
    sections += `<div class="report-section"><h2>${icon("heart",16)} 일기</h2>${
      items.length === 0 ? '<p class="muted">기록 없음</p>' :
      items.map((d) => `<div class="report-entry"><b>${d.date}${d.week ? " · "+d.week+"주차" : ""} · ${esc(d.author)} · ${esc(d.mood)}</b><div style="margin-top:4px;white-space:pre-wrap;">${esc(d.content)}</div></div>`).join("")
    }</div>`;
  }
  if (f.checklist) {
    const all = [...CHECKLIST_TEMPLATE, ...S.custom];
    let cl = `<div class="report-section"><h2>${icon("check",16)} 체크리스트</h2>`;
    [1, 2, 3].forEach((tri) => {
      const items = all.filter((c) => c.trimester === tri);
      cl += `<div style="margin-bottom:10px;"><b style="font-size:13px;">${tri}분기</b>` +
        items.map((c) => `<div class="report-entry">${S.checked[c.id] ? "✓" : "○"} ${esc(c.label)}</div>`).join("") + `</div>`;
    });
    sections += cl + `</div>`;
  }
  if (f.health) {
    const w = S.weightLog.filter((x) => inRange(x.date));
    const c = S.checkups.filter((x) => inRange(x.date));
    let hl = `<div class="report-section"><h2>${icon("activity",16)} 건강기록</h2>`;
    hl += `<p style="font-weight:600;font-size:13px;margin-bottom:4px;">몸무게·컨디션</p>` +
      (w.length === 0 ? '<p class="muted">기록 없음</p>' : w.map((x) => `<div class="report-entry">${x.date} — ${x.weight}kg · ${esc(x.condition)}</div>`).join(""));
    hl += `<p style="font-weight:600;font-size:13px;margin:12px 0 4px;">병원 검진</p>` +
      (c.length === 0 ? '<p class="muted">기록 없음</p>' : c.map((x) => `<div class="report-entry"><b>${x.date}${x.week ? " · "+x.week+"주차" : ""}</b><div>${esc(x.note)}</div>${x.next ? `<div style="color:var(--sage);">다음 검진: ${x.next}</div>` : ""}</div>`).join(""));
    if (S.voiceIndex.length > 0) hl += `<p class="muted" style="margin-top:8px;">의사쌤 음성 기록 ${S.voiceIndex.length}건은 앱에서 직접 재생해 확인하세요 (인쇄에는 포함되지 않아요).</p>`;
    sections += hl + `</div>`;
  }
  if (f.photos) {
    const photos = S.mediaIndex.filter((m) => m.type === "image" && inRange(m.date));
    const others = S.mediaIndex.filter((m) => m.type !== "image" && inRange(m.date));
    let pl = `<div class="report-section"><h2>${icon("camera",16)} 사진</h2>`;
    pl += photos.length === 0 ? '<p class="muted">사진 없음</p>' :
      `<div class="report-photos-grid">${photos.map((p2) => `<div><img src="${p2.thumb}"/><div style="font-size:10px;color:var(--sub);margin-top:2px;">${p2.week ? p2.week+"주 · " : ""}${p2.date}</div></div>`).join("")}</div>`;
    if (others.length > 0) pl += `<p class="muted" style="margin-top:8px;">동영상·음성 ${others.length}건은 앱에서 직접 확인하세요 (인쇄에는 포함되지 않아요).</p>`;
    sections += pl + `</div>`;
  }

  if (!sections) sections = '<p class="muted text-center">포함할 항목을 하나 이상 선택해주세요.</p>';

  return `
  <div class="report-view">
    <div class="report-toolbar no-print">
      <button class="btn-icon" onclick="closeReport()">${icon("x",16)}</button>
      <button class="btn-primary" style="width:auto;padding:8px 16px;" onclick="printReport()">${icon("download",15)} 인쇄 / PDF로 저장</button>
    </div>
    <div class="report-header">
      ${icon("sprout",22)}
      <h1 class="serif" style="font-size:24px;margin:8px 0 2px;">${esc(S.settings.babyNickname)}의 임신 기록</h1>
      <p class="muted">${S.settings.partnerName ? esc(S.settings.partnerName)+"님 · " : ""}${periodLabel} · 현재 ${p.week}주차</p>
      <p class="muted" style="font-size:11px;">생성일 ${todayISO()}</p>
    </div>
    ${sections}
    <p class="muted text-center" style="margin-top:30px;font-size:11px;">우리의 임신일기</p>
  </div>`;
}
async function saveSettings() {
  const babyNickname = document.getElementById("st-nick").value.trim();
  const dueDate = document.getElementById("st-due").value;
  const partnerName = document.getElementById("st-partner").value.trim();
  S.settings = { babyNickname, dueDate, partnerName };
  await saveKey("settings", S.settings);
  render();
}
async function exportData() {
  const keys = await idbAllKeys();
  const dump = {};
  for (const k of keys) { dump[k] = await idbGet(k); }
  const payload = { app: "pregnancy-diary", version: 1, exportedAt: new Date().toISOString(), data: dump };
  const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const d = new Date();
  a.href = url;
  a.download = `임신일기-백업-${toISODate(d)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
async function importData(input) {
  const file = input.files && input.files[0];
  if (!file) return;
  const msgEl = document.getElementById("backup-msg");
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const data = parsed && parsed.data ? parsed.data : parsed;
    if (!data || typeof data !== "object") throw new Error("invalid");
    for (const [k, v] of Object.entries(data)) { await idbSet(k, v); }
    if (msgEl) msgEl.textContent = "복원이 완료됐어요. 잠시 후 새로고침됩니다.";
    setTimeout(() => location.reload(), 1200);
  } catch (e) {
    if (msgEl) msgEl.textContent = "백업 파일을 읽지 못했어요. 파일을 확인해주세요.";
  }
}

/* ============================== 탭/앱 셸 ============================== */
function selectTab(id) { ui.tab = id; render(); }

function renderApp() {
  const content =
    ui.tab === "home" ? renderHome() :
    ui.tab === "meals" ? renderMeals() :
    ui.tab === "diary" ? renderDiary() :
    ui.tab === "checklist" ? renderChecklist() :
    ui.tab === "health" ? renderHealth() :
    ui.tab === "media" ? renderMedia() :
    renderSettings();

  return `
  <div class="app-shell">
    <div class="header">${icon("sprout",20)} ${esc(S.settings.babyNickname)}의 임신일기</div>
    <div class="main">${content}</div>
    <nav class="bottom-nav">
      ${TABS.map((t) => `
        <button class="nav-btn ${ui.tab===t.id?"active":""}" onclick="selectTab('${t.id}')">
          ${icon(t.icon, 19)}<span>${t.label}</span>
        </button>`).join("")}
    </nav>
  </div>`;
}

function render() {
  const root = document.getElementById("app");
  if (!S.settings.babyNickname || !S.settings.dueDate) {
    root.innerHTML = renderOnboarding();
  } else if (ui.reportOpen) {
    root.innerHTML = renderReportView();
  } else {
    root.innerHTML = renderApp();
  }
}

boot();
