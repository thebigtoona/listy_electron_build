const electron = require('electron')
// Module to control application life.
const { app, BrowserWindow, Menu } = electron;

// path and url 
const path = require('path')
const url = require('url')

// electron-reload 
require('electron-reload')(__dirname)

// main menu module 
const mainMenu = require('./mainMenu.js');

let mainWindow

function createWindow () 
{
  'use strict';
  
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 400, height: 600});

  // and load the index.html of the app.
  mainWindow.loadURL(url.format(
  {
    pathname: path.join(__dirname, './resources/views/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}


// ready event 
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => { 'use strict'; if (process.platform !== 'darwin') { app.quit(); }});

// activate event 
app.on('activate', () => { 'use strict'; if (mainWindow === null) { createWindow(); }});

// main menu setup
const menu = Menu.buildFromTemplate(mainMenu.template)
Menu.setApplicationMenu(menu);


