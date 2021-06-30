const stickyScroll = ({
  el,
  elWrap,
  topMargin = 0,
  classNameDivider = "js-divider-stop",
  calcWidth = true,
  startPoint = 0,
}) => {
  let classNameStop = "stop-scroll-block";
  let classNameFix = "fix-scroll-block";

  if (calcWidth) elWrap.style.cssText = `width: ${el.offsetWidth}px;`;

  el.style.height = elWrap.getBoundingClientRect().height + "px";

  let dividerStop = document
    .querySelector(`.${classNameDivider}`)
    .getBoundingClientRect().top;

  let positionEl = el.getBoundingClientRect(),
    R = Math.round(
      positionEl.top + elWrap.getBoundingClientRect().height - dividerStop
    );

  if (positionEl.top - topMargin + startPoint <= 0) {
    if (positionEl.top - topMargin <= R) {
      elWrap.classList.add(classNameStop);
      elWrap.classList.remove(classNameFix);
      elWrap.style.top = -R + "px";
    } else {
      elWrap.classList.add(classNameFix);
      elWrap.classList.remove(classNameStop);
      elWrap.style.top = topMargin + "px";
    }
  } else {
    elWrap.classList.remove(classNameStop);
    elWrap.classList.remove(classNameFix);
    elWrap.style.top = "";
  }
};

const throttle = (fn, wait) => {
  let time = 0;
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
};

const uniqueArray = (value, index, self) => {
  return self.indexOf(value) === index;
};

export { stickyScroll, throttle, uniqueArray };
