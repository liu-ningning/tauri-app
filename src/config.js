export const CONFIG = {
  anchorsRanking: [
    {
      sort: 1,
      num: 7998,
      name: "Mokeee92",
      room_id: 0,
      fans: [
        {
          sort: 1,
        },
        {
          sort: 1,
        },
        {
          sort: 1,
        },
      ],
      type: "anchor",
      jumpUrl: null,
    },
    {
      sort: 2,
      num: 7998,
      name: "猫仔",
      room_id: 123,
      fans: [
        {
          sort: 1,
        },
        {
          sort: 1,
        },
        {
          sort: 1,
        },
      ],
      type: "anchor",
      jumpUrl: null,
    },
    {
      sort: 3,
      num: 7998,
      name: "三十三十",
      room_id: 0,
      fans: [
        {
          sort: 1,
        },
        {
          sort: 1,
        },
        {
          sort: 1,
        },
      ],
      type: "anchor",
      jumpUrl: null,
    },
    {
      sort: 4,
      num: 5150,
      name: "Mokeee95",
      room_id: 456,
      fans: [
        {
          sort: 1,
        },
        {
          sort: 2,
        },
        {
          sort: 1,
        },
      ],
      type: "anchor",
      jumpUrl: null,
    },
    {
      sort: 5,
      num: 1000,
      name: "迪拜小开",
      room_id: 0,
      fans: [
        {
          sort: 1,
        },
        {
          sort: 1,
        },
        {
          sort: 1,
        },
      ],
      type: "anchor",
      jumpUrl: null,
    },
    {
      sort: 6,
      num: 800,
      name: "芒果先生",
      room_id: 0,
      fans: [
        {
          sort: 1,
        },
        {
          sort: 1,
        },
        {
          sort: 1,
        },
      ],
      type: "anchor",
      jumpUrl: null,
    },
    {
      sort: 7,
      num: 800,
      name: "IOOOOIO4O",
      room_id: 0,
      fans: [
        {
          sort: 1,
        },
        {
          sort: 1,
        },
        {
          sort: 1,
        },
      ],
      type: "anchor",
      jumpUrl: null,
    },
    {
      sort: 8,
      num: 767,
      name: "王同学阿",
      room_id: 0,
      fans: [
        {
          sort: 1,
        },
        {
          sort: 1,
        },
        {
          sort: 3,
        },
      ],
      type: "anchor",
      jumpUrl: null,
    },
    {
      sort: 9,
      num: 200,
      name: "一个小乌龟",
      room_id: 0,
      fans: [
        {
          sort: 1,
        },
        {
          sort: 1,
        },
        {
          sort: 1,
        },
      ],
      type: "anchor",
      jumpUrl: null,
    },
    {
      sort: 10,
      num: 200,
      name: "Mokeee91",
      room_id: 0,
      fans: [
        {
          sort: 1,
        },
        {
          sort: 1,
        },
        {
          sort: 1,
        },
      ],
      type: "anchor",
      jumpUrl: null,
    },
  ],
  fansRanking: [
  ],
  extra: {
    name: '小可爱',
  },
  aId: "Pe5aGj",
  tmplInfo: {
    id: 4,
    theme: '夏日大作战',
    startTime: 1657598400,
    endTime: 1658073599,
    status: 1,
    rankingEndTxt: '激情夏日 挑战自我',
    shareSwitch: 'show',
    giftDoublySwitch: 'on',
    giftGoods: [
      {
        name: '巨蟹星',
      },
      {
        name: '巨蟹星缘',
      }
    ],
    giftTxtTips: '赠送或收到活动礼物，对应增加的助力值和作战值翻倍',
    giftTxtColor: '#008CF7',
    giftTxtSmall: '0.9',
    giftNameColor: '#3A3A3A',
    giftBg: '#FFFFFF',
    giftIconPath: './imgs/gift.png',
    tabLeft: '主播榜',
    tabRight: '贡献榜',
    tabEndLeft: '主播榜TOP 10',
    tabEndRight: '贡献榜TOP 10',
    tabTxtLeft: '作战值',
    tabTxtRight: '助力值',
    tabColor: '#008CF7',
    tabEndColor: '#008CF7',
    joinAnchors: 'all',
    rankingType: 'personal',
    mainBg: '#FBD992',
    bottomBg: '#008CF7',
    diffBg: '#FDE0BE',
    diffColor: '#EC7F5A',
    mainPath: './imgs/banner.png',
    rankingIconPath: './imgs/rule.png',
    rulesIconPath: './imgs/ranking.png',
    emptyIconPath: './imgs/empty.png',
    live: './imgs/live.png',
  },
}

export const formatNum = num => {
  num = Number(num) || 0
  if (num > 99999 && num <= 9999999) {
    num = Math.floor((num / 10000) * 10) / 10
    // 若num是整数，拼接一个小数点
    if (num % 1 === 0) num = `${num}.0`
    num = `${num}万`
  }
  if (num > 9999999) num = `${Math.floor(num / 10000)}万`
  return num
}

// !返回两个时间差值
export const getTimeDiff = diff => {
  if (!diff || diff <= 0) return ''

  const d = parseInt(diff / (24 * 60 * 60))
  diff -= (d * 24 * 60 * 60)
  const h = parseInt(diff / (60 * 60))
  diff -= (h * 60 * 60)
  const m = parseInt(diff / 60)
  diff -= (m * 60)
  let s = parseInt(diff)
  if (s < 10) s = `0${s}`

  return `榜单结束倒计时：${d}天${h}时${m}分钟${s}秒`
}