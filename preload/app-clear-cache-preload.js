if (window !== window.top) {
  return;
}
window.addEventListener("DOMContentLoaded", async () => {
  console.log("Loading app cache management preload check.");

  if (fin.me.isMainWindow()) {
    console.log("Applying app cache management.");
    fin.me.once("close-requested", async (event) => {
      await fin.System.clearCache({
        cache: true,
        cookies: true,
        localStorage: true,
        appCache: true,
        userData: true
      });
      const app = fin.Application.getCurrentSync();
      app.quit(true);
    });
  }
});
