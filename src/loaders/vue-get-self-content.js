module.exports = function (source) {
  const newSource = source.replace('export default {', `export default { content: ${new String(source)},`);
  return newSource;
};
