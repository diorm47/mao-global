document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll(".otp-input");

  inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      // Перемещаем фокус на следующее поле, если введено значение
      if (input.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
      // Перемещаем фокус на предыдущее поле при нажатии Backspace
      if (e.inputType === "deleteContentBackward" && index > 0) {
        inputs[index - 1].focus();
      }
    });
  });
});

function submitOTP() {
  const otp = Array.from(document.querySelectorAll(".otp-input"))
    .map((input) => input.value)
    .join("");
  if (otp.length === 6) {
    alert(`Ваш OTP: ${otp}`);
  } else {
    alert("Пожалуйста, введите все 6 цифр.");
  }
}

document.getElementById("password").addEventListener("input", function () {
  const password = this.value;

  // At least 8 characters
  const charCountValidation = password.length >= 8;
  toggleValidation("charCount", charCountValidation);

  // Contains a number or symbol
  const numberOrSymbolValidation = /[0-9!@#\$%\^\&*\)\(+=._-]/.test(password);
  toggleValidation("numberOrSymbol", numberOrSymbolValidation);

  // At least 1 lowercase letter
  const lowercaseValidation = /[a-z]/.test(password);
  toggleValidation("lowercase", lowercaseValidation);

  // At least 1 special character
  const specialCharValidation = /[!@#\$%\^\&*\)\(+=._-]/.test(password);
  toggleValidation("specialChar", specialCharValidation);
});

function toggleValidation(elementId, isValid) {
  const validationDiv = document.getElementById(elementId);
  const noIcon = validationDiv.querySelector('img[alt="no"]');
  const yesIcon = validationDiv.querySelector('img[alt="yes"]');

  if (isValid) {
    noIcon.style.display = "none";
    yesIcon.style.display = "inline";
    validationDiv.classList.add("password_validation_true"); // Добавляем класс
  } else {
    noIcon.style.display = "inline";
    yesIcon.style.display = "none";
    validationDiv.classList.remove("password_validation_true"); // Убираем класс
  }
}

const tabButtons = document.querySelectorAll(".block_btn");
const contents = document.querySelectorAll(".auth_wrapper_content_block");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Get the target content ID from the clicked button
    const id = btn.getAttribute("data-id");

    // Remove the active class from all content blocks
    contents.forEach((content) => {
      content.classList.remove("auth_wrapper_content_block_active");
    });

    // Remove the active class from all buttons (if needed)
    tabButtons.forEach((button) => {
      button.classList.remove("auth_wrapper_content_block_active");
    });

    // Add the active class to the clicked button
    btn.classList.add("auth_wrapper_content_block_active");

    // Show the corresponding content block
    const targetContent = document.getElementById(id);
    if (targetContent) {
      targetContent.classList.add("auth_wrapper_content_block_active");
    }
  });
});
