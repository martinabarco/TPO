function play() {
    document.querySelector(".textosection").className = "textosection";
    window.requestAnimationFrame(function(time) {
      window.requestAnimationFrame(function(time) {
        document.querySelector(".textosection").className = "textosection changing";
      });
    });
  }

  document.querySelector(".navenlace").addEventListener("click", play, false);