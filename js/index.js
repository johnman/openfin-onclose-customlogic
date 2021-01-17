const cookieName = "settingstoclear";
const localStorageName = "settingstoclear";

const init = async () => {
  let addSettingsButton = document.getElementById("add-settings");

  addSettingsButton.onclick = addSettings.bind(this);

  const version = document.getElementById("openfin-version");
  if (window.fin) {
    const runtimeVersion = await window.fin.System.getVersion();
    version.innerText = runtimeVersion;
  } else {
    version.innerText =
      "Not Applicable (you are running a browser). Please use the links below and ensure you have OpenFin installed.";
  }

  displaySettings();
};

const addSettings = () => {
  const displayDate = new Date(Date.now()).toISOString();
  localStorage.setItem(localStorageName, displayDate);
  let cookieExpiryDate = new Date(Date.now() + 86400e3);
  cookieExpiryDate = cookieExpiryDate.toUTCString();
  document.cookie =
    cookieName + "=" + displayDate + "; expires=" + cookieExpiryDate;
  displaySettings();
};

const displaySettings = () => {
  let cookieDisplay = document.getElementById("cookie-setting");
  let localStorageDisplay = document.getElementById("localstorage-setting");
  let cookieValues = document.cookie.split(";");
  let storageValue = localStorage.getItem(localStorageName);
  let cookieValue;
  cookieValues.forEach((entry) => {
    let pair = entry.split("=");

    if (cookieName === pair[0].trim()) {
      // Decode the cookie value and return
      cookieValue = decodeURIComponent(pair[1]);
    }
  });

  setValue(storageValue, localStorageDisplay);
  setValue(cookieValue, cookieDisplay);
};

const setValue = (value, element) => {
  if (value !== undefined && value !== null && value !== "") {
    element.innerText = value;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  init();
});
