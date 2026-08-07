// ================================================================
// 📌 Beginner Chinese Worksheets 资源数据
// 每条资源必须包含 topic 字段，值要跟 beginnerTopics.js 里的 slug 完全对应，
// 否则这条资源不会出现在对应的主题页面里。
//
// 新增资源：直接复制一个 { ... } 对象，改内容即可。
// 字段说明：
//   topic     —— 对应 beginnerTopics.js 里的 slug（必填，决定归到哪个主题）
//   title     —— 资源标题
//   desc      —— 简单描述（可选）
//   fileUrl   —— 文件实际路径，建议放在 public/files/beginner/对应topic/ 下面
//   password  —— 如果这份资源需要密码保护，填密码；不需要就删掉这一行或留空
// ================================================================
export const beginnerWorksheets = [
  {
    topic: "pinyin",
    title: "声母描红练习",
    desc: "b p m f 等基础声母的书写与认读练习",
    fileUrl: "/files/beginner/pinyin/consonants.pdf",
    password: "xiexie"
  },
  {
    topic: "pinyin",
    title: "四声辨音练习",
    desc: "一声到四声的听辨与标注练习",
    fileUrl: "/files/beginner/pinyin/tones.pdf",
    password: "xiexie"
  },
  {
    topic: "numbers-dates",
    title: "1-100 数字连线",
    desc: "阿拉伯数字与汉字数字的匹配练习",
    fileUrl: "/files/beginner/numbers-dates/count-match.pdf",
    password: "xiexie"
  },
  {
    topic: "greetings",
    title: "自我介绍填空",
    desc: "姓名、年龄、国籍的简单自我介绍句型练习",
    fileUrl: "/files/beginner/greetings/intro-fill.pdf",
    password: "xiexie"
  }
  // 👉 继续往下加你自己的资源，参考上面的格式
];