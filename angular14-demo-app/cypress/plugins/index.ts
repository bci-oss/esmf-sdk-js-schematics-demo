// Plugins enable you to tap into, modify, or extend the internal behavior of Cypress
// For more info, visit https://on.cypress.io/plugins-api

/**
 * @type {Cypress.PluginConfig}
 */
import {read} from 'clipboardy';

export default (
    on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions,
) => {
    on('task', {
        // Clipboard test plugin
        getClipboard: () => {
            return read();
        }
    })
}
