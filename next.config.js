module.exports = {
  basePath: process.env.NODE_ENV === 'production'
    ? '/blog'
    : '',
  assetPrefix: process.env.NODE_ENV === 'production'
    ? '/blog/'
    : '',
}
