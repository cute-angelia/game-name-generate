import assert from 'node:assert'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import generate, {
  getGenerationLimit,
  getNameCategories,
  getNameDataset,
  getTonePattern
} from '../src/name.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const apiData = JSON.parse(fs.readFileSync(path.join(root, 'public', 'api', 'name-data.json'), 'utf8'))
const compoundSurname = /^(司马|上官|欧阳|夏侯|诸葛|东方|赫连|皇甫|尉迟|公羊|澹台|公冶|宗政|濮阳|淳于|单于|太叔|申屠|公孙|仲孙|轩辕|令狐|宇文|长孙|慕容|司徒|司空|拓拔|.)(.+)$/

assert.deepStrictEqual(
  getNameCategories().map(function (category) { return category.value }),
  ['all', 'xianxia', 'modern', 'jianghu', 'fantasy']
)

assert.deepStrictEqual(Object.keys(getNameDataset().categories), Object.keys(apiData.categories))
assert.deepStrictEqual(getNameDataset().toneRules.allowedPatterns, apiData.toneRules.allowedPatterns)
assert.deepStrictEqual(getNameDataset().categories, apiData.categories)

assert.ok(getNameCategories().find(function (item) {
  return item.value === 'xianxia'
}).blacklist.includes('国'))

assert.ok(getNameCategories().find(function (item) {
  return item.value === 'modern'
}).blacklist.includes('剑'))

function assertNamesMatchCategory(category) {
  const names = generate(20, 'all', category).trim().split('\n')
  const surnames = []
  const givenNames = []
  const categoryInfo = getNameDataset().categories[category]
  const blacklist = categoryInfo ? categoryInfo.blacklist : []

  assert.strictEqual(names.length, 20)

  names.forEach(function (fullName) {
    const match = fullName.match(compoundSurname)
    const surname = match[1]
    const givenName = match[2]

    surnames.push(surname)
    givenNames.push(givenName)
    assert.ok(givenName.length >= 1, fullName + ' should include a given name')
    assert.ok(!blacklist.some(function (char) {
      return givenName.includes(char)
    }), fullName + ' should not include category blacklist chars')

    if (givenName.length === 2) {
      assert.ok(
        ['level-oblique', 'oblique-level'].indexOf(getTonePattern(givenName)) !== -1,
        fullName + ' should use alternating level/oblique tones'
      )
    }
  })

  assert.strictEqual(new Set(surnames).size, surnames.length, category + ' should not repeat surnames in one batch')
  assert.strictEqual(new Set(givenNames).size, givenNames.length, category + ' should not repeat given names in one batch')
  assert.ok(getGenerationLimit('all', category) >= 20, category + ' should support at least 20 unique names')
}

assertNamesMatchCategory('xianxia')
assertNamesMatchCategory('modern')
assertNamesMatchCategory('jianghu')
assertNamesMatchCategory('fantasy')
assertNamesMatchCategory('missing-category')

console.log('name generator tests passed')
