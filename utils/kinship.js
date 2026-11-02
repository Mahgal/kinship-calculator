const dict = {
  'father': { term: '爸爸', r_m: '儿子', r_f: '女儿' },
  'mother': { term: '妈妈', r_m: '儿子', r_f: '女儿' },
  'elderBrother': { term: '哥哥', r_m: '弟弟', r_f: '妹妹' },
  'youngerBrother': { term: '弟弟', r_m: '哥哥', r_f: '姐姐' },
  'elderSister': { term: '姐姐', r_m: '弟弟', r_f: '妹妹' },
  'youngerSister': { term: '妹妹', r_m: '哥哥', r_f: '姐姐' },
  'husband': { term: '老公', r_m: '-', r_f: '老婆' },
  'wife': { term: '老婆', r_m: '老公', r_f: '-' },
  'son': { term: '儿子', r_m: '爸爸', r_f: '妈妈' },
  'daughter': { term: '女儿', r_m: '爸爸', r_f: '妈妈' },

  // 长辈 (父系)
  'father,father': { term: '祖父/爷爷', r_m: '孙子', r_f: '孙女' },
  'father,mother': { term: '祖母/奶奶', r_m: '孙子', r_f: '孙女' },
  'father,elderBrother': { term: '伯伯/大伯', r_m: '侄子', r_f: '侄女' },
  'father,youngerBrother': { term: '叔叔', r_m: '侄子', r_f: '侄女' },
  'father,elderSister': { term: '姑姑/姑妈', r_m: '侄子', r_f: '侄女' },
  'father,youngerSister': { term: '姑姑/姑妈', r_m: '侄子', r_f: '侄女' },
  'father,father,father': { term: '曾祖父/太爷爷', r_m: '曾孙', r_f: '曾孙女' },
  'father,father,mother': { term: '曾祖母/太奶奶', r_m: '曾孙', r_f: '曾孙女' },

  // 长辈 (母系)
  'mother,father': { term: '外祖父/外公', r_m: '外孙', r_f: '外孙女' },
  'mother,mother': { term: '外祖母/外婆', r_m: '外孙', r_f: '外孙女' },
  'mother,elderBrother': { term: '舅舅', r_m: '外甥', r_f: '外甥女' },
  'mother,youngerBrother': { term: '舅舅', r_m: '外甥', r_f: '外甥女' },
  'mother,elderSister': { term: '姨妈/大姨', r_m: '外甥', r_f: '外甥女' },
  'mother,youngerSister': { term: '姨妈/小姨', r_m: '外甥', r_f: '外甥女' },
  'mother,mother,father': { term: '外曾祖父/太外公', r_m: '外曾孙', r_f: '外曾孙女' },
  'mother,mother,mother': { term: '外曾祖母/太外婆', r_m: '外曾孙', r_f: '外曾孙女' },

  // 平辈 (堂)
  'father,elderBrother,son': { term: '堂哥/堂弟', r_m: '堂弟/堂哥', r_f: '堂妹/堂姐' },
  'father,elderBrother,daughter': { term: '堂姐/堂妹', r_m: '堂弟/堂哥', r_f: '堂妹/堂姐' },
  'father,youngerBrother,son': { term: '堂哥/堂弟', r_m: '堂弟/堂哥', r_f: '堂妹/堂姐' },
  'father,youngerBrother,daughter': { term: '堂姐/堂妹', r_m: '堂弟/堂哥', r_f: '堂妹/堂姐' },

  // 平辈 (表)
  'father,elderSister,son': { term: '表哥/表弟', r_m: '表弟/表哥', r_f: '表妹/表姐' },
  'father,elderSister,daughter': { term: '表姐/表妹', r_m: '表弟/表哥', r_f: '表妹/表姐' },
  'father,youngerSister,son': { term: '表哥/表弟', r_m: '表弟/表哥', r_f: '表妹/表姐' },
  'father,youngerSister,daughter': { term: '表姐/表妹', r_m: '表弟/表哥', r_f: '表妹/表姐' },

  'mother,elderBrother,son': { term: '表哥/表弟', r_m: '表弟/表哥', r_f: '表妹/表姐' },
  'mother,elderBrother,daughter': { term: '表姐/表妹', r_m: '表弟/表哥', r_f: '表妹/表姐' },
  'mother,youngerBrother,son': { term: '表哥/表弟', r_m: '表弟/表哥', r_f: '表妹/表姐' },
  'mother,youngerBrother,daughter': { term: '表姐/表妹', r_m: '表弟/表哥', r_f: '表妹/表姐' },

  'mother,elderSister,son': { term: '表哥/表弟', r_m: '表弟/表哥', r_f: '表妹/表姐' },
  'mother,elderSister,daughter': { term: '表姐/表妹', r_m: '表弟/表哥', r_f: '表妹/表姐' },
  'mother,youngerSister,son': { term: '表哥/表弟', r_m: '表弟/表哥', r_f: '表妹/表姐' },
  'mother,youngerSister,daughter': { term: '表姐/表妹', r_m: '表弟/表哥', r_f: '表妹/表姐' },

  // 姻亲 (长辈)
  'husband,father': { term: '公公', r_m: '-', r_f: '儿媳' },
  'husband,mother': { term: '婆婆', r_m: '-', r_f: '儿媳' },
  'wife,father': { term: '岳父', r_m: '女婿', r_f: '-' },
  'wife,mother': { term: '岳母', r_m: '女婿', r_f: '-' },

  // 姻亲 (平辈)
  'elderBrother,wife': { term: '嫂子', r_m: '小叔子', r_f: '小姑子' },
  'youngerBrother,wife': { term: '弟媳', r_m: '大伯子', r_f: '大姑子' },
  'elderSister,husband': { term: '姐夫', r_m: '内弟/小舅子', r_f: '小姨子' },
  'youngerSister,husband': { term: '妹夫', r_m: '大舅子', r_f: '大姨子' },

  'husband,elderBrother': { term: '大伯子', r_m: '-', r_f: '弟媳' },
  'husband,youngerBrother': { term: '小叔子', r_m: '-', r_f: '嫂子' },
  'husband,elderSister': { term: '大姑子', r_m: '-', r_f: '弟媳' },
  'husband,youngerSister': { term: '小姑子', r_m: '-', r_f: '嫂子' },

  'wife,elderBrother': { term: '大舅子', r_m: '妹夫', r_f: '-' },
  'wife,youngerBrother': { term: '小舅子', r_m: '姐夫', r_f: '-' },
  'wife,elderSister': { term: '大姨子', r_m: '妹夫', r_f: '-' },
  'wife,youngerSister': { term: '小姨子', r_m: '姐夫', r_f: '-' },

  // 晚辈
  'son,wife': { term: '儿媳', r_m: '公公', r_f: '婆婆' },
  'daughter,husband': { term: '女婿', r_m: '岳父', r_f: '岳母' },
  'elderBrother,son': { term: '侄子', r_m: '叔叔', r_f: '姑姑' },
  'elderBrother,daughter': { term: '侄女', r_m: '叔叔', r_f: '姑姑' },
  'youngerBrother,son': { term: '侄子', r_m: '伯伯', r_f: '姑姑' },
  'youngerBrother,daughter': { term: '侄女', r_m: '伯伯', r_f: '姑姑' },
  'elderSister,son': { term: '外甥', r_m: '舅舅', r_f: '姨妈' },
  'elderSister,daughter': { term: '外甥女', r_m: '舅舅', r_f: '姨妈' },
  'youngerSister,son': { term: '外甥', r_m: '舅舅', r_f: '姨妈' },
  'youngerSister,daughter': { term: '外甥女', r_m: '舅舅', r_f: '姨妈' },

  'son,son': { term: '孙子', r_m: '爷爷', r_f: '奶奶' },
  'son,daughter': { term: '孙女', r_m: '爷爷', r_f: '奶奶' },
  'daughter,son': { term: '外孙', r_m: '外公', r_f: '外婆' },
  'daughter,daughter': { term: '外孙女', r_m: '外公', r_f: '外婆' },

  // 3-4代
  'son,son,son': { term: '曾孙', r_m: '曾祖父', r_f: '曾祖母' },
  'son,son,daughter': { term: '曾孙女', r_m: '曾祖父', r_f: '曾祖母' },
  'daughter,daughter,son': { term: '外曾孙', r_m: '外曾祖父', r_f: '外曾祖母' },
  'daughter,daughter,daughter': { term: '外曾孙女', r_m: '外曾祖父', r_f: '外曾祖母' },

  // 长辈配偶
  'father,elderBrother,wife': { term: '伯母', r_m: '侄子', r_f: '侄女' },
  'father,youngerBrother,wife': { term: '婶婶', r_m: '侄子', r_f: '侄女' },
  'father,elderSister,husband': { term: '姑父', r_m: '内侄', r_f: '内侄女' },
  'father,youngerSister,husband': { term: '姑父', r_m: '内侄', r_f: '内侄女' },
  'mother,elderBrother,wife': { term: '舅妈', r_m: '外甥', r_f: '外甥女' },
  'mother,youngerBrother,wife': { term: '舅妈', r_m: '外甥', r_f: '外甥女' },
  'mother,elderSister,husband': { term: '姨父', r_m: '外甥', r_f: '外甥女' },
  'mother,youngerSister,husband': { term: '姨父', r_m: '外甥', r_f: '外甥女' },
};

