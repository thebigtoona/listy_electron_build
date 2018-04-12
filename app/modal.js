// required modules
const { BrowserWindow } = require('electron')
// path and url
const path = require('path')
const url = require('url')

exports.modal;

exports.createModalWindow = () =>
{
    'use strict';

    // Create the browser window.
    this.modal = new BrowserWindow({ width: 200, height: 300, parent: win });

    // and load the index.html of the app.
    this.modal.loadURL(url.format(
        {
            pathname: path.join(__dirname, './resources/views/modal.html'),
            protocol: 'file:',
            slashes: true
        }));

    // Open the DevTools.
    this.modal.webContents.openDevTools();

    // Emitted when the window is closed.
    this.modal.on('closed', function () {
        this.modal = null;
    });
};
