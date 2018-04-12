// required modules
const { BrowserWindow } = require('electron')
// path and url
const path = require('path')
const url = require('url')

exports.win;

exports.createWindow = () =>
{
    'use strict';

    // Create the browser window.
    this.win = new BrowserWindow({ width: 450, height: 600, child: exports.modal });

    // and load the index.html of the app.
    this.win.loadURL(url.format(
        {
            pathname: path.join(__dirname, './resources/views/index.html'),
            protocol: 'file:',
            slashes: true
        }));

    // Open the DevTools.
    // this.win.webContents.openDevTools();

    // Emitted when the window is closed.
    this.win.on('closed', function () {
        this.win = null;
    });
};
