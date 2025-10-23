document.addEventListener("DOMContentLoaded", () => {
  const text = "62 TOTS. 5 MINUTES.";
  const animatedText = document.getElementById("animatedText");
  animatedText.textContent = ""; // clear the text first

  let index = 0;

  function typeText() {
    if (index < text.length) {
      animatedText.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, 100); // typing speed (ms)
    }
  }

  typeText();
});