export async function autotrimpsTabs(): Promise<void> {
  let tabBarMenu = document.querySelector('#autoTrimpsTabBarMenu');

  while (!tabBarMenu) {
    tabBarMenu = document.querySelector('#autoTrimpsTabBarMenu');
    await new Promise(r => setTimeout(r, 100));
  }


  const callback = function (mutationsList: MutationRecord[]) {
    observer.disconnect();
    if (tabBarMenu === null) {
      return;
    }

    for (let mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {

        const activeElements = tabBarMenu.querySelectorAll('li > a.active');
        tabBarMenu.querySelectorAll('li > a').forEach((a: Element) => {
          // Convert NodeList to an array for 'includes' method
          if (!Array.from(activeElements).includes(a)) {
            (a as HTMLElement).classList.remove('active');
          }
        });
      }
    }

    observer.observe(tabBarMenu, { attributes: true, subtree: true });
  };

  const observer = new MutationObserver(callback);

  observer.observe(tabBarMenu, { attributes: true, subtree: true });
}

