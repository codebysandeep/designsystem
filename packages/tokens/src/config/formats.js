/**
 * @module config/formats.js
 * @description define format mapping and transformations for different platforms.
 * @license MIT
 * @author Sandeep Upadhyay
 */
import {formats, transformGroups} from 'style-dictionary/enums';

// Define format mapping for different platforms
export const PLATFORM_FORMATS = {
  webGlobal: {
    css: formats.cssVariables,
    scss: formats.scssVariables,
    js: formats.javascriptModuleFlat,
    json: formats.jsonFlat
  },
  android: {
    xml: {
      tokens: formats.androidStrings,
      colors: formats.androidColors,
      family: formats.androidFontDimens,
    }
  },
  ios: {
    h: formats.iosMacros,
    plist: formats.iosPlist,
    json: formats.jsonFlat
  }
}

// Define transformation groups for different platforms
export const TRANSFORM_GROUPS = {
  web: transformGroups.web
};