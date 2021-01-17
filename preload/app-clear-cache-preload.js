if (window !== window.top) {
  return;
}
window.addEventListener("DOMContentLoaded", () => {
  console.log("Loading app cache management preload check.");

  if (fin.me.isMainWindow()) {
    console.log("Applying app cache management.");
    fin.me.once("close-requested", (event) => {
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
      const app = fin.Application.getCurrentSync();
      app.quit(true);
    });
  }
});
