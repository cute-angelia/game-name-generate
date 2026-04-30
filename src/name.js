import { pinyin } from 'pinyin-pro'

var boy2 = ["煜洋", "雨泽", "越泽", "之玉", "锦程", "修杰", "烨伟", "尔曼", "立辉", "致远", "天思", "友绿", "聪健", "修洁", "平灵", "源智", "烨华", "振家", "越彬",
  "子轩", "伟宸", "晋鹏", "觅松", "海亦", "雨珍", "浩宇", "嘉熙", "志泽", "苑博", "念波", "峻熙", "俊驰", "聪展", "南松", "黎昕", "谷波", "凝海", "靖易",
  "渊思", "煜祺", "乐驹", "风华", "睿渊", "博超", "天磊", "夜白", "初晴", "瑾瑜", "鹏飞", "弘文", "伟泽", "迎松", "雨泽", "白易", "远航", "晓啸", "智宸",
  "晓博", "靖琪", "十八", "君浩", "绍辉", "天德", "半山", "一江", "皓轩", "子默", "青寒", "问筠", "旭尧", "冷之", "天宇", "正豪", "文博", "明辉", "子骞", "灵竹",
  "三德", "连虎", "十三", "天川", "一德", "严青", "擎苍", "思远", "嘉懿", "鸿煊", "晟睿", "鸿涛", "孤风", "青文", "浩然", "明杰", "若风", "广山", "若之", "浩阑", "南风", "浩轩",
  "博涛", "烨霖", "天佑", "半雪", "文轩", "明轩", "鹏煊", "沛山", "道天", "千筹", "远望", "乘风", "道之", "乘云", "天抒", "士萧", "文龙", "一鸣", "半仙", "远锋", "元正",
  "断秋", "远山", "飞扬", "一笑", "天问", "浩天", "沧海", "安康", "安平", "安然", "安晏", "安宜", "安志", "波鸿", "博明", "博雅", "博易", "博远", "才哲", "才俊", "成和",
  "承安", "承平", "承宣", "承允", "承泽", "承志", "飞虎", "飞龙", "飞羽", "涵煦", "昊苍", "昊空", "昊然", "昊天", "宏达", "宏恺", "景辉", "景明", "景山", "乐池",
  "天逸", "伟志", "文宣", "文彦", "向晨", "向阳", "星阑", "阳波", "逸仙", "逸明", "正奇", "子瑜", "玮涛", "庭霖", "弘智", "品川", "钰宸", "子尘", "润楚", "元云", "杰弘", "杰棠", "智语", "绍若", "贤权", "禹哲", "纪德", "轩军", "楠佑", "鸿华", "峻莱", "裕韬", "寒淮", "烨若", "畅孝", "雨泰", "绍若", "庆韬", "浩慕", "恩晨", "佑晨", "翰俊", "聪铭", "瑜睿", "应泰", "为城", "炫杰", "竟锋", "亦韵", "若杰", "航苏", "俊建", "玮锋", "晔苏", "桦君", "信煊", "益正", "惠坪", "炳城", "川健", "煊博", "瀚强", "亦健", "卓逸", "仲智", "旭柳", "易扬", "浩淼", "若星", "书润", "文博", "圣霖", "濡温", "生朋", "永润", "温泰", "言佑", "乐凡", "均语", "卓锦", "炜泽", "奕辰", "韵熙", "汇润", "润庭", "伟俊", "立圣", "东子", "轩宏", "哲聪", "庭苍", "亮涛", "松清", "绍校",
  "峻熙", "立诚", "弘文", "熠彤", "鸿煊", "哲瀚", "博涛", "伟泽", "煜城", "鹤轩", "昊天", "思聪", "展鹏", "笑愚", "志强", "炫明", "雪松", "思源", "智渊", "思淼", "晓啸", "天宇", "浩然", "文轩", "鹭洋", "振家", "乐驹", "晓博", "文博", "昊焱", "立果", "金鑫", "锦程", "嘉熙", "鹏飞", "子默", "思远", "浩轩", "语堂", "聪健", "炎彬", "子骞", "君浩", "博超", "昊强", "鑫磊", "晋鹏", "雨泽", "弘文", "瑾瑜",
  "郜坤", "哲羽", "意致", "瑾靖", "易琦", "光济", "玄奕", "骞尧", "清嘉", "冷睿", "永丰", "夭锦", "辰哲", "承颜", "习凛", "堇文", "鹏云", "华茂", "永以", "澎湃", "康伯", "玉韬", "云霆", "雨伯", "友健", "维峰", "沺誉", "安陵", "君皓", "志勇", "茂材", "运杰", "苑博", "佳炎", "鸿月", "加答", "涛卓", "康顺", "凯定", "城可",
  "世砚", "博良", "俊宇", "睿书", "泓佳", "书鸣", "辉鑫", "语智", "艺智", "思涵", "呈岚", "天骐", "翰睿", "哲涛", "凯霆", "君皓", "言陌", "浩志", "勇笠", "玮翔", "志宇", "雄浚", "祖弘", "宏颢", "雨辰", "诗颢"]

