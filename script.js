// ==========================================
// التحكم العام والنوافذ المنبثقة والقائمة الجانبية
// ==========================================
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active');
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.classList.remove('active');
  }
};

function toggleSidebar() {
  const sidebar = document.getElementById('appSidebar');
  if (sidebar) sidebar.classList.toggle('active');
}

// ==========================================
// 1. المتغيرات والحساب
// ==========================================
function calculate(op) {
  const n1 = parseFloat(document.getElementById('num1').value);
  const n2 = parseFloat(document.getElementById('num2').value);
  const resBox = document.getElementById('calc-result');

  if (isNaN(n1) || isNaN(n2)) {
    resBox.innerText = "⚠️ يرجى إدخال أرقام صالحة!";
    resBox.style.color = "#d32f2f";
    return;
  }

  let res = 0;
  if (op === '+') res = n1 + n2;
  if (op === '-') res = n1 - n2;
  if (op === '*') res = n1 * n2;
  if (op === '/') {
    if (n2 === 0) {
      resBox.innerText = "⚠️ لا يمكن القسمة على الصفر!";
      resBox.style.color = "#d32f2f";
      return;
    }
    res = n1 / n2;
  }

  resBox.innerText = `النتيجة: ${res}`;
  resBox.style.color = "#2e7d32";
}

// ==========================================
// 2. الجمل الشرطية
// ==========================================
function checkGrade() {
  const score = parseFloat(document.getElementById('userScore').value);
  const resBox = document.getElementById('condition-result');

  if (isNaN(score)) {
    resBox.innerText = "⚠️ يرجى إدخال درجة صالحة!";
    resBox.style.color = "#d32f2f";
    return;
  }

  if (score < 0 || score > 100) {
    resBox.innerText = "⚠️ الدرجة بين 0 و 100!";
    resBox.style.color = "#d32f2f";
  } else if (score >= 90) {
    resBox.innerText = `(${score}): ممتاز 🌟 (Grade A)`;
    resBox.style.color = "#2e7d32";
  } else if (score >= 80) {
    resBox.innerText = `(${score}): جيد جداً 👍 (Grade B)`;
    resBox.style.color = "#1565c0";
  } else if (score >= 70) {
    resBox.innerText = `(${score}): جيد 👌 (Grade C)`;
    resBox.style.color = "#f57c00";
  } else if (score >= 50) {
    resBox.innerText = `(${score}): مقبول ⚖️ (Grade D)`;
    resBox.style.color = "#ef6c00";
  } else {
    resBox.innerText = `(${score}): راسب ❌ (Grade F)`;
    resBox.style.color = "#c62828";
  }
}

// ==========================================
// 3. الحلقات التكرارية (For Loop)
// ==========================================
function generateTable() {
  const num = parseInt(document.getElementById('loopNum').value);
  const resBox = document.getElementById('loop-result');

  if (isNaN(num)) {
    resBox.innerText = "⚠️ يرجى إدخال رقم صحيح!";
    resBox.style.color = "#d32f2f";
    return;
  }

  let outputHTML = `<div style="font-weight: bold; margin-bottom: 6px; color: #2b6cb0;">جدول ضرب الرقم ${num}:</div>`;
  for (let i = 1; i <= 10; i++) {
    outputHTML += `<div>${num} × ${i} = <span style="color: #2e7d32;">${num * i}</span></div>`;
  }
  resBox.innerHTML = outputHTML;
  resBox.style.color = "#111";
}

// ==========================================
// 4. إدارة المصفوفات (Arrays)
// ==========================================
let myTasks = ["تعلم HTML", "تعلم CSS", "تعلم JavaScript"];

function renderArrayItems() {
  const resBox = document.getElementById('array-result');
  if (!resBox) return;

  if (myTasks.length === 0) {
    resBox.innerHTML = "<div style='color: #718096; text-align: center;'>القائمة فارغة 📭</div>";
    return;
  }

  let html = `<div style="font-weight: bold; margin-bottom: 6px; color: #2b6cb0;">العناصر (${myTasks.length}):</div><ul style="list-style: none; padding: 0;">`;
  myTasks.forEach((item, index) => {
    html += `
      <li style="display: flex; justify-content: space-between; align-items: center; padding: 5px 8px; margin-bottom: 4px; background: rgba(255,255,255,0.8); border-radius: 6px; border: 1px solid rgba(0,0,0,0.05);">
        <span>📌 ${item}</span>
        <button onclick="removeArrayItem(${index})" style="background: none; border: none; color: #e53e3e; cursor: pointer; font-weight: bold;">حذف 🗑️</button>
      </li>
    `;
  });
  html += `</ul>`;
  resBox.innerHTML = html;
}

function addArrayItem() {
  const input = document.getElementById('arrayItemInput');
  const value = input.value.trim();
  if (value === "") { alert("أدخل نصاً أولاً!"); return; }
  myTasks.push(value);
  input.value = "";
  renderArrayItems();
}

function removeArrayItem(index) {
  myTasks.splice(index, 1);
  renderArrayItems();
}

