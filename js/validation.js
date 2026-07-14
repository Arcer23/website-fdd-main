(function () {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  const success = document.querySelector(".form-success");

  const validators = {
    name: (v) => v.trim().length > 1 || "Enter your full name.",
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email address.",
    phone: (v) =>
      v.trim() === "" ||
      /^[0-9()+\-.\s]{7,}$/.test(v) ||
      "Enter a valid phone number.",
    message: (v) =>
      v.trim().length > 9 || "Tell us a little more (10+ characters).",
  };

  const showError = (field, message) => {
    const wrap = field.closest(".form-field");
    wrap.classList.add("has-error");
    const err = wrap.querySelector(".form-error");
    if (err) err.textContent = message;
  };
  const clearError = (field) => {
    field.closest(".form-field").classList.remove("has-error");
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    Object.keys(validators).forEach((name) => {
      const field = form.elements[name];
      if (!field) return;
      const result = validators[name](field.value);
      if (result !== true) {
        showError(field, result);
        valid = false;
      } else {
        clearError(field);
      }
    });

    if (valid) {
      form.reset();
      if (success) success.classList.add("is-visible");
      form.hidden = true;
      setTimeout(() => {
        form.hidden = false;
        if (success) success.classList.remove("is-visible");
      }, 5000);
    }
  });

  // Live-clear errors as user types
  Object.keys(validators).forEach((name) => {
    const field = form.elements[name];
    if (field) field.addEventListener("input", () => clearError(field));
  });
})();
