// required modules
const { app, Menu, webContents } = require('electron');
const mainMenu = require('./mainMenu'); // main menu module
const mainWindow = require('./mainWindow'); // main window module
require('electron-reload')(__dirname)  // electron-reload

// ready event
app.on('ready', mainWindow.createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {  if (process.platform !== 'darwin') { app.quit(); } });

// activate event
app.on('activate', () => {  if (mainWindow === null) { mainWindow.createWindow(); } });

// main menu setup
const menu = Menu.buildFromTemplate(mainMenu.template)
Menu.setApplicationMenu(menu);

console.log(webContents.getAllWebContents());
