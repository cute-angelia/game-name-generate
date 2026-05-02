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

var xianxiaXing = [
  "风", "云", "雾", "霜", "雪", "冰", "雨", "露", "霞", "虹",
  "山", "川", "溪", "泉", "谷", "崖", "林", "松", "竹", "梅",
  "星", "月", "辰", "曦", "穹", "昊", "苍", "青", "白", "蓝",
  "慕容", "东方", "纳兰", "上官", "南宫", "西门", "北冥",
  "轩辕", "独孤", "宇文", "尉迟", "公孙", "长孙", "钟离",
  "澹台", "皇甫", "诸葛", "司马", "欧阳", "夏侯", "淳于"
]

var xianxiaSingle = [
  "瑶", "璃", "琼", "琚", "瑾", "瑜", "琛", "璇", "玑", "璞",
  "烟", "云", "雾", "霭", "岚", "霏", "霖", "霓", "虹", "霞",
  "霜", "雪", "冰", "露", "溪", "泉", "池", "澜", "波", "涛",
  "星", "月", "辰", "曦", "晖", "曜", "暝", "暮", "霄", "穹",
  "清", "雅", "逸", "俊", "朗", "卓", "然", "轩", "昂", "宇",
  "灵", "慧", "敏", "睿", "智", "贤", "淑", "柔", "婉", "娴",
  "谦", "和", "安", "宁", "静", "怡", "悦", "欣", "愉", "恬",
  "寻", "觅", "追", "逐", "随", "伴", "依", "恋", "思", "念",
  "望", "观", "赏", "品", "悟", "觉", "知", "晓", "明", "察",
  "舞", "歌", "吟", "咏", "诵", "弦", "笙", "箫", "笛", "琴"
]

var xianxiaDouble = [
  "清霜", "傲雪", "凝露", "沐霞", "揽月", "摘星",
  "听风", "观云", "卧雪", "眠云", "漱石", "枕流",
  "松涛", "竹韵", "梅香", "兰馨", "菊影", "荷风",
  "采薇", "蒹葭", "白露", "伊人", "在水", "一方",
  "望舒", "观涛", "听雨", "吟风", "思远", "念遥",
  "清逸", "俊朗", "卓然", "轩昂", "灵秀", "慧黠",
  "温婉", "娴静", "谦和", "安宁", "怡然", "悦心",
  "清歌", "挽风", "曦和", "晖曜", "暝曛", "昉晗", "晞晟", "晢明"
]

var modernSingle = [
  "辰", "宇", "泽", "轩", "涵", "诺", "熙", "宸", "睿", "皓",
  "桐", "瑶", "琳", "菲", "萌", "汐", "芮", "恬", "悦", "晴",
  "屿", "川", "野", "禾", "芒", "麦", "荞", "栀", "槿", "栎",
  "砚", "辞", "叙", "昭", "珩", "璟", "琮", "玹", "琛",
  "一", "也", "予", "亦", "之", "可", "末", "白", "安",
  "西", "北", "南", "东", "山", "水", "木", "火", "土", "金"
]

var modernDouble = [
  "知夏", "见秋", "念冬", "盼春", "望舒", "观潮",
  "听风", "眠云", "漱石", "枕流", "清欢", "长乐",
  "星野", "屿川", "禾芒", "麦荞", "栀槿", "栎砚",
  "辞叙", "昭珩", "璟琮", "玹琛", "一也", "予亦",
  "安夏", "暖秋", "凉冬", "初春", "知予", "见可", 
  "念末", "盼白", "望安", "观西"
]

var jianghuAction = [
  "冲", "渡", "照", "独", "绝", "断", "漱", "寒", "凝", "拂", 
  "疏", "逐", "震", "饮", "弄", "惑", "聆", "归", "啸", "了", 
  "怀", "云", "清", "剑", "沧", "慕", "晚", "若", "傲", "南", 
  "孤", "惊", "莫", "凤", "念"
]

var jianghuNature = [
  "玄", "石", "锋", "远", "霜", "月", "云", "影", "风", "天", 
  "雪", "情", "玉", "心", "音", "燕", "之", "尘", "然", "冰", 
  "蓉", "恩", "霄", "秋", "澜", "晴", "烟", "飞", "城"
]

var jianghuSingle = [
  "风", "紫", "蓉", "誉", "峰", "竹", "冲", "渡", "照", "独", 
  "绝", "断", "剑", "影", "霜", "雪", "尘", "飞", "天", "云", 
  "秋", "月", "远", "寒", "玉", "心", "音", "燕", "冰", "恩", 
  "霄", "澜", "晴", "烟", "城", "情"
]

