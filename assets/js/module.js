/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright GarryProhor 2023 All rights reserved
 * @author GarryProhor <igorprohorchenko@gmail.com>
 */

'use strict';

export const weekDaysNames = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота"
];
export const monthNames = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
    "Сен",
    "Окт",
    "Нояб",
    "Дек"
];
/**
 *
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. format: "Sunday 10, Jan"
 */
export const getDate = function (dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDaysNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 *
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} TIme String. format: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    // const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 24 || 0}:${minutes}`;
}

/**
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} TIme String. format: "HH:MM AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    // const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 24 + ":00" || 0+":00"}`;
}

/**
 * @param {number} mps Meter per seconds
 * @returns {number} Kilometer per hours
 */
export const mpsToKmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: "Хорошо",
        message: "Качество воздуха считается удовлетворительным, а загрязнение воздуха практически не представляет опасности."
    },
    2: {
        level: "Приемлемый",
        message: "Качество воздуха приемлемое; тем не менее, некоторые загрязняющие вещества могут представлять умеренную опасность для здоровья очень небольшого числа людей, которые необычайно чувствительны к загрязнению воздуха."
    },
    3: {
        level: "Умеренный",
        message: "Некоторые люди из чувствительных групп могут испытывать последствия для здоровья. Широкая общественность вряд ли пострадает"
    },
    4: {
        level: "Плохой",
        message: "Каждый может начать испытывать последствия для здоровья; члены чувствительных групп могут испытывать более серьезные последствия для здоровья"
    },
    5: {
        level: "Очень плохой",
        message: "Медицинские предупреждения о чрезвычайных ситуациях. Скорее всего, пострадает все население"
    }
}