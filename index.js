exports = module.exports = {};

exports.use = function(fn) {
  fn(this);
};
