//Simple accordion with pure JavaScript

const div = document.getElementsByClassName('wrapper')[0];
const headings = document.getElementsByTagName('h4');
const par = document.querySelectorAll('p');

function toggle(){
  for(let i = 0; i < par.length; i++){
      par[i].className = 'hide';
    }
  if(this.nextElementSibling.className === 'hide'){
      this.nextElementSibling.className = '';
    }
}

for(let i = 0; i < headings.length; i++){
    headings[i].onclick = toggle;
}