var xing = ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈", "褚", "卫", "蒋",
  "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
  "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚", "范", "彭",
  "郎", "鲁", "韦", "昌", "马", "苗", "凤", "花", "方", "任", "袁", "柳", "鲍", "史", "唐", "费", "薛",
  "雷", "贺", "倪", "汤", "滕", "殷", "罗", "毕", "郝", "安", "常", "傅", "卞", "齐", "元", "顾", "孟",
  "平", "黄", "穆", "萧", "尹", "姚", "邵", "湛", "汪", "祁", "毛", "狄", "米", "伏", "成", "戴", "谈",
  "宋", "茅", "庞", "熊", "纪", "舒", "屈", "项", "祝", "董", "梁", "杜", "阮", "蓝", "闵", "季", "贾",
  "路", "娄", "江", "童", "颜", "郭", "梅", "盛", "林", "钟", "徐", "邱", "骆", "高", "夏", "蔡", "田",
  "樊", "胡", "凌", "霍", "虞", "万", "支", "柯", "管", "卢", "莫", "柯", "房", "裘", "缪", "解", "应",
  "宗", "丁", "宣", "邓", "单", "杭", "洪", "包", "诸", "左", "石", "崔", "吉", "龚", "程", "嵇", "邢",
  "裴", "陆", "荣", "翁", "荀", "于", "惠", "甄", "曲", "封", "储", "仲", "伊", "宁", "仇", "甘", "武",
  "符", "刘", "景", "詹", "龙", "叶", "幸", "司", "黎", "溥", "印", "怀", "蒲", "邰", "从", "索", "赖",
  "卓", "屠", "池", "乔", "胥", "闻", "莘", "翟", "谭", "贡", "劳", "逄", "姬", "申", "扶", "堵",
  "冉", "宰", "雍", "桑", "寿", "通", "燕", "浦", "尚", "农", "温", "别", "庄", "晏", "柴", "瞿", "阎",
  "连", "习", "容", "向", "古", "易", "廖", "庾", "终", "步", "都", "耿", "满", "弘", "匡", "国", "文",
  "寇", "广", "禄", "阙", "东", "欧", "利", "师", "巩", "聂", "关", "荆", "红", "游", "竺", "司马", "上官", "欧阳", "夏侯",
  "诸葛", "东方", "赫连", "皇甫", "尉迟", "公羊", "澹台", "公冶", "宗政", "濮阳", "淳于", "单于",
  "太叔", "申屠", "公孙", "仲孙", "轩辕", "令狐", "宇文", "长孙", "慕容", "司徒", "司空", "拓拔"]

