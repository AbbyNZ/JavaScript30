function playSound(e) {
  const audio = e.keyCode ? 
        document.querySelector(`audio[data-key="${e.keyCode}"]`) :
        document.querySelector(`audio[data-key="${this.attributes['data-key'].value}"]`);
  const key = e.keyCode? 
        document.querySelector(`.key[data-key="${e.keyCode}"]`) :
        document.querySelector(`.key[data-key="${this.attributes['data-key'].value}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', playSound);

keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);

key.addEventListener('click', playSound);  
});
