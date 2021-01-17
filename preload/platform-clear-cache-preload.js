if (window !== window.top) {
  return;
}
window.addEventListener("DOMContentLoaded", () => {
  console.log("Loading platform cache management preload");
  const platform = fin.Platform.getCurrentSync();

  const finWindow = fin.Window.getCurrentSync();
  finWindow.once("close-requested", (event) => {
    fin.desktop.System.clearCache(
      {
        cache: true,
        cookies: true,
        localStorage: true,
        appCache: true,
        userData: true
      },
      () => {
        console.log("cache deleted");
      }
    );
    platform.quit();
  });
});
