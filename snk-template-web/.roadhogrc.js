const path = require('path');
const pxtorem = require('postcss-pxtorem');

const svgSpriteDirs = [
  require.resolve('antd').replace(/warn\.js$/, ''), // antd 内置svg
  path.resolve(__dirname, 'src/assets/svg'),  // 业务代码本地私有 svg 存放目录
];

export default {
  entry: 'src/index.js',
  theme: 'src/theme/theme.js',
  svgSpriteLoaderDirs: svgSpriteDirs,
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 12,
      propWhiteList: [],
    }),
  ],
  extraBabelPlugins: [
    'transform-runtime',
    ['import', { 'libraryName': 'antd', 'libraryDirectory': 'lib', 'style': true }]
  ],
  env: {
    development: { // 开发环境
      extraBabelPlugins: [
        'dva-hmr',
      ],
      define: {
        SERVER: '',
      }
    },
    production: { // 生产环境
      define: {
        SERVER: '',
      }
    }
  },
  define: {
    VERSION: require('./package.json').version
  }
}
