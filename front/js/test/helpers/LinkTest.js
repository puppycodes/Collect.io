const test = require('ava')
const LinkHelper = require('./../../js/helpers/Link')

test(async (t) => {
  t.equals(LinkHelper.domain('https://www.grafikart.fr'), 'grafikart.fr')
})