var jianghuDouble = [];
for (var _i = 0; _i < jianghuAction.length; _i++) {
  for (var _j = 0; _j < jianghuNature.length; _j++) {
    if (jianghuAction[_i] !== jianghuNature[_j]) {
      jianghuDouble.push(jianghuAction[_i] + jianghuNature[_j]);
    }
  }
}

var fantasyFirst = [
  "索拉尔", "艾登", "莱因哈特", "加百列", "塞伦", "赫利俄斯", "奥罗拉", "塞莉丝", "艾拉", "安洁莉卡", "露希娅", "丝塔茜", "雷吉斯", "阿尔德林", "达里安", "罗伦斯", "伊莎贝拉", "卡珊德拉", "吉安娜", "艾蕾诺尔",
  "阿比斯", "瓦勒里昂", "赛拉尔", "达米安", "卢修斯", "马拉基", "黑鸦克罗夫特", "基兰", "谢德", "阿舍尔", "拉撒路斯", "摩尔代卡伊", "尼禄", "阿兹拉尔", "雷莫斯", "阿撒谢尔", "但丁", "马尔萨斯", "泽费尔", "莉莉丝",
  "奈拉", "塔琳德拉", "伊琳德拉", "费伦", "沙拉拉", "米拉琳", "伊拉娜", "西尔万", "艾尔文", "莱恩伍德", "菲恩", "奥瑞恩", "芙罗拉", "薇尔达", "苔丝", "艾薇", "萝芮尔", "埃里希", "雷恩", "瑟雷斯",
  "乔里克", "格罗纳克", "杜尔根", "博兰", "托拉克", "奥里克", "卡里克", "戈隆", "哈尔克", "莫克", "拉格", "布鲁格", "塔克", "加尔", "多姆", "卡加斯", "雷克", "姆拉克", "格罗什", "卡恩",
  "尼德霍格", "卡扎库斯", "霍希穆特", "哈布吉尔", "沃卢斯特", "措尔恩", "韦莱赖", "奈德", "特雷格海特", "摩丽甘", "雷文", "塞蕾娜", "瑟拉芬", "尼克斯", "摩根娜", "珀耳塞福涅", "莉莉安娜", "阿斯花儿", "赫卡忒", "阿祖拉"
].map(function(name) { return name + "·" });

var fantasyLast = [
  "辉刃", "圣歌", "耀光", "晨星", "晴空", "焰心", "曦和", "月冕", "圣光", "祈愿", "银翼", "暖阳", "金盾", "圣盾", "光耀", "明辉", "圣心", "光语", "辉耀",
  "深渊", "暗王", "影魔", "魔裔", "堕光", "暗使", "夜刃", "暗勇", "阴影", "幽魂", "亡骸", "暗眼", "毁灭", "死翼", "暗狼", "腐化", "暗途", "魔主", "暗风", "夜后",
  "月纱", "叶语", "雨歌", "银谷", "烬光", "亮棘", "幽瓣", "林歌", "翠叶", "深根", "溪语", "星眸", "花颂", "苔痕", "青叶", "藤枝", "月桂", "风语", "雾影", "霜叶",
  "石息", "铁影", "风暴牙", "恐盔", "风脉", "披风", "碎颅", "血拳", "蛮骨", "战锤", "怒嚎", "锐爪", "裂地", "钢鬃", "刃拳", "断脊", "黑血", "战歌",
  "蚀骨", "魔喉", "傲颅", "贪噬", "欲焰", "怒鳞", "暴食", "妒影", "惰翼", "战影", "智影", "月魂", "天音", "夜穹", "暗巫", "冥后", "暗夜之花", "亡语", "暗魅", "暗光"
];

