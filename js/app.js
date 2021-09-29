const App = (() => {
  // Caching the DOM
  const displayEl = document.querySelector("h1");
  const addBtn = document.querySelector(".addition");
  const subBtn = document.querySelector(".subtract");
  const resetBtn = document.querySelector(".reset");
  let num = 0;

  function reset() {
    return 0;
  }

  function eventListeners() {
    addBtn.addEventListener("click", function () {
      num++;
      render(num);
    });

    subBtn.addEventListener("click", function () {
      num--;
      render(num);
    });

    resetBtn.addEventListener("click", function () {
      num = reset();
      render(num);
    });
  }

  function render(num = 0) {
    displayEl.innerHTML = `${num}`;
  }

  function init() {
    eventListeners();
    render(num);
  }

  return {
    init: init,
  };
})();

App.init();
