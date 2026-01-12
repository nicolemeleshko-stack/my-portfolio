window.addEventListener('DOMContentLoaded', () => {
  const text1 = "Hello I am Nicole";
  const text2 = "Welcome to my portfolio";

  let index = 0;
  let currentText = text1;
  const element = document.getElementById('typing');

  function type() {
    element.textContent = currentText.slice(0, index + 1);
    index++;

    if(index < currentText.length){
      setTimeout(type, 100);
    } else {
      if(currentText === text1){
        setTimeout(erase, 1500); 
      }
    }
  }

  function erase() {
    element.textContent = currentText.slice(0, index - 1);
    index--;
    if(index > 0){
      setTimeout(erase, 50);
    } else {
      currentText = text2;
      index = 0;
      type(); 
    }
  }

  type(); 
});