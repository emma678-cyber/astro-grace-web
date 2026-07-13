import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    homepage: collection({
      label: '主页排版管理',
      slugField: 'title',
      path: 'src/content/homepage/*',
      format: { data: 'json' },
      schema: {
        title: fields.string({ label: '页面标题（比如：我的夏日主页）' }),
        
        // 🌟 这就是你的“积木盒”，里面的板块可以上下拖拽！
        blocks: fields.array(
          fields.object({
            blockType: fields.select({
              label: '选择区块类型',
              options: [
                { label: '🌊 夏日风迎宾大屏 (Hero)', value: 'hero' },
                { label: '🎮 拼音/声调游戏区 (Games)', value: 'games' },
                { label: '👩‍🏫 关于 Grace 老师 (About)', value: 'about' }
              ],
              defaultValue: 'hero'
            }),
            title: fields.string({ label: '该区块的标题' }),
            content: fields.text({ label: '该区块的文字内容', multiline: true }),
          }),
          {
            label: '网页模块排版（在此处拖拽、排序）',
            itemLabel: props => `${props.fields.title.value || '未命名区块'} [${props.fields.blockType.value}]`
          }
        )
      },
    }),
  },
});