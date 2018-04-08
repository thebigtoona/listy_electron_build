// name: app.js
// desc: rederer process for listy
// ver: 2.0.2
// date: 4/3/18
const $ = require('jquery'); // require jquery before listy!
const Listy = require('./Listy.js');  // require listy module
const ipcRenderer = require('electron').ipcRenderer; // require electron modules here

$(document).ready(function () {
    var i;
    var localStorage = window.localStorage;

    // add items to listy.list and to localstorage
    for (i = 0; i < window.localStorage.length; i++) {
        var storedItem = localStorage.getItem(localStorage.key(i));
        Listy.list.push({ listitem: localStorage.key(i), html: storedItem });
        $('ul').append(storedItem);
    }

    // register the svc worker first
    // Listy._registerSvcWorker();

    // add item to list
    $('#add-btn').click(function (e) {
        e.preventDefault();
        Listy.addClick(Listy.list);
    });

    // remove item from list
    $('ul').on('click', '.close', function () {
        var pElement = $(this).parent().find('p').text();  // grab the text from the list item p element
        window.localStorage.removeItem(pElement); // remove the item from localstorage by key above
        $(this).alert('close'); // close the item on the gui
    });

    // add item by pressing 'Enter'
    $(document).keypress(function (e) {
        if (e.which === 13) {
            e.preventDefault();
            Listy.addClick();
        }
    });

    ipcRenderer.on('remote', () => { console.log('clicked'); });
});
