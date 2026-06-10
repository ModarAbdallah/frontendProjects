let availableAccounts = [
    "modarabdallah630@gmail.com",
    "icpc.team2026@vortex.org",
    "developer.mudar@gmail.com"
];

let activeEmail = "modarabdallah630@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
    renderAccountsList();
});

function renderAccountsList() {
    const listContainer = document.getElementById("accounts-list");
    listContainer.innerHTML = "";

    availableAccounts.forEach(email => {
        const isActive = email === activeEmail;
        const itemHTML = `
            <div class="list-group-item account-item d-flex align-items-center border-0 ${isActive ? 'active' : ''}" onclick="switchAccount('${email}')">
                <i class="bi ${isActive ? 'bi-check-circle-fill' : 'bi-circle'} me-3 fs-5"></i>
                <span class="fw-semibold small text-truncate">${email}</span>
            </div>
        `;
        listContainer.insertAdjacentHTML("beforeend", itemHTML);
    });
}

function switchAccount(email) {
    activeEmail = email;
    
    document.getElementById("current-email").innerText = email;
    
    renderAccountsList();
    
    const modalEl = document.getElementById('accountModal');
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    if (modalInstance) {
        modalInstance.hide();
    }
}

function addNewAccountPrompt() {
    const newEmail = prompt("أدخل البريد الإلكتروني الجديد:");
    
    if (newEmail && newEmail.trim() !== "" && newEmail.includes("@")) {
        if (!availableAccounts.includes(newEmail.trim())) {
            availableAccounts.push(newEmail.trim());
        }
        switchAccount(newEmail.trim());
    } else if (newEmail) {
        alert("يرجى إدخال بريد إلكتروني صحيح.");
    }
}

//(Clear Form)
function clearForm() {
    const confirmClear = confirm("هل تريد محو هذا النموذج؟ لن يتم حفظ إجاباتك.");
    if (confirmClear) {
        document.getElementById("registration-form").reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

//(Submit)
function handleFormSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("registration-form");
    
    if (form.checkValidity()) {
        alert(`تم تسجيل استجابتك بنجاح للمسابقة باسم الحساب: \n(${activeEmail})`);
        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        form.reportValidity();
    }
}