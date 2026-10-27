// 展示模块的产品文案与概念数据统一维护在这里；不代表已上线能力。
export const experienceCopy = {
  features: {
    kicker: 'LITTLE MOMENTS, REAL CONNECTION',
    title: '不只是桌宠，更是一个有温度的小世界。',
    description: '把日常留一点给可爱。有人陪你安静待着，也有人接住你突然想分享的那句话。',
    desktop: {
      number: '01', tag: '桌面陪伴', title: '各忙各的，也算一起。',
      description: '写作、画画，或是发一会儿呆。小小的它留在桌面一角，把独处变成有陪伴的时光。',
      window: '我的一平方米', noteTitle: '今天的小事',
      note: ['写一点喜欢的东西', '给自己留一段空白', '和小芽一起晒太阳'],
      time: '慢慢来，也很好', badge: '安静陪伴中', footnote: '不打扰，是另一种在乎。',
    },
    island: {
      number: '02', tag: '多人联机', title: '你的小岛，今天有人来访。',
      description: '让朋友的桌宠串个门。不必特意找话题，待在同一个小世界里，就已经很开心。',
      badge: '小岛上的好朋友', names: ['小芽', '桃桃', '阿眠'], invitation: '给朋友留一个位置',
    },
    chat: {
      number: '03', tag: '气泡聊天', title: '一句碎碎念，轻轻冒出来。',
      description: '把想说的话装进气泡。今天的好天气、刚发现的歌，都值得被一个朋友听见。',
      messages: ['今天的云，好像一只小兔子。', '那我们一起发会儿呆吧 ☁'],
      sender: '桃桃的碎碎念', receipt: '小芽接住了你的好心情',
    },
    mood: {
      number: '04', tag: '情绪与互动', title: '你的每次靠近，都有回应。',
      description: '轻轻点一下，看它开心地晃一晃。那些不用语言的小互动，也能让心情亮起来。',
      petName: '小芽', action: '摸摸小芽，切换心情', hint: '点点小芽，送它一个摸摸',
      keyboardHint: '也可以用 Tab 聚焦，按 Enter 或空格',
      moods: [
        { label: '自在发呆', response: '什么也不做，陪你就很好。', action: 'rest', happy: false },
        { label: '开心冒芽', response: '收到摸摸！开心得想跳一下。', action: 'hop', happy: true },
        { label: '贴贴充电', response: '晃一晃，把好心情也分给你。', action: 'sway', happy: true },
      ],
    },
  },
  cross: {
    kicker: 'SAME LITTLE WORLD, ANYWHERE',
    title: '不论在桌前，还是在路上，陪伴都不掉线。',
    description: '桌面留住相伴的小日常，手机接住朋友的新消息。想象中的跨端连接，让同一个小世界离你更近一点。',
    concept: '跨端功能规划 · 界面为概念示意',
    desktop: {
      label: '在桌前 · 把陪伴留在身边', window: 'StarIsle · 我的小世界',
      greeting: '下午好，慢慢来。', subtitle: '你专心生活，小芽负责陪伴。',
      noteTitle: '今日留白', note: '不必把每一分钟都填满。',
      time: '16:20', status: '小芽在桌面等你', visitor: '正在和你一起待着',
      footer: '桌面端', detail: '桌宠陪伴 · 好友来访 · 气泡互动',
    },
    phone: {
      label: '在路上 · 和朋友保持连接', time: '16:20', title: '岛上消息',
      subtitle: '你的朋友，都在这里', friendsLabel: '选择一位好友，查看近况和聊天',
      chatLabel: '与好友的概念聊天记录', preview: '聊天预览', draft: '把今天的小事，说给朋友听…',
      socialOnly: '手机端专注好友、状态与聊天', footer: '移动端 · 社交入口',
      detail: '不承载完整桌宠体验',
    },
    connection: '同一个小世界', connectionNote: '好友动态 · 聊天消息',
    legend: '从桌面的一声问候，到路上的一句回应。',
    friends: [
      {
        id: 'peach', name: '桃桃', variant: 'peach', initial: '桃', status: '在线 · 正在晒太阳',
        shortStatus: '正在晒太阳', mood: '今天也收集到了一点阳光。',
        messages: ['刚刚路过一家好可爱的花店！', '等你回来，讲给我听呀。'],
      },
      {
        id: 'lavender', name: '阿眠', variant: 'lavender', initial: '眠', status: '在线 · 听歌发呆中',
        shortStatus: '听歌发呆中', mood: '循环一首歌，等一个朋友。',
        messages: ['找到一首适合发呆的歌。', '给我留个位置，一起听。'],
      },
      {
        id: 'mint', name: '小禾', variant: 'mint', initial: '禾', status: '暂离 · 在路上',
        shortStatus: '在路上，晚点回来', mood: '带着一点好心情出门啦。',
        messages: ['今天的晚风一定很舒服。', '回来见，我和小芽都在。'],
      },
    ],
  },
} as const
