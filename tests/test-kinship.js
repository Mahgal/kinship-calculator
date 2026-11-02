const assert = require('assert');
const { resolveKinship } = require('../utils/kinship.js');

function testChain(chain, gender, expectedTerm, expectedReverse = null) {
  const result = resolveKinship(chain, gender);
  assert(result, `Result should not be null for ${chain.join(',')}`);
  assert.ok(result.term.includes(expectedTerm), `Expected term to include "${expectedTerm}" for ${chain.join(',')}, got "${result.term}"`);
  if (expectedReverse !== null) {
    assert.ok(result.reverseTerm.includes(expectedReverse), `Expected reverse term to include "${expectedReverse}" for ${chain.join(',')}, got "${result.reverseTerm}"`);
  }
}

// 1. [father, father] → 祖父
testChain(['father', 'father'], 'm', '祖父');

// 2. [father, elderBrother] → 伯伯
testChain(['father', 'elderBrother'], 'f', '伯伯');

// 3. [father, youngerBrother] → 叔叔
testChain(['father', 'youngerBrother'], 'm', '叔叔');

// 4. [mother, youngerBrother] → 舅舅
testChain(['mother', 'youngerBrother'], 'f', '舅舅');

// 5. [wife, father] → 岳父
testChain(['wife', 'father'], 'm', '岳父');

// 6. [elderBrother, wife] → 嫂子
testChain(['elderBrother', 'wife'], 'm', '嫂子');

// 7. [son, wife] → 儿媳
testChain(['son', 'wife'], 'm', '儿媳', '公公');
testChain(['son', 'wife'], 'f', '儿媳', '婆婆');

// 8. [father, mother]
testChain(['father', 'mother'], 'm', '祖母');

// 9. [mother, father]
testChain(['mother', 'father'], 'f', '外祖父');

// 10. [mother, mother]
testChain(['mother', 'mother'], 'm', '外婆');

// 11. [father, elderSister]
testChain(['father', 'elderSister'], 'f', '姑姑');

// 12. [mother, elderSister]
testChain(['mother', 'elderSister'], 'm', '姨妈');

// 13. [father, elderBrother, son]
testChain(['father', 'elderBrother', 'son'], 'm', '堂哥/堂弟');

// 14. [mother, elderBrother, son]
testChain(['mother', 'elderBrother', 'son'], 'f', '表哥/表弟');

// 15. [husband, mother]
testChain(['husband', 'mother'], 'f', '婆婆');

// 16. [wife, mother]
testChain(['wife', 'mother'], 'm', '岳母');

// 17. [youngerBrother, wife]
testChain(['youngerBrother', 'wife'], 'm', '弟媳');

// 18. [elderSister, husband]
testChain(['elderSister', 'husband'], 'm', '姐夫', '内弟/小舅子');

// 19. [youngerSister, husband]
testChain(['youngerSister', 'husband'], 'f', '妹夫', '大姨子');

// 20. [elderBrother, son]
testChain(['elderBrother', 'son'], 'm', '侄子');

// 21. [elderSister, daughter]
testChain(['elderSister', 'daughter'], 'f', '外甥女');

// 22. [son, son]
testChain(['son', 'son'], 'm', '孙子');

// 23. [daughter, daughter]
testChain(['daughter', 'daughter'], 'f', '外孙女');

// 24. [daughter, husband]
testChain(['daughter', 'husband'], 'm', '女婿');

// 25. 3代
testChain(['son', 'son', 'son'], 'm', '曾孙');

// Fallback test
const fallback = resolveKinship(['father', 'father', 'father', 'father'], 'm');
assert.strictEqual(fallback.term, '这个关系比较远/少见，暂未收录');
assert.strictEqual(fallback.reverseTerm, '-');

console.log('All 25+ assertions passed!');