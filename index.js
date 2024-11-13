const minusIcons = document.querySelectorAll(".minus-icon");
const plusIcons = document.querySelectorAll(".plus-icon");
const answerContainers = document.querySelectorAll('.answer-container');
const questionContainers = document.querySelectorAll('.question-container');

// for(let i = 0; i < answerContainers.length; i++){
//     answerContainers[i].style.maxHeight = 0;
//     answerContainers[i].style.overflow = 'hidden';
// }

minusIcons.forEach((minusIcon, index) => {
  minusIcon.addEventListener("click", () => {
    minusIcon.style.display = "none"; // Hide the minus icon
    plusIcons[index].style.display = "block"; // Show the corresponding plus icon
    answerContainers[index].style.maxHeight = 0;
    answerContainers[index].style.overflow = 'hidden';
    questionContainers[index].style.marginBottom = 0;
  });
});

plusIcons.forEach((plusIcon, index) => {
  plusIcon.addEventListener("click", () => {
    plusIcon.style.display = "none"; // Hide the minus icon
    minusIcons[index].style.display = "block"; // Show the corresponding plus icon
    answerContainers[index].style.maxHeight = 'none';
    questionContainers[index].style.marginBottom = '30px';
  });
});
