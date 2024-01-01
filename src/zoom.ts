// add listener to zoom in and out with ctrl + mouse wheel, or ctrl + +/- or ctrl + 0

export function zoomListener(): void {

  // zoom in and out with ctrl + mouse wheel
  window.addEventListener('wheel', (e: WheelEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      if (e.deltaY < 0) {
        zoomIn();
      } else {
        zoomOut();
      }
    }
  });

  // zoom in and out with ctrl + +/- or ctrl + 0
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.ctrlKey) {
      e.preventDefault();
      if (e.key === '+') {
        zoomIn();
      } else if (e.key === '-') {
        zoomOut();
      } else if (e.key === '0') {
        zoomReset();
      }
    }
  });
}

function zoomIn(): void {
  const body = document.body as HTMLBodyElement;
  let zoom = body.style.getPropertyValue("zoom");
  if (zoom === null || zoom === '') {
    zoom = '100%';
  }
  
  
  console.log('zoomIn');
  console.log(zoom);
}

function zoomOut(): void {
  console.log('zoomOut');
}
function zoomReset(): void {
  console.log('zoomReset');
}