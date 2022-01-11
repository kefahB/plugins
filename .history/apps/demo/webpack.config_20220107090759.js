const webpack = require('@nativescript/webpack');
const path = require('path');
const { resolve } = require('path');

module.exports = (env) => {
  webpack.init(env);
  webpack.useConfig('typescript');

  webpack.chainWebpack((config) => {
    // shared demo code
    config.resolve.alias.set('@demo/shared', resolve(__dirname, '..', '..', 'tools', 'demo'));
  });
  console.log(__dirname)
  //Example if you need to share images across demo apps:
 /*webpack.Utils.addCopyRule({
    from: 'nativescript_google_maps_api.xml',
  	to: 'platforms/android/app/src/main/res/values',
    context: path.resolve(__dirname, 'shared', 'platforms', 'android', 'res', 'values')
  });*/

  return webpack.resolveConfig();
};
