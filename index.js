[...document.getElementsByClassName('draggable')].forEach((element) => {
  makeDraggable(element);
});

function makeDraggable(element) {
  let pos = 0;
  element.onmousedown = (event) => {
    let clientX = event.clientX;
    document.onmousemove = (e) => {
      element.style.setProperty(
        '--pos-x',
        `${(pos += ((e.clientX - clientX) / element.width) * 100)}%`
      );
      clientX = e.clientX;
    };
    document.onmouseup = (e) => {
      document.onmousemove = null;
    };
  };
}
