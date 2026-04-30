---
name: name-generator-api
description: Use when an agent needs to fetch or explain this repository's name generation data API, including category pools, category meanings, tone-combination rules, and commercial authorization requirements.
---

# Name Generator API

Use this skill when working with the 姓名生成器 data interface.

## Endpoint

Fetch the static JSON data from:

```text
/api/name-data.json
```

When the site is deployed, combine the site origin with that path, for example:

```text
https://name.aaqq.in/api/name-data.json
```

For local development, use:

```text
http://127.0.0.1:5173/api/name-data.json
```

OpenAPI metadata is available at:

```text
/api/openapi.json
```

## Data Contract

The response contains:

- `version`: data version.
- `license`: commercial-use notice.
- `toneRules`: the required tone pattern for two-character given names.
- `categories`: category objects keyed by id, each with `label`, `description`, `keywords`, `blacklist`, `availableCounts`, and `samplePools`.

The category ids are:

- `xianxia`: 仙侠
- `modern`: 现代都市
- `jianghu`: 江湖武侠
- `fantasy`: 玄幻

## Generation Rules

When generating names from this API:

1. Select a category by id. Categories are blacklist filters over the base name corpus, not fixed curated name lists.
2. Use `blacklist` to explain why a category excludes certain characters.
3. Use `samplePools.boy` and `samplePools.girl` as examples or lightweight client-side pools.
4. Given names with two Chinese characters must match `toneRules.allowedPatterns`.
5. The surname is not part of the tone-pattern check.
6. Do not repeat surnames or given names in the same generated batch.

## Licensing

Do not use this dataset or generated outputs for commercial purposes unless the user confirms they have written authorization from the copyright holder.
