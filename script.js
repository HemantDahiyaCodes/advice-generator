const adviceContainer = document.querySelector(".advice-container");
const rollBtn = document.querySelector(".roll");
const url = `https://api.adviceslip.com/advice`;

const getAdvice = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Couldn't fetch data.`);
    }
    const data = await response.json();
    adviceContainer.textContent = data.slip.advice;
  } catch (error) {
    console.log(error);
  }
};
getAdvice();
rollBtn.addEventListener("click", getAdvice);