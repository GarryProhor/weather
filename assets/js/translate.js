/**
 * @license MIT
 * @fileoverview Google translate api, api request etc.
 * @copyright GarryProhor 2023 All rights reserved
 * @author GarryProhor <igorprohorchenko@gmail.com>
 */

'use strict';

const API_KEY = 'AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw'; //from request header network devtool, free api_key
const sourceLanguage = 'en';
const targetLanguage = 'ru';

/**
 *
 * @param {string} text Translate location from input
 * @returns {Promise<*>}
 */
export async function translateToRussian(text) {

    const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&source=${sourceLanguage}&target=${targetLanguage}&q=${text}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: text,
            source: 'en',
            target: 'ru'
        })
    });

    const data = await response.json();
    return data.data.translations[0].translatedText;
}