var categoryRules = {
  xianxia: {
    label: "仙侠",
    description: "使用专属仙气姓氏库（自然意象+古风复姓）与仙气名库（意境/气质/意象），遵循声律和谐与意境统一原则生成。",
    keywords: ["修真", "宗门", "灵气", "山海", "剑修", "仙气"],
    blacklist: []
  },
  modern: {
    label: "现代都市",
    description: "使用专属现代都市名库（潮流/质感/简约），遵循简洁易记与声律和谐原则生成。",
    keywords: ["都市", "潮流", "治愈", "清爽", "现实"],
    blacklist: []
  },
  jianghu: {
    label: "江湖武侠",
    description: "使用专属武侠名库，遵循中间字为动作/意境、末字为大自然景物的规则组合生成。",
    keywords: ["江湖", "侠客", "门派", "刀剑", "快意"],
    blacklist: []
  },
  fantasy: {
    label: "西方玄幻",
    description: "使用专属西方玄幻名库，以【音译名·称号/意象】的结构生成，融合光明、黑暗、精灵、兽人及龙族等多种族风格。",
    keywords: ["西幻", "神魔", "异世", "精灵", "兽人", "深渊"],
    blacklist: []
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
  if (category === "xianxia") {
    return getUniqueItems(xianxiaSingle.concat(xianxiaDouble))
  }
  if (category === "modern") {
    return getUniqueItems(modernSingle.concat(modernDouble))
  }
  if (category === "jianghu") {
    return getUniqueItems(jianghuSingle.concat(jianghuDouble))
  }
  if (category === "fantasy") {
    return getUniqueItems(fantasyLast)
  }

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
  var surnamePool = category === 'xianxia' ? xianxiaXing : category === 'fantasy' ? fantasyFirst : xing;
  return Math.min(getUniqueItems(surnamePool).length, getGivenNamePool(sex, category || "all").length)
}

function makeName(sex, category) {
  var surnamePool = category === 'xianxia' ? xianxiaXing : category === 'fantasy' ? fantasyFirst : xing;
  var first = getOneInNameArray(surnamePool)
  var pool = getCategoryPool(sex, category)
  var second = getOneInNameArray(pool)

  if (['xianxia', 'modern', 'jianghu', 'fantasy'].indexOf(category) !== -1) {
    var attempts = 0;
    while(attempts < 50) {
      if (first !== second && !(first.length === 1 && second.indexOf(first) !== -1)) {
        break;
      }
      first = getOneInNameArray(surnamePool);
      second = getOneInNameArray(pool);
      attempts++;
    }
  }

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
  var surnamePool = selectedCategory === 'xianxia' ? xianxiaXing : selectedCategory === 'fantasy' ? fantasyFirst : xing;
  var max = getGenerationLimit(selectedSex, selectedCategory)
  var surnames = shuffle(getUniqueItems(surnamePool))
  var givenNames = shuffle(getGivenNamePool(selectedSex, selectedCategory))

  if (num > max) {
    throw new RangeError("最多可生成 " + max + " 个不重复姓名")
  }

  if (['xianxia', 'modern', 'jianghu', 'fantasy'].indexOf(selectedCategory) !== -1) {
    var results = [];
    var usedSur = [];
    var usedGiv = [];
    var attempts = 0;
    while (results.length < num && attempts < num * 50) {
      attempts++;
      var sur = getOneInNameArray(surnames);
      var giv = getOneInNameArray(givenNames);
      
      if (usedSur.indexOf(sur) !== -1 || usedGiv.indexOf(giv) !== -1) continue;
      if (sur === giv || (sur.length === 1 && giv.indexOf(sur) !== -1)) continue;
      
      if (selectedCategory !== 'fantasy') {
        try {
          var surPinyin = pinyin(sur.slice(-1), { toneType: 'none', type: 'array' })[0];
          var givPinyin = pinyin(giv.charAt(0), { toneType: 'none', type: 'array' })[0];
          if (surPinyin && givPinyin && surPinyin === givPinyin) continue;

          var fullPinyin = pinyin(sur + giv, { toneType: 'num', type: 'array' });
          var tones = fullPinyin.map(function(t) { return Number(t.replace(/[^0-9]/g, '')) || 0 });
          var levelCount = tones.filter(function(t) { return t === 1 || t === 2; }).length;
          var obliqueCount = tones.filter(function(t) { return t === 3 || t === 4; }).length;
          if (tones.length >= 3 && (levelCount === 0 || obliqueCount === 0)) continue;
        } catch (e) {
          // Fallback if pinyin fails
        }
      }

      var fullName = sur + giv;
      if (results.indexOf(fullName) === -1) {
        usedSur.push(sur);
        usedGiv.push(giv);
        results.push(fullName);
      }
    }

    if (results.length < num) {
      for (i = 0; i < surnames.length; i++) {
        if (results.length >= num) break;
        if (usedSur.indexOf(surnames[i]) === -1 && usedGiv.indexOf(givenNames[i]) === -1) {
          usedSur.push(surnames[i]);
          usedGiv.push(givenNames[i]);
          results.push(surnames[i] + givenNames[i]);
        }
      }
    }

    return results.slice(0, num).join("\n") + "\n";
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
