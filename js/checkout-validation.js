const form = document.getElementById("form-checkout");

function setValidationStyle(input, isValid) {
    input.classList.remove("valid", "invalid");
    if (isValid) {
        input.classList.add("valid");
    } else {
        input.classList.add("invalid");
    }
}

function showError(input, message) {
    const error = document.createElement("small");
    error.classList.add("error-msg");
    error.innerText = message;
    input.parentNode.appendChild(error);
    setValidationStyle(input, false);
}

function validateField(input, testFn, errorMsg) {
    const value = input.value.trim();
    const valid = testFn(value);
    const existingError = input.parentNode.querySelector(".error-msg");

    if (existingError) existingError.remove();

    setValidationStyle(input, valid);

    if (!valid && errorMsg) {
        showError(input, errorMsg);
        return false;
    }

    return true;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isFormValid = true;

    // Campos
    isFormValid &= validateField(inpCheck1, val => val.length >= 5, "Nome deve ter pelo menos 5 caracteres");
    isFormValid &= validateField(inpCheck2, val => /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(val), "Email inválido");
    isFormValid &= validateField(inpCheck3, val => val.length >= 5, "Endereço muito curto");
    isFormValid &= validateField(inpCheck4, val => val.length >= 2, "Cidade inválida");
    isFormValid &= validateField(inpCheck5, val => val !== "", "Selecione um estado");
    isFormValid &= validateField(inpCheck6, val => /^\d{5}-\d{3}$/.test(val), "CEP inválido");
    isFormValid &= validateField(inpCheck7, val => val.length >= 5, "Nome no cartão muito curto");
    isFormValid &= validateField(inpCheck8, val => /^\d{4} \d{4} \d{4} \d{4}$/.test(val), "Número do cartão inválido");
    isFormValid &= validateField(inpCheck9, val => /^(0[1-9]|1[0-2])\/\d{2}$/.test(val), "Data inválida (MM/AA)");
    isFormValid &= validateField(inpCheck10, val => /^\d{3}$/.test(val), "CVV inválido");

    if (isFormValid) {
        const modal = document.getElementById("success-modal");
        modal.style.display = "flex";
    }
    
    document.getElementById("close-modal").addEventListener("click", () => {
        document.getElementById("success-modal").style.display = "none";
    });
    
    window.addEventListener("click", function (e) {
    const modal = document.getElementById("success-modal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
    });
});

// Máscaras com limites
function addInputMask(id, max, formatFn) {
    const input = document.getElementById(id);
    input.addEventListener("input", () => {
        const cleaned = input.value.replace(/\D/g, "").slice(0, max);
        input.value = formatFn(cleaned);
        validateField(input, input.dataset.validate, ""); // valida dinamicamente se tiver
    });
}

// Campos
const inpCheck1 = document.getElementById("inp-check-1");
const inpCheck2 = document.getElementById("inp-check-2");
const inpCheck3 = document.getElementById("inp-check-3");
const inpCheck4 = document.getElementById("inp-check-4");
const inpCheck5 = document.getElementById("inp-check-5");
const inpCheck6 = document.getElementById("inp-check-6");
const inpCheck7 = document.getElementById("inp-check-7");
const inpCheck8 = document.getElementById("inp-check-8");
const inpCheck9 = document.getElementById("inp-check-9");
const inpCheck10 = document.getElementById("inp-check-10");

// Máscaras
addInputMask("inp-check-8", 16, val => val.match(/.{1,4}/g)?.join(" ") ?? val);  // Cartão
addInputMask("inp-check-6", 8, val => val.replace(/^(\d{5})(\d{0,3}).*/, "$1-$2")); // CEP
addInputMask("inp-check-9", 4, val => val.replace(/^(\d{2})(\d{0,2}).*/, "$1/$2")); // Validade
addInputMask("inp-check-10", 3, val => val); // CVV

// Validação ao digitar
[
    inpCheck1, inpCheck2, inpCheck3, inpCheck4,
    inpCheck6, inpCheck7, inpCheck8, inpCheck9, inpCheck10
].forEach(input => {
    input.addEventListener("input", () => {
        validateField(input, input.dataset.validate || (() => true), "");
    });
});

// Validação de select
inpCheck5.addEventListener("change", () => {
    validateField(inpCheck5, val => val !== "", "");
});