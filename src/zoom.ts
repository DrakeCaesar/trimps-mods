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

function zoom(change: number): void {
  const body = document.body as HTMLBodyElement;
  let zoom = body.style.getPropertyValue("zoom");
  if (zoom === null || zoom === '') {
    zoom = '100%';
  }
  let zoomValue = parseInt(zoom.replace('%', ''));
  zoomValue += change;
  body.style.setProperty("zoom", zoomValue + '%');
  console.log('zoomOut');
  console.log(zoom);
}

function zoomIn(): void {
  zoom(10);
}

function zoomOut(): void {
  zoom(-10);
}

function zoomReset(): void {
  const body = document.body as HTMLBodyElement;
  body.style.setProperty("zoom", '100%');
  console.log('zoomReset');
}