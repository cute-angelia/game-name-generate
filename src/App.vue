<template>
  <main class="shell">
    <section class="workspace">
      <aside class="control-panel">
        <div class="brand">
          <img src="./assets/name-forge-logo.svg" alt="" />
          <div>
            <p class="eyebrow">Name Forge</p>
            <h1>姓名生成器</h1>
          </div>
        </div>

        <div class="logic-note">
          <p>{{ currentCategoryDescription }}</p>
        </div>

        <div class="field">
          <label for="sex">性别</label>
          <select id="sex" v-model="sex">
            <option value="all">全部</option>
            <option value="boy">男</option>
            <option value="girl">女</option>
          </select>
        </div>

        <div class="field">
          <label for="category">分类</label>
          <select id="category" v-model="category">
            <option
              v-for="item in categories"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </option>
          </select>
        </div>

        <div class="field">
          <label for="count">个数</label>
          <input id="count" v-model.number="count" type="number" min="1" :max="maxCount" />
        </div>

        <p v-if="error" class="error">{{ error }}</p>

        <div class="actions">
          <button type="button" class="primary" @click="generateNames">
            <Sparkles :size="18" />
            生成
          </button>
          <button type="button" class="secondary" @click="clearNames">
            <Eraser :size="18" />
            清空
          </button>
        </div>

        <p class="license-note">商用需获得作者书面授权</p>
      </aside>

      <section class="result-panel">
        <div class="result-head">
          <div>
            <p class="eyebrow">Generated</p>
            <h2>{{ currentCategoryLabel }}</h2>
          </div>
          <div class="result-tools">
            <button type="button" :disabled="!resultList.length" @click="generateNames">
              <RefreshCw :size="16" />
              换一批
            </button>
            <span>{{ resultList.length }} 个</span>
          </div>
        </div>
        <p v-if="copyMessage" class="copy-toast">{{ copyMessage }}</p>

        <div :class="['name-grid', { 'name-grid-wide': category === 'fantasy' }]" aria-live="polite">
          <button
            v-for="(name, index) in resultList"
            :key="`${name}-${index}`"
            type="button"
            :class="['name-slip', { 'name-slip-long': name.length >= 4 }]"
            @click="copyName(name)"
          >
            {{ name }}
          </button>
          <div v-if="!resultList.length" class="empty-state">
            <Wand2 :size="34" />
            <span>点击生成</span>
          </div>
        </div>

        <textarea v-model="output" readonly aria-label="生成结果"></textarea>
      </section>
    </section>
  </main>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { Eraser, RefreshCw, Sparkles, Wand2 } from 'lucide-vue-next'
import generate, { getGenerationLimit, getNameCategories } from './name.js'

const sex = ref('all')
const category = ref('all')
const categories = getNameCategories()
const count = ref(20)
const output = ref('')
const error = ref('')
const copyMessage = ref('')
let copyTimer = 0

const resultList = computed(function () {
  return output.value.trim() ? output.value.trim().split('\n') : []
})

const currentCategoryLabel = computed(function () {
  const selected = categories.find(function (item) {
    return item.value === category.value
  })
  return selected ? selected.label : '全部分类'
})

const currentCategoryDescription = computed(function () {
  const selected = categories.find(function (item) {
    return item.value === category.value
  })
  return selected && selected.description ? selected.description : '基于基础大词库生成，按分类黑名单过滤，批量生成时避免同批次重复。'
})

const maxCount = computed(function () {
  return getGenerationLimit(getSexValue() || 'all', category.value)
})

watch([sex, category], function () {
  if (resultList.value.length) {
    generateNames()
  }
})

function getSexValue() {
  return sex.value
}

function generateNames() {
  const total = Number(count.value)
  const sex = getSexValue()

  if (!sex) {
    error.value = '至少选择一个性别'
    return
  }

  if (!Number.isInteger(total) || total <= 0 || total > maxCount.value) {
    error.value = `当前条件最多可生成 ${maxCount.value} 个不重复姓名`
    return
  }

  error.value = ''
  copyMessage.value = ''

  try {
    output.value = generate(total, sex, category.value)
  } catch (err) {
    error.value = err.message || '生成失败'
  }
}

function clearNames() {
  error.value = ''
  copyMessage.value = ''
  output.value = ''
}

async function copyName(name) {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(name)
    }
  } catch (err) {
    console.warn('copy failed', err)
  }

  copyMessage.value = `已复制：${name}`
  window.clearTimeout(copyTimer)
  copyTimer = window.setTimeout(function () {
    copyMessage.value = ''
  }, 1600)
}
</script>

