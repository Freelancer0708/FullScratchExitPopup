window.addEventListener("DOMContentLoaded", () => {
  history.pushState(null, null, location.href);

  const exitPopup = document.getElementById("exit-popup");
  const exitPopupBg = document.getElementById("exit-popup-bg");
  const exitPopupClose = document.getElementById("exit-popup-close");
  let isOneTime = true;
  window.addEventListener("popstate", () => {
    if (isOneTime) {
      console.log("wait");
      exitPopup.classList.add("active");
      isOneTime = false;
      history.pushState(null, null, location.href);
    }
  });

  exitPopupBg.addEventListener("click",() => {
    exitPopup.classList.remove("active");
  });
  exitPopupClose.addEventListener("click",() => {
    exitPopup.classList.remove("active");
  });
});
