/**
 * @module config/tokenCategories.js
 * @description utility function that generates token categories configurations from token JSON files.
 * @license MIT
 * @author Sandeep Upadhyay
 */

import fs from 'fs';
import path from 'path';

/**
 * Reads token JSON files from the specified directory and generates a configuration object.
 * @param {string[]} dir (brands name - 'brand-a', 'brand-b') - The directory containing token JSON files.
 * @returns {Object} - An object containing token categories configurations.
 */

export function generateTokenCategories(brands) {
  const tokenCategories = {};

  brands.forEach((brand) => {
    const brandPath = path.join('data', brand);

    if (fs.existsSync(brandPath)) {
      const files = fs.readdirSync(brandPath);
      tokenCategories[brand] = {};

      // Read each JSON file in the brand directory
      // and parse its content into the tokenCategories object
      files.forEach((file) => {
        if (file.endsWith('.json')) {
          const category = file.replace('.json', '');
          tokenCategories[brand][category] = {
            attributes: { category },
          };
        }
      });
    }
  });
}
