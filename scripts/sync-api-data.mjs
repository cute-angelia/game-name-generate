import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { getNameDataset } from '../src/name.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const apiDir = path.join(root, 'public', 'api')

fs.mkdirSync(apiDir, { recursive: true })
fs.writeFileSync(
  path.join(apiDir, 'name-data.json'),
  `${JSON.stringify(getNameDataset(), null, 2)}\n`
)
