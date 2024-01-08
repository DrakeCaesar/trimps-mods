export function breed(): void {
  const healthSelector: string = "#goodGuyBar"



  let xxealthElement = document.querySelector(healthSelector) as HTMLElement;

  return


  // const observer = new MutationObserver((mutations) => {
  //   for (let mutation of mutations) {
  //     // watch inner text
  //     if (mutation.type === "attributes" && mutation.attributeName === "style") {
  //       const widthValue = healthElement.style.width;
  //       const widthPercentage = parseFloat(widthValue);

  //       console.log(widthPercentage);

  //       if (widthPercentage == 0) {
  //         setTimeout(() => {
  //           swap("breed");
  //         }, 100000);
  //       }
  //       else if (widthPercentage == 100) {

  //         setTimeout(() => {
  //           swap("health");
  //         }, 100000);
  //       }
  //     }
  //   }
  // });

  // // observer.observe(healthElement, config);
  // console.log("observing healthElement");
}





function swap(name: string): void {
  // @ts-ignore
  toggleHeirlooms()


  //.icon-road2
  //.icon-heart3
  //.icon-shield2

  let health = document.querySelector("#carriedHeirloomsHere .icon-heart3") as HTMLElement;
  let breeding = document.querySelector("#carriedHeirloomsHere .icon-road2") as HTMLElement;

  let heirloom = name == "health" ? health : breeding;

  if (!heirloom) {
    // @ts-ignore
    toggleHeirlooms()
    // await new Promise((resolve) => setTimeout(resolve, 100));
    return;
  }

  heirloom.click();

  let button = document.querySelector("#equipHeirloomBtn") as HTMLElement;

  if (!button) {
    return;
  }

  button.click();

  // @ts-ignore
  toggleHeirlooms()
  // await new Promise((resolve) => setTimeout(resolve, 100));

}