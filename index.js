exports = module.exports = {};

exports.useMe = function(fn) {
  fn(this);
};
