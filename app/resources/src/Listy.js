// Listy.js
// ver: 2.0.1
// author: Tina Colvin
// date: 4/2/2018
// desc: controller for app.js

/** an obj to hold the list information for Listy and display it in the html
 * @param {String} staticCacheName this is the name of the static cache from sw.js. does not apply in electron version.
 * @param {Array} list this is an empty array to add item objects to
 * @method _displayItem(item) this method takes in the item obj and displays it in the ul. only used by other methods
 * @method addItem(ListItem) this is the main method that takes in the list item, adds it to the html template
 * then pushes the template to the 'list' array and displays the item.
 * @method addClick(item) this method simulates a click and pulls input from the user as the parameter 'item'
 */
module.exports = Listy =
{
    staticCacheName: '', // cache (still used in non-electron build)
    list: [],
    // method not used in the election version at this time
    _registerSvcWorker: function () {
        'use strict';
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register(`./sw.js`)
                .then(function (registration) {
                    console.log('Registration successful, scope is:', registration.scope);
                })
                .catch(function (error) {
                    console.log('Service worker registration failed, error:', error);
                });
        }
    },
    _displayItem: function (item) {
        $('ul').append(item.html);
    },
    addItem: function (listitem) {
        // format the list item class. it is the list item using '-' to replace ' '
        let listClass = listitem.trim().split(' ').join('-');
        // html template for list item
        let html = `<li class="list-group-item alert">
                        <p class="item-name ${listClass}" >${listitem}</p>
                        <button style="font-family: sans-serif;" type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </li>`;
        window.localStorage.setItem(listitem, html);
        let item = { listitem, html };  // the completed item layout
        this.list.push(item);  // add to list array
        this._displayItem(item);  // display the item
    },
    addClick: function (item) {
        // set listItem to be the user input value
        var listItem = $('input:text').val();

        // add item
        if (listItem)
            Listy.addItem(listItem)

        // clear input and return from addClick()
        $('input:text').val('')
        return
    }
};
