// required modules
const { app, Menu, webContents, ipcMain } = require('electron');
const mainWindow = require('./mainWindow'); // main window module
const modal = require('./modal'); // modal window
require('electron-reload')(__dirname)  // electron-reload

// ready event
app.on('ready', mainWindow.createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {  if (process.platform !== 'darwin') { app.quit(); } });

// activate event
app.on('activate', () => {  if (mainWindow === null) { mainWindow.createWindow(); } });

// modal communication
ipcMain.on('modal', function(data)
{
  modal.createModalWindow();
  // console.log(data);
})
