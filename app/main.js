// require electron 
const electron = require('electron');

// Module to control application life.
const { app, Menu } = electron;

// main menu module 
const mainMenu = require('./mainMenu');

const mainWindow = require('./mainWindow');

// electron-reload 
require('electron-reload')(__dirname)


// ready event 
app.on('ready', mainWindow.createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {  if (process.platform !== 'darwin') { app.quit(); }});

// activate event 
app.on('activate', () => {  if (mainWindow === null) { mainWindow.createWindow(); }});

// main menu setup
const menu = Menu.buildFromTemplate(mainMenu.template)
Menu.setApplicationMenu(menu);


