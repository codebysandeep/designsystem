/**
 * @file build.js
 * @description Main build script for generating design tokens.
 * This script sets up the build process for design tokens, including platform-specific configurations and file generation.
 * Registered custom file header, categories, filter, transform groups for generated tokens for all platforms (web, Android, and iOS).
 * @license MIT
 * @author Sandeep Upadhyay
 */

import StyleDictionary from 'style-dictionary';
import { BRANDS, PLATFORMS } from './config/constants.js';
import { registerFileHeader } from './config/fileHeader.js';
import { generateTokenCategories } from './config/tokenCategories.js';
import { getPlatformConfig } from './config/platformConfig.js';

// Register custom file header
registerFileHeader();

// Generate category filter per brand
const TOKEN_CATEGORIES = generateTokenCategories(BRANDS);

// Get platform configurations
const PLATFORM_CONFIG = getPlatformConfig(TOKEN_CATEGORIES);

/**
 * Style Dictionary configuration, based on brand and platform
 * @property {string} brand - The name of the brand for which tokens are being generated.
 * @property {string} platform - The name of the platform for which tokens are being generated.
 * @return {Object} - The Style Dictionary configuration object.
 */
function getStyleDictionaryConfig(brand, platform) {
  return {
    source: [`data/${brand}/**/*.@(json | json5)`],
    platforms: {
      [platform]: PLATFORM_CONFIG[platform](brand),
    },
  };
}

// Loging build process
const logger = {
  start: (message) => console.log(`INFO: ${message} | Starting build...`),
  process: (message, brand, platform) =>
    console.warn(
      `WARN: ${message} | Processing ${brand} for ${platform} platform...`
    ),
  separator: (message) =>
    console.log(`SEPARATOR: ${message} | -------------------------------`),
  complete: (message) =>
    console.log(`Yahoo: ${message} | Build completed successfully!`),
  error: (message) => console.error(`ERROR: ${message} | Build failed!`),
};

// Main build function
(buildTokens) => {
  try {
    logger.start('Build started!');

    // Generate tokens for each brand and platform
    BRANDS.forEach((brand) => {
      PLATFORMS.forEach((platform) => {
        logger.separator();
        logger.process('Processing', brand, platform);

        // Get the Style Dictionary configuration for the current brand and platform
        const sd = new StyleDictionary(
          getStyleDictionaryConfig(brand, platform)
        );
        sd.buildPlatform(platform);
      });
    });
  } catch (error) {
    logger.error(
      `An error occurred during the build process: ${error.message}`
    );
    process.exit(1);
  }
};

// Start the build
buildTokens();
