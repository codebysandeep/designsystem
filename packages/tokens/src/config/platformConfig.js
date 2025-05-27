/**
 * @module config/platformalConfig.js
 * @description platformation configuration for Style Dictionary tokens.
 * @license MIT
 * @author Sandeep Upadhyay
 */

import { FILE_FORMATS, TRANSFORM_GROUPS } from './formats.js';
import { createFilter, createThemeFilter } from './filters.js';
import { TOKEN_THEME_TYPES } from './themes.js';

/**
* Returns the platform configuration for each platform.
8 @param {Object} TOKEN_CATEGORIES - The categories of tokens to be used in the configuration.
* @returns {Object} - An object containing platform configurations.
*/

export function getPlatformConfig(TOKEN_CATEGORIES) {
  return {
    // Web platform configuration
    webGlobal: (brand) => ({
      transformGroup: TRANSFORM_GROUPS.web,
      buildPath: `build/web/`,
      files: [
        // Generate global tokens for the brand
        ...['css', 'scss', 'js', 'json'].map((format) => ({
          destination: `${brand}/${format}/tokens.${format}`,
          format: FILE_FORMATS.web[format],
          filter: createFilter(TOKEN_CATEGORIES[brand]),
          options: {
            fileHeader: 'customHeader',
          },
        })),

        // Generate files for each category in the brand
        ...Object.keys(TOKEN_CATEGORIES[brand]).flatMap((category) =>
          ['css', 'scss', 'js', 'json'].map((format) => ({
            destination: `${brand}/${format}/${category}/${format}`,
            format: FILE_FORMATS.web[format],
            filter: createFilter(TOKEN_CATEGORIES[brand][category]),
            options: {
              fileHeader: 'customHeader',
            },
          }))
        ),
      ],
    }),

    // Android platform configuration
    android: (brand) => ({
      transformGroup: 'android',
      buildPath: `build/android/${brand}`,
      files: [
        // Generate XML files for tokens
        {
          destination: `xml/tokens.xml`,
          format: FILE_FORMATS.android.xml.tokens,
          options: {
            fileHeader: 'customHeader',
          },
        },
        {
          destination: `xml/colors.xml`,
          format: FILE_FORMATS.android.xml.colors,
          options: {
            fileHeader: 'customHeader',
          },
        },
        {
          destination: `xml/font_dimens.xml`,
          format: FILE_FORMATS.android.xml.family,
          options: {
            fileHeader: 'customHeader',
          },
        },
      ],
    }),

    // IOS platform configuration
    ios: (brand) => ({
      transformGroup: 'ios',
      buildPath: `build/ios/${brand}`,
      files: [
        // Generate files for each category in the brand
        ...Object.keys(TOKEN_CATEGORIES[brand]).flatMap((category) =>
          ['h', 'plist', 'json'].map((format) => ({
            destination: `${brand}/${format}/${category}/${format}`,
            format: FILE_FORMATS.ios[format],
            filter: createFilter(TOKEN_CATEGORIES[brand][category]),
            options: {
              fileHeader: 'customHeader',
            },
          }))
        ),
      ],
    }),
  };
}
