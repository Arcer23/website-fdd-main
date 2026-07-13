(function () {
  // Tab switching between BMI and calorie calculator
  const tabs = document.querySelectorAll('.tool-tab');
  const panels = document.querySelectorAll('.tool-panel');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('is-active'));
      panels.forEach((p) => p.classList.remove('is-active'));
      tab.classList.add('is-active');
      document.querySelector(`#${tab.dataset.panel}`).classList.add('is-active');
    });
  });

  // Calorie calculator (Mifflin-St Jeor)
  const form = document.querySelector('#calorieForm');
  if (!form) return;

  const resultValue = document.querySelector('#calorieValue');
  const resultLabel = document.querySelector('#calorieLabel');

  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const age = parseFloat(form.elements.age.value);
    const heightCm = parseFloat(form.elements.height.value);
    const weightKg = parseFloat(form.elements.weight.value);
    const sex = form.elements.sex.value;
    const activity = form.elements.activity.value;

    if (!age || !heightCm || !weightKg) return;

    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
    bmr += sex === 'male' ? 5 : -161;

    const total = Math.round(bmr * (activityFactors[activity] || 1.2));

    resultValue.textContent = total.toLocaleString();
    resultLabel.textContent = 'Estimated calories / day to maintain weight';
  });
})();
