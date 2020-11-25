const text = 'Meet The Care Clothes Team';
let count = 0;

let heading = document.querySelector('.heading');

const typing = () => {
  if (count < text.length) {
    heading.innerHTML += text.charAt(count);
    count++;

    setTimeout(typing, 150);
  }
};

window.onload = () => {
  typing();
};