// ==========================================
// 5. معالجة النصوص (String Methods)
// ==========================================
function analyzeText() {
  const text = document.getElementById('textInput').value;
  const resBox = document.getElementById('string-result');
  if (!resBox) return;

  if (text.trim() === "") {
    resBox.innerHTML = "<span style='color: #718096;'>الرجاء إدخال نص...</span>";
    return;
  }

  resBox.innerHTML = `
    <div>📏 الحروف: <span style="color: #2b6cb0; font-weight: bold;">${text.length}</span></div>
    <div>🔤 بالحروف الكبيرة: <span style="color: #2e7d32; font-weight: bold;">${text.toUpperCase()}</span></div>
    <div>🔡 بالحروف الصغيرة: <span style="color: #2e7d32; font-weight: bold;">${text.toLowerCase()}</span></div>
  `;
}

// ==========================================
// 6. كائنات جافاسكريبت (Objects)
// ==========================================
const userProfile = {
  name: "تهاني المريسي",
  role: "مطلورة ومصممة واجهات ويب",
  status: "متاحة للعمل 🟢",
  skills: ["HTML", "CSS", "JavaScript"]
};

function renderProfile() {
  const displayBox = document.getElementById('profile-display');
  if (!displayBox) return;

  displayBox.innerHTML = `
    <div style="margin-bottom: 4px;">📌 <strong>الاسم:</strong> ${userProfile.name}</div>
    <div style="margin-bottom: 4px;">💼 <strong>المهنة:</strong> ${userProfile.role}</div>
    <div style="margin-bottom: 4px;">⚡ <strong>الحالة:</strong> <span style="color: #2e7d32;">${userProfile.status}</span></div>
    <div>🛠️ <strong>المهارات:</strong> ${userProfile.skills.join(' - ')}</div>
  `;
}

function updateProfileStatus() {
  userProfile.status = userProfile.status.includes("متاحة") ? "في وضع التطوير 🚀" : "متاحة للعمل 🟢";
  renderProfile();
}

// ==========================================
// 7. التاريخ والوقت (Date Object)
// ==========================================
function updateLiveTime() {
  const displayBox = document.getElementById('time-display');
  if (!displayBox) return;

  const now = new Date();
  const hours = now.getHours();
  let greeting = hours < 12 ? "صباح الخير ☀️" : "مساء الخير 🌙";

  displayBox.innerHTML = `
    <div style="font-size: 1.1rem; color: #2b6cb0; font-weight: bold; margin-bottom: 6px;">${greeting}</div>
    <div style="margin-bottom: 4px;">⏰ الوقت: ${now.toLocaleTimeString('ar-EG')}</div>
    <div style="font-size: 0.9rem; color: #4a5568;">📅 التاريخ: ${now.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
  `;
}

// ==========================================
// 8. الدوال (Functions & Scope)
// ==========================================
function kmToMeters(km) { return km * 1000; }
function kmToMiles(km) { return (km * 0.621371).toFixed(2); }

function runConverter() {
  const val = parseFloat(document.getElementById('inputValue').value);
  const resBox = document.getElementById('function-result');
  if (isNaN(val)) { resBox.innerHTML = "<span style='color: #c62828;'>⚠️ أخل رقماً صحيحاً!</span>"; return; }

  resBox.innerHTML = `
    <div>📏 القيمة: <span style="color: #2b6cb0;">${val} كم</span></div>
    <div>📌 بالأمتار: <span style="color: #2e7d32;">${kmToMeters(val)} متر</span></div>
    <div>📌 بالأميل: <span style="color: #2e7d32;">${kmToMiles(val)} ميل</span></div>
  `;
}

// ==========================================
// 9. البرمجة الكائنية (OOP Classes)
// ==========================================
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getDetails() {
    return `📦 ${this.name} - السعر: <span style="color: #2e7d32; font-weight: bold;">$${this.price}</span>`;
  }
}

let storeProducts = [
  new Product("لابتوب احترافي", 850),
  new Product("ساعة ذكية", 120)
];

function renderProducts() {
  const resBox = document.getElementById('oop-result');
  if (!resBox) return;

  let html = `<div style="font-weight: bold; margin-bottom: 6px; color: #2b6cb0;">المنتجات المسجلة:</div><ul style="list-style: none; padding: 0;">`;
  storeProducts.forEach(prod => {
    html += `<li style="padding: 5px 8px; margin-bottom: 4px; background: rgba(255,255,255,0.8); border-radius: 6px; border: 1px solid rgba(0,0,0,0.05);">${prod.getDetails()}</li>`;
  });
  html += `</ul>`;
  resBox.innerHTML = html;
}

function addNewProduct() {
  const name = document.getElementById('productName').value.trim();
  const price = parseFloat(document.getElementById('productPrice').value);
  if (name === "" || isNaN(price)) { alert("أدخل اسم المنتج والسعر!"); return; }

  storeProducts.push(new Product(name, price));
  document.getElementById('productName').value = "";
  document.getElementById('productPrice').value = "";
  renderProducts();
}

// تهيئة وتشغيل المكونات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
  renderArrayItems();
  if(document.getElementById('textInput')) analyzeText();
  renderProfile();
  updateLiveTime();
  renderProducts();
});