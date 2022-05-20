"use strict";
(function() {

  window.addEventListener('load', init);

  function init() {
    let betterClick = new Promise(buttonExecutor); 
    betterClick
      .then(function () { console.log('Option A'); })
      .catch(function () { console.log('Option B'); });
  }

function buttonExecutor(resolve, reject) {
    let myBtn = document.querySelector('button');
    myBtn.addEventListener('click', function() {
      resolve();
      console.log('clicked!');
    });
    setTimeout(reject, 5000);
}

})();