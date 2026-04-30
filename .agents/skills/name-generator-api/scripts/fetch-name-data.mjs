const endpoint = process.argv[2] || 'http://127.0.0.1:5173/api/name-data.json'

const response = await fetch(endpoint)

if (!response.ok) {
  throw new Error(`Failed to fetch ${endpoint}: ${response.status}`)
}

const data = await response.json()
console.log(JSON.stringify({
  version: data.version,
  categories: Object.keys(data.categories),
  toneRules: data.toneRules,
  license: data.license
}, null, 2))
