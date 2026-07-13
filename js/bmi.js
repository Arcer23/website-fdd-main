(function () {
  const form = document.querySelector("#bmiForm");
  if (!form) return;

  const resultValue = document.querySelector("#bmiValue");
  const resultCategory = document.querySelector("#bmiCategory");

  const categorize = (bmi) => {
    if (bmi < 18.5) return { label: "Below typical range", tone: "#7FA3C7" };
    if (bmi < 25) return { label: "Within typical range", tone: "#8FA888" };
    if (bmi < 30) return { label: "Above typical range", tone: "#C79A4B" };
    return { label: "Well above typical range", tone: "#B5473A" };
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const heightCm = parseFloat(form.elements.height.value);
    const weightKg = parseFloat(form.elements.weight.value);
    if (!heightCm || !weightKg) return;

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    const { label } = categorize(bmi);

    resultValue.textContent = bmi.toFixed(1);
    resultCategory.textContent = label;
    resultCategory.parentElement.hidden = false;
  });
})();
