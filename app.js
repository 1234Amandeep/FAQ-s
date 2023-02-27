//using selectors inside the element
// traversing the dom

const wholeQuesContainer = document.querySelector('.questions')
const allQuestions = document.querySelectorAll('.question')

console.log(allQuestions);
wholeQuesContainer.addEventListener('click', (e) => {
  let targetedBtn = e.target;
  
  if(targetedBtn.parentElement.classList.contains('plus-icon'))
  {
    for(let i = 0; i < allQuestions.length; i++)
    {
      allQuestions[i].classList.remove('show-text')
    }

    targetedBtn.parentElement.parentElement.parentElement.parentElement.classList.add('show-text')
  }
  else if(targetedBtn.parentElement.classList.contains('minus-icon'))
  {
    targetedBtn.parentElement.parentElement.parentElement.parentElement.classList.remove('show-text')
  }

 
  // console.log(targetedBtn.parentElement);
})


































