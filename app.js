const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const sugarml = require('sugarml')
const sugarss = require('sugarss')
const lost = require('lost')
const animation = require('postcss-animation')

const env = require('env2')('./.env')
const contentful_token = process.env.ACCESS_TOKEN
const contentful_spaceid = process.env.SPACE_ID

const Contentful = require('spike-contentful')

const locals = {}

module.exports = {
  reshape: htmlStandards({ locals: () => locals })
}

const newLocal = 'data.json';

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock', 'npm-strinkwrap.json'],
  reshape: htmlStandards({
    parser: sugarml,
    locals: (ctx) => locals,
    minify: env === 'production',
    retext: []
  }),
  postcss: cssStandards({
    parser: sugarss,
    minify: env === 'production',
    warnForDuplicates: env !== 'production',
    appendPlugins: [lost(), animation()]
  }),
  babel: jsStandards(),
  plugins: [
    new Contentful({
      addDataTo: locals,
      accessToken: contentful_token,
      spaceId: contentful_spaceid,
      contentTypes: [
        {
          name: 'cities',
          id: 'city',
          filters: {
            order: 'fields.slug'
          },
          transform: (city) => {
            return city.fields
          }
        },
        {
          name: 'allcities',
          id: 'city'
        },
        {
          name: 'features',
          id: 'features'
        },
        {
          name: 'museums',
          id: 'museum',
          transform: (museum) => {
            return museum.fields
          },
          filters: {
            limit: 1000,
            order: 'fields.slug'
          },
          template: {
            path: 'views/museum.sgr',
            output: (museum) => { return `museum/${museum.slug}.html` }
          }
        },
        {
          name: 'pieces',
          id: 'piece',
          filters: {
            limit: 1000,
            order: '-sys.updatedAt'
          },
          transform: (piece) => {
            return piece.fields
          },
          template: {
            path: 'views/story.sgr',
            output: (story) => { return `story/${story.slug}.html` }
          }
        },
        {
          name: 'recentstories',
          id: 'piece',
          transform: (piece) => {
             if(piece.fields.featured==true){
              return piece.fields
            }else{
              return null
            }
          },
          filters: {
            order: '-sys.updatedAt',
            limit: 110
          }
        },
        {
          name: 'art',
          id: 'art',
          transform: (art) => {
            return art.fields
          }
        },
        {
          name: 'location',
          id: 'location',
          filters: {
            limit: 1000
          },
          transform: (location) => {
            return location.fields
          }
        }
      ]
    })
]
}
