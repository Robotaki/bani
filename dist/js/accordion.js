const accordionQuestions = () => {
    const accordionItems = document.querySelectorAll(".questions__item");
  
    accordionItems.forEach(elem => {
      elem.addEventListener("click", () => {
        elem.classList.toggle("active");
      });
    })
  
  
  }
  accordionQuestions();