var girl2 = ["紫萱",
  "紫霜", "紫菱", "紫蓝", "紫翠", "紫安", "芷容", "芷巧", "芷卉", "之桃", "元霜", "语雪", "语蓉", "语琴", "语芙", "语蝶", "雨梅", "雨莲", "雨兰", "又菡",
  "映萱", "映安", "忆雪", "雅彤", "雪瑶", "雪卉", "晓夏", "向梦", "香萱", "香岚", "惜雪", "思菱", "水瑶", "诗桃", "山菡", "若菱", "青曼", "千柔", "绮梅", "凝雁", "凝安",
  "妙之", "凌波", "寄琴", "涵易", "涵菱", "含烟", "曼冬", "灵珊", "映菡", "易真", "小萱", "怜南", "书瑶", "慕晴", "半烟", "翠桃", "向真", "晓瑶", "香菱", "凡霜", "晓霜",
  "芷蝶", "之云", "寄翠", "涵菡", "念薇", "灵凡", "冰夏", "绮晴", "碧琴", "以寒",
  "梦绾", "禾霓", "落柔", "恬栖", "以蓝", "星楚", "晚棠", "乐薇", "云毓", "静昀", "洛一", "馨雅", "芊昔", "沐颜", "清墨", "意羡", "禾凝", "黎思", "锦惜", "北茉", "清筱", "青玥", "可星", "芝恬", "昕甜", "禾婉", "慕唯", "唯兮", "歆一", "佳念", "晚柠", "初恩", "乐晗", "佳觅", "初语", "苏郁", "知宛", "意暄", "安诺", "可夏", "予希", "木冉", "优游", "伊依", "倾清", "心歆", "颖恩", "楚瑶", "如一", "沐心",
  "子沛", "婷秀", "芳凝", "洛颜", "思璐", "郡一", "向妙", "想蓉", "待臻", "姝美", "蓉柳", "溪颜", "璞诗", "知韦", "之寒", "蓉珊", "尔毓", "诗睿", "诗钰", "念汐", "恬懿", "和佩", "芒可", "靖柳", "欣碧", "婧媛", "芸霞", "子茗", "梦琳", "琳姿", "寄影", "若嫣", "艺珂", "素琳", "淑云", "茜涵", "莹云", "清媛", "思怡", "待晚", "绮晴", "夏婷", "熙瑾", "玉珍", "语彤", "聪怡", "善蕊", "菀柠", "颖菲", "君雨", "柳如", "欣静", "怡岚", "芳睿", "语淑", "慧偲", "半槐", "娥菲", "余芸", "婉吟", "媚鸿", "听薇", "恬懿", "琳娜", "思妤", "双芸", "梓欣", "乐巧", "宁敏", "逸恬", "婷颜", "羽莹", "曼溪", "思璎", "梦淑", "映嘉", "天亦", "映凝", "曦薇", "泱祺", "艳蕊", "壁煊", "心怡", "茉涵", "熙柔", "玥芙", "倚真", "雅惠", "千羽", "思雅",
  "希柠", "辰柚", "亦橙", "伊桃", "南柚", "蕉礼", "橙美", "宛桔", "皙恬", "锦芊", "栀萌", "亦攸", "皙宁", "舒淳", "以葵", "伊湉", "司纯", "稚京", "奈笙", "西棠", "今安", "晏乔", "舒然", "慕倾", "玖鸢", "思莞", "紫茉", "珑琪", "冉峤", "凝初", "南嫣", "知潼", "奕北", "桑宁", "禾茉", "昕言", "念一", "希雅", "伊诺", "婉柠", "岁穗", "苏酥", "诗施", "声笙", "芊澄", "梨珂", "晞悦", "芮柒", "南星", "苡沫", "鹿绫", "楚奈", "芊凛", "婉宁", "安禾", "舒言", "芮瑶", "艺涵", "恬雨", "清颜", "乔仪", "幼沅", "简心", "宁希", "婧恬", "黎念",
  "灵淼", "含卿", "兮虞", "缘珞", "依莹", "玥冰", "谷梓", "南芊", "筱茵", "甜亦", "佳知", "惜珞", "惜灵", "傲晴", "若琼", "晴岚", "诗淇", "语兰", "傲龄", "知薇", "晓汐", "萌知", "含蓓", "安冉", "梓紫", "璇知", "冰晴", "汐梓", "静若", "诗云", "紫知", "紫丝", "觅甜", "奕芊", "倩知", "笑珞", "万姝", "初瑶", "妍依", "碧希", "晓蓓", "冉娇", "笑龄", "以兮", "兮筱", "雨甯", "妤华", "冰蓉", "沁蓉", "万奕", "虞兰", "静笛", "媱雅", "黛绿", "水静", "水妍", "语蕊", "欣蓉", "妙馨", "龄蓉", "紫莎", "婧琳", "甜晴", "静芙", "恬娣", "晓倩", "熙萱", "冉清", "歆瑜", "黛颖", "婧芷", "姗梵", "夏蓉", "菲悦", "依龄", "寻双"
]

var boy1 = ["宇", "翔", "飞", "雄", "帅", "涛", "强", "斌", "昊", "伟", "泽", "峰", "博", "德", "荣", "辉", "俊", "志", "勇", "琪", "杰", "洋", "瑞", "奇", "鸿", "浩", "宏", "华", "东", "光", "辰", "丰", "栋", "昌", "朋", "坚", "智", "聪", "亮", "正", "明", "诚", "永", "联", "瑜", "雷", "威", "敏", "乐", "信", "柏", "佳", "晋", "育", "立", "祥", "学", "豪", "仁", "友"]

