/**
 * Sets prefix(moduleName) for mutation name to right usage with vue-native-websocket package
 * See more on - https://www.npmjs.com/package/vue-native-websocket#with-custom-mutation-names
 *
 * @param {Object} mutationTypes - Object with a string fields, names of mutation-types
 * @param {String} moduleName - Name of a module in which mutation-types are located
 * @returns {(string|object)}
 */

export default function (mutationTypes = {}, moduleName = '') {
  return (
    Object
      .entries(mutationTypes)
      .reduce((acc, [key, val]) => ({
        ...acc,
        [key]: `${moduleName}/${val}`,
      }), {})
  );
}
