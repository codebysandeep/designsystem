/**
 * @module config/filters.js
 * @description create functions to filter tokens based on themes and platforms.
 * @license MIT
 * @author Sandeep Upadhyay
 */

/**
 * Filters tokens based on the provided attributes.
 * @param {Object} categoryConfig - attribute with category.
 * @returns {function} - A function that filters tokens based on the provided attributes.
 */
export function createFilter(categoryConfig) {
  return (token) => {
    if (!categoryConfig) return true;
    
    if (categoryConfig.attributes && token.attributes) {
        return Object.keys(categoryConfig.attributes).every((key) => token.attributes[key] === categoryConfig.attributes[key]);
    }
    return false;
  };
}

/**
 * Filters tokens based on the provided themes.
 * @param {string[]} themeType - Theme types used to filter tokens.
 * @returns {function} - A function that filters tokens based on the provided theme types.
 */
export function createThemeFilter(themeType) {
  return (token) =>  {
    if (!token || typeof token !== 'object') return false;
    if (token.type === themeType) return true;
    if (token.value?.type === themeType) return true;
    return token.path?.includes(themeType) ?? false;
  }
}