var girl1 = ["美", "娜", "秀", "雯", "蕾", "洁", "思", "慧", "心", "涵", "静", "英", "晓", "琳", "珊", "莉", "佳", "婷", "璐", "晨", "安", "包", "贝", "冰", "蓓", "珂", "柏", "琳", "菲", "怡", "娜", "心", "洁", "梓", "瑶", "珊", "艾", "诗", "璐", "倩", "苏", "雯", "婧", "秀", "慧", "彤", "媛", "美", "晶", "琪", "云", "萍", "蕾", "莉", "莹", "薇", "楠", "楚", "佳", "爽", "卓", "格", "斌", "羽", "茜", "婷", "琦", "绮", "燕", "张", "青", "红", "翠", "帆", "离", "莲", "宜", "园", "冬", "霜"]

var categoryRules = {
  xianxia: {
    label: "仙侠",
    description: "从基础大词库中过滤明显现代、年代感、生活化的常用字，保留更适合修真、宗门和山海意象的姓名。",
    keywords: ["修真", "宗门", "灵气", "山海", "剑修"],
    blacklist: ["国", "建", "军", "伟", "强", "斌", "勇", "刚", "涛", "栋", "昌", "朋", "宏", "达", "康", "平", "志", "华", "东", "光", "明", "辉", "忠", "民", "胜", "利", "富", "贵", "财", "宝", "家", "校", "城", "坪"]
  },
  modern: {
    label: "现代都市",
    description: "从基础大词库中过滤强江湖、兵器、玄幻和古风色彩的字，保留更接近日常、职场和校园语感的姓名。",
    keywords: ["都市", "职场", "校园", "清爽", "现实"],
    blacklist: ["客", "刀", "剑", "侠", "魔", "妖", "鬼", "魂", "魄", "玄", "烬", "阙", "曜", "狱", "煞", "孤", "冷", "断", "血", "苍", "擎", "霆", "啸", "狂", "虎", "龙"]
  },
  jianghu: {
    label: "江湖武侠",
    description: "从基础大词库中过滤现代年代感、商务感和软萌网感的字，保留更适合门派、侠客和行走江湖的姓名。",
    keywords: ["江湖", "侠客", "门派", "刀剑", "快意"],
    blacklist: ["国", "建", "军", "伟", "强", "斌", "勇", "刚", "宏", "达", "康", "平", "洋", "鑫", "校", "坪", "甜", "萌", "柠", "橙", "梓", "涵", "诺", "恬", "怡"]
  },
  fantasy: {
    label: "玄幻",
    description: "从基础大词库中过滤过于现实、年代感和日常生活化的字，保留更适合异世、神魔和力量体系的姓名。",
    keywords: ["玄幻", "神魔", "异世", "星海", "血脉"],
    blacklist: ["国", "建", "军", "伟", "强", "斌", "刚", "宏", "达", "康", "平", "华", "东", "光", "民", "富", "贵", "财", "宝", "家", "校", "坪", "甜", "萌", "柠", "橙"]
  }
}

var toneRules = {
  givenNameLength: 2,
  allowedPatterns: ["level-oblique", "oblique-level"],
  levelTones: [1, 2],
  obliqueTones: [3, 4],
  description: "双字名必须一二声搭配三四声，或三四声搭配一二声；姓氏不参与声调判断。"
}

var categoryOptions = [
  { value: "all", label: "全部分类" },
  { value: "xianxia", label: categoryRules.xianxia.label },
  { value: "modern", label: categoryRules.modern.label },
  { value: "jianghu", label: categoryRules.jianghu.label },
  { value: "fantasy", label: categoryRules.fantasy.label }
]

/*
男双名	1086240	优先使用 BOY
女双名	2015248
男单名	57536   BOY
女单名	47616
姓+男单+女单	5523456	不够了再用这些 BOY
姓+女单+男单	5523456
姓+女单+女单	4571136
姓+男单+男单	6674176 BOY
*/

function getOneInNameArray(arrays) {
  var index = Math.floor((Math.random() * arrays.length))
  return arrays[index]
}

function getUniqueItems(items) {
  return Array.from(new Set(items))
}

function shuffle(items) {
  var copied = items.slice()
  var i = copied.length - 1

  for (; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var current = copied[i]
    copied[i] = copied[j]
    copied[j] = current
  }

  return copied
}

function getNameCategories() {
  return categoryOptions.map(function (category) {
    var detail = categoryRules[category.value]

    if (!detail) {
      return category
    }

    return {
      value: category.value,
      label: category.label,
      description: detail.description,
      keywords: detail.keywords.slice(),
      blacklist: detail.blacklist.slice()
    }
  })
}

