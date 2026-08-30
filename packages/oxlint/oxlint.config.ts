import { defineConfig } from 'oxlint';
import configBrowser from './configs/browser.ts';
import configNode from './configs/node.ts';

export default defineConfig({
	extends: [configBrowser, configNode],
});
