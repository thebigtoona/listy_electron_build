// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Listy = require('./Listy.js');

/**
 * fn to simulate a click and add the items to the list. no parameters.
 */
function addClick(list) {
    var listItem = $('input:text').val();

    if (listItem)
        Listy.addItem(listItem);
    $('input:text').val('');
    return
}


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
        addClick(Listy.list);
    });

    // remove item from list 
    $('ul').on('click', '.close', function () {
        var pElement = $(this).parent().find('p').text();  // grab the text from the list item p element
        window.localStorage.removeItem(pElement); // remove the item from localstorage by key above
        $(this).alert('close'); // close the item on the gui
    });

    // add item by pressing 'Enter'
    $(document).keypress(function (e) {
        if (e.which == 13) {
            e.preventDefault();
            addClick();
        }
    });
});