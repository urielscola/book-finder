export const toggleMenuBody = state => {
  document.querySelector('html').style.overflowY = state;
  document.body.style.overflowY = state;
  if (state === 'hidden') {
    document.ontouchmove = function(e) {
      e.preventDefault();
    };
  } else {
    document.ontouchmove = function(e) {
      return true;
    };
  }
};
