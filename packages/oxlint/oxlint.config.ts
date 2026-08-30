import { defineConfig } from 'oxlint';
import configBrowser from './src/configs/browser.ts';
import configNode from './src/configs/node.ts';

export default defineConfig({
	extends: [configBrowser, configNode],
});