<style>
:root {
  color: #17211e;
  background: #eef3ec;
  font-family: "Songti SC", "Noto Serif SC", "Source Han Serif SC", Georgia, serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --ink: #17211e;
  --muted: #66756f;
  --paper: #fbfaf3;
  --paper-deep: #efe6d2;
  --jade: #16746b;
  --jade-dark: #0d4f4a;
  --cinnabar: #c74a2d;
  --blue: #284d7a;
  --line: rgba(23, 33, 30, 0.15);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

button,
input,
select,
textarea {
  font: inherit;
  letter-spacing: 0;
}

button {
  cursor: pointer;
}

.shell {
  min-height: 100vh;
  padding: 32px;
  background:
    linear-gradient(90deg, rgba(23, 33, 30, 0.045) 1px, transparent 1px),
    linear-gradient(rgba(23, 33, 30, 0.035) 1px, transparent 1px),
    radial-gradient(circle at 22% 18%, rgba(22, 116, 107, 0.18), transparent 30%),
    linear-gradient(135deg, #f7f3e7 0%, #dfeeea 48%, #f1e4d5 100%);
  background-size: 34px 34px, 34px 34px, 100% 100%, 100% 100%;
}

.workspace {
  display: grid;
  grid-template-columns: minmax(280px, 390px) minmax(0, 1fr);
  gap: 26px;
  width: min(1180px, 100%);
  min-height: calc(100vh - 64px);
  margin: 0 auto;
}

.control-panel,
.result-panel {
  border: 1px solid var(--line);
  background: rgba(251, 250, 243, 0.9);
  box-shadow: 0 24px 70px rgba(35, 42, 33, 0.14);
  backdrop-filter: blur(18px);
}

.control-panel {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 28px;
  border-radius: 8px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--line);
}

.brand img {
  width: 54px;
  height: 54px;
}

.logic-note {
  display: grid;
  gap: 10px;
  padding: 14px;
  border: 1px solid rgba(22, 116, 107, 0.18);
  border-radius: 6px;
  background: rgba(217, 235, 228, 0.52);
}

.logic-note p,
.license-note {
  margin: 0;
}

.logic-note p {
  color: var(--ink);
  font-size: 14px;
  line-height: 1.7;
}

.license-note {
  color: var(--cinnabar);
  font-size: 12px;
  font-weight: 800;
}

.eyebrow {
  margin: 0 0 7px;
  color: var(--cinnabar);
  font-family: "Gill Sans", "Trebuchet MS", sans-serif;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}

h1,
h2 {
  margin: 0;
  color: var(--ink);
  font-weight: 700;
  letter-spacing: 0;
}

h1 {
  font-size: clamp(30px, 5vw, 48px);
  line-height: 1.05;
}

h2 {
  font-size: clamp(24px, 3vw, 36px);
}

.field {
  display: grid;
  gap: 10px;
}

label {
  color: var(--muted);
  font-size: 14px;
  font-weight: 700;
}

select,
input {
  min-height: 46px;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--ink);
  background: rgba(255, 255, 255, 0.68);
}

.name-slip:hover,
.actions button:hover {
  transform: translateY(-2px);
}

select,
input {
  width: 100%;
  padding: 0 14px;
}

.error {
  margin: 0;
  padding: 12px 14px;
  border-left: 4px solid var(--cinnabar);
  color: #8a2d1d;
  background: rgba(199, 74, 45, 0.1);
}

.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: auto;
}

.actions button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  border: 0;
  border-radius: 6px;
  font-weight: 800;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.primary {
  color: #fff;
  background: var(--ink);
  box-shadow: 0 14px 28px rgba(23, 33, 30, 0.22);
}

.secondary {
  color: var(--jade-dark);
  background: #d9ebe4;
}

.license-note {
  text-align: center;
}

.result-panel {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 22px;
  padding: 30px;
  border-radius: 8px;
  overflow: hidden;
}

.result-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--line);
}

.result-tools {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.result-tools button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 38px;
  padding: 0 12px;
  border: 1px solid rgba(22, 116, 107, 0.2);
  border-radius: 999px;
  color: var(--jade-dark);
  background: rgba(217, 235, 228, 0.72);
  font-size: 14px;
  font-weight: 800;
  transition: transform 0.18s ease, opacity 0.18s ease;
}

.result-tools button:hover:not(:disabled) {
  transform: translateY(-2px);
}

.result-tools button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.result-tools span {
  min-width: 66px;
  padding: 8px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--blue);
  text-align: center;
  background: rgba(255, 255, 255, 0.58);
}

.copy-toast {
  position: absolute;
  top: 92px;
  right: 30px;
  z-index: 3;
  margin: 0;
  padding: 10px 12px;
  border: 1px solid rgba(22, 116, 107, 0.2);
  border-radius: 6px;
  color: var(--jade-dark);
  background: rgba(239, 250, 245, 0.94);
  box-shadow: 0 14px 32px rgba(23, 33, 30, 0.14);
  font-size: 14px;
  font-weight: 800;
  pointer-events: none;
}

.name-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
  align-content: start;
  gap: 12px;
  min-height: 320px;
}

.name-grid-wide {
  grid-template-columns: repeat(auto-fill, minmax(186px, 1fr));
}

.name-slip {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 74px;
  padding: 0 10px;
  border: 1px solid rgba(23, 33, 30, 0.16);
  border-radius: 5px;
  color: var(--ink);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.7), rgba(239, 230, 210, 0.72)),
    var(--paper);
  box-shadow: inset 0 -4px 0 rgba(199, 74, 45, 0.12);
  font-size: 24px;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.name-slip-long {
  font-size: 18px;
}

.name-slip:hover {
  box-shadow: inset 0 -4px 0 rgba(199, 74, 45, 0.22), 0 16px 30px rgba(23, 33, 30, 0.12);
}

.empty-state {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  color: var(--muted);
}

textarea {
  width: 100%;
  min-height: 132px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--ink);
  background: rgba(255, 255, 255, 0.55);
  resize: vertical;
}

@media (max-width: 820px) {
  .shell {
    padding: 16px;
  }

  .workspace {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .control-panel,
  .result-panel {
    padding: 20px;
  }

  .result-head {
    align-items: flex-start;
    flex-direction: column;
  }

  .result-tools {
    width: 100%;
    justify-content: space-between;
  }

  .copy-toast {
    top: 96px;
    right: 20px;
    left: 20px;
    text-align: center;
  }

  .name-grid {
    grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  }

  .name-grid-wide {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .name-slip {
    font-size: 22px;
  }

  .name-slip-long {
    font-size: 16px;
  }
}
</style>
