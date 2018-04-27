const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [autoprefixer({ browsers: ["last 2 versions", "ios >= 8", "android >= 4.0", "ie >= 8"] })]
};
