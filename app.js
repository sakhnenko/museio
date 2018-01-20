const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const sugarml = require('sugarml')
const sugarss = require('sugarss')
const env = process.env.SPIKE_ENV
const Contentful = require('spike-contentful')
const standard = require('reshape-standard')

const locals = {}

module.exports = {
  reshape: standard({ locals: () => locals }),
  
}

const newLocal = 'data.json';

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock', 'package-lock.json'],
  reshape: htmlStandards({
    parser: sugarml,
    locals: (ctx) => locals,
    minify: env === 'production'
  }),
  postcss: cssStandards({
    parser: sugarss,
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards(),
  plugins: [
    new Contentful({
      addDataTo: locals,
      accessToken: '480640bb178b9eb1632c2730e0b37dfd46aee289385c8852592e63a779470a07',
      spaceId: '543uoj65nye4',
      contentTypes: [
        {
          name: 'cities',
          id: 'city'
        },
        {
          name: 'museums',
          id: 'museum'
        },
        {
          name: 'pieces',
          id: 'piece'
        }
      ]
    })
]
}
