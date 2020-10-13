const electron = require("electron");
const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;
let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const startUrl = url.format({
    pathname: path.join(__dirname, "/../build/index.html"),
    protocol: "file:",
    slashes: true,
  });

  mainWindow.loadURL(isDev ? "http://localhost:3000" : startUrl);

//   mainWindow.webContents.openDevTools();
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}
app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
