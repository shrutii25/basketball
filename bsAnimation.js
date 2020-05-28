var relativeEl = document.querySelector('.ball');
relativeEl.style.transform = 'translateX(100px)';
anime({
  targets: '.ball',
  /*translateX: {
    value: '*=4', // 100px * 2.5 = '250px'
    duration: 1700
  },*/
  width: {
    value: '-=20px', // 28 - 20 = '8px'
    duration: 800,
    easing: 'easeInOutSine'
  },
  rotate: {
    value: '+=2turn', // 0 + 2 = '2turn'
    duration: 1000,
    easing: 'easeInOutSine'
  },
  //direction: 'alternate',
  loop: true
});