function getToneGroup(char) {
  var value = pinyin(char, { toneType: 'num', type: 'array' })[0] || ''
  var tone = Number(value.replace(/^\D+/, ''))

  if (tone == 1 || tone == 2) {
    return "level"
  }

  if (tone == 3 || tone == 4) {
    return "oblique"
  }

  return ""
}

function getTonePattern(name) {
  if (!name || name.length != 2) {
    return "single"
  }

  var first = getToneGroup(name.charAt(0))
  var second = getToneGroup(name.charAt(1))

  if (!first || !second) {
    return "unknown"
  }

  if (first == "level" && second == "oblique") {
    return "level-oblique"
  }

  if (first == "oblique" && second == "level") {
    return "oblique-level"
  }

  return "same-group"
}

function hasBlacklistedChar(name, category) {
  var rule = categoryRules[category]

  if (!rule) {
    return false
  }

  return rule.blacklist.some(function (char) {
    return name.indexOf(char) != -1
  })
}

function isToneMatched(name) {
  var pattern = getTonePattern(name)
  return pattern == "single" || toneRules.allowedPatterns.indexOf(pattern) != -1
}

function getBasePool(sex) {
  if (sex == "boy") {
    return boy2.concat(boy1)
  }

  return girl2.concat(girl1)
}

function getCategoryPool(sex, category) {
  var selected = []

  selected = getBasePool(sex).filter(function (name) {
    return !hasBlacklistedChar(name, category) && isToneMatched(name)
  })

  return getUniqueItems(selected)
}

function getGivenNamePool(sex, category) {
  if (sex == "all") {
    return getUniqueItems(getCategoryPool("boy", category).concat(getCategoryPool("girl", category)))
  }

  return getCategoryPool(sex, category)
}

function getGenerationLimit(sex, category) {
  return Math.min(getUniqueItems(xing).length, getGivenNamePool(sex, category || "all").length)
}

function makeName(sex, category) {
  var first = getOneInNameArray(xing)
  var pool = getCategoryPool(sex, category)
  var second = getOneInNameArray(pool)

  return first + second
}

function makeBoy(category) {
  return makeName("boy", category)
}

function makeGirl(category) {
  return makeName("girl", category)
}

/*
保留原始词库，后续如果需要恢复“通用随机”可以继续使用。
function makeGirl() {
  var first = getOneInNameArray(xing)
  var second = ""

  // 八种组合
  var choice = Math.random() < 0.7 ? 1 : 2
  switch (choice) {
    case 1:
      second = getOneInNameArray(girl2)
      break;
    case 2:
      second = getOneInNameArray(girl1)
      break;
  }
  return first + second
}
*/

function generate(num, sex, category) {
  var i = 0;
  var str = "";
  var selectedCategory = category || "all"
  var selectedSex = sex || "all"
  var max = getGenerationLimit(selectedSex, selectedCategory)
  var surnames = shuffle(getUniqueItems(xing))
  var givenNames = shuffle(getGivenNamePool(selectedSex, selectedCategory))

  if (num > max) {
    throw new RangeError("最多可生成 " + max + " 个不重复姓名")
  }

  for (; i < num; i++) {
    str = str + surnames[i] + givenNames[i] + "\n";
  }

  return str
}

function getNameDataset() {
  var categories = {}
  var categoryKey

  for (categoryKey in categoryRules) {
    categories[categoryKey] = {
      label: categoryRules[categoryKey].label,
      description: categoryRules[categoryKey].description,
      keywords: categoryRules[categoryKey].keywords.slice(),
      blacklist: categoryRules[categoryKey].blacklist.slice(),
      availableCounts: {
        boy: getCategoryPool("boy", categoryKey).length,
        girl: getCategoryPool("girl", categoryKey).length,
        all: getGivenNamePool("all", categoryKey).length
      },
      samplePools: {
        boy: getCategoryPool("boy", categoryKey).slice(0, 80),
        girl: getCategoryPool("girl", categoryKey).slice(0, 80)
      }
    }
  }

  return {
    version: "2.0.0",
    license: "Commercial use requires written authorization from the copyright holder.",
    endpoints: {
      data: "/api/name-data.json",
      openapi: "/api/openapi.json"
    },
    categories: categories,
    toneRules: toneRules
  }
}

export { getGenerationLimit, getNameCategories, getNameDataset, getTonePattern }
export default generate
