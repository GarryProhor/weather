/**
 * @license MIT
 * @copyright GarryProhor 2023 All rights reserved
 * @author GarryProhor <igorprohorchenko@gmail.com>
 */


// import {fetchData, url} from "./api";
// import * as module from "./module";



/**
 * Add event listener on multiple elements
 * @param {NodeList} elements Elements node array
 * @param {string} eventType Event Type e.g.: "click", "mouseover"
 * @param {Function} callback Callback function
 */
const addEventOnElements = function (elements, eventType, callback){
    for(const element of elements) {
        element.addEventListener(eventType, callback);
    }
}

/**
 * Toggle search in module devices
 */
const searchView = document.querySelector("[data-search-view]");
const searchToggles = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");

addEventOnElements(searchToggles, "click", toggleSearch);