const nodeNames = {
  'father': '爸爸',
  'mother': '妈妈',
  'elderBrother': '哥哥',
  'youngerBrother': '弟弟',
  'elderSister': '姐姐',
  'youngerSister': '妹妹',
  'husband': '老公',
  'wife': '老婆',
  'son': '儿子',
  'daughter': '女儿'
};

function describeChain(chain) {
  return chain.map(node => nodeNames[node]).join('的');
}

/**
 * @param {string[]} chain - Array of relationship node types.
 * @param {string} gender - 'm' or 'f'
 */
function resolveKinship(chain, gender) {
  if (!chain || chain.length === 0) {
    return null;
  }

  const key = chain.join(',');
  const result = dict[key];

  if (result) {
    return {
      term: result.term,
      desc: describeChain(chain),
      reverseTerm: gender === 'm' ? result.r_m : result.r_f
    };
  }

  // Fallback for missing/unresolved chains
  return {
    term: '这个关系比较远/少见，暂未收录',
    desc: describeChain(chain),
    reverseTerm: '-'
  };
}

function getCommonRelatives() {
  return [
    {
      group: '直系',
      items: [
        { chain: ['father', 'father'], name: '祖父/爷爷' },
        { chain: ['father', 'mother'], name: '祖母/奶奶' },
        { chain: ['mother', 'father'], name: '外祖父/外公' },
        { chain: ['mother', 'mother'], name: '外祖母/外婆' }
      ]
    },
    {
      group: '父系旁系',
      items: [
        { chain: ['father', 'elderBrother'], name: '伯伯' },
        { chain: ['father', 'youngerBrother'], name: '叔叔' },
        { chain: ['father', 'elderSister'], name: '姑姑' },
        { chain: ['father', 'elderBrother', 'son'], name: '堂哥/堂弟' }
      ]
    },
    {
      group: '母系旁系',
      items: [
        { chain: ['mother', 'elderBrother'], name: '舅舅' },
        { chain: ['mother', 'elderSister'], name: '姨妈' },
        { chain: ['mother', 'elderBrother', 'daughter'], name: '表姐/表妹' }
      ]
    },
    {
      group: '姻亲',
      items: [
        { chain: ['husband', 'father'], name: '公公' },
        { chain: ['husband', 'mother'], name: '婆婆' },
        { chain: ['wife', 'father'], name: '岳父' },
        { chain: ['wife', 'mother'], name: '岳母' },
        { chain: ['elderBrother', 'wife'], name: '嫂子' },
        { chain: ['son', 'wife'], name: '儿媳' },
        { chain: ['daughter', 'husband'], name: '女婿' }
      ]
    },
    {
      group: '晚辈',
      items: [
        { chain: ['elderBrother', 'son'], name: '侄子' },
        { chain: ['elderSister', 'son'], name: '外甥' },
        { chain: ['son', 'son'], name: '孙子' },
        { chain: ['daughter', 'daughter'], name: '外孙女' }
      ]
    }
  ];
}

module.exports = {
  resolveKinship,
  getCommonRelatives,
  nodeNames
};
