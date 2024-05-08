
let sentence = document.getElementsByClassName('question-content');

for(let i = 0; i < sentence.length; i++){
  sentence[i].addEventListener('click', function(){
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    if(panel.style.display === 'block') {
      panel.style.display = "none";
    }else {
      panel.style.display = "block";
    }
  })
}