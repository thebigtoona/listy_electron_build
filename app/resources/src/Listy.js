// Listy.js
// ver 2.0
// author: Tina Colvin 
// date: 4/2/2018
// desc: controller for app.js 

/** an obj to hold the list information for Listy and display it in the html 
 * @param {array} list this is an empty array to add item objects to 
 * @method _displayItem(item) this method takes in the item obj and displays it in the ul. only used by other methods
 * @method addItem(ListItem) this is the main method that takes in the list item, adds it to the html template
 * then pushes the template to the 'list' array and displays the item. 
 */
module.exports = Listy = {
    staticCacheName: 'listy-v16',
    list: [],
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
        // template
        let listClass = listitem.trim().split(' ').join('-');
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
};

// export { Listy };