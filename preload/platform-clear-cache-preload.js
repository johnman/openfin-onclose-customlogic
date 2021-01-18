if (window !== window.top) {
  return;
}
window.addEventListener("DOMContentLoaded", async () => {
  console.log("Loading platform cache management preload");
  const platform = fin.Platform.getCurrentSync();

  const finWindow = fin.Window.getCurrentSync();
  finWindow.once("close-requested", async (event) => {
    await fin.System.clearCache({
      cache: true,
      cookies: true,
      localStorage: true,
      appCache: true,
      userData: true
    });
    platform.quit();
  });
});
