const items = document.querySelectorAll('#timeline li');

const InViewport = e => {
  const rect = e.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (InViewport(item)) {
      item.classList.add('show');
    }
  });

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

function darkMode(){

const isChecked = document.getElementById("check").checked;
const header = document.getElementById("main-header");
const test = document.querySelectorAll('#timeline li div');
const test2 = document.querySelectorAll('#timeline ul li');


if (isChecked) {
  document.body.style.background = '#222';
  header.style.background = '#111';

  for(let i = 0 ; i < test.length ; i++){
    test[i].classList.remove("light-mode");
    test[i].classList.add("dark-mode");
    test2[i].classList.remove("light-mode");
    test2[i].classList.add("dark-mode");
  }
}
else {
  document.body.style.background = '#425b84';
  header.style.background = '#5b7bb4';

  for(let i = 0 ; i < test.length ; i++){
    test[i].classList.add("light-mode");
    test[i].classList.remove("dark-mode");
    test2[i].classList.add("light-mode");
    test2[i].classList.remove("dark-mode");
    }
}
}



