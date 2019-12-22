/**
 * This file enables `@/store/index.js` to import
 * all vuex modules in a one-shot manner.
 */

const requireModule = require.context('.', true, /index\.js$/);
const modules = {};

requireModule.keys().forEach((fileName) => {
  // Disallow register this file as a Vuex module
  if (fileName === './index.js') {
    return;
  }

  const moduleName = fileName.replace(/(\.\/|\/index.js)/g, '');

  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default,
  };
});

export default modules;
