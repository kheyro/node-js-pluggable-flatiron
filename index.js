exports = module.exports = {};

exports.use = fn => {
  fn(this);
};
