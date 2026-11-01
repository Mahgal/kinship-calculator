const kinship = require('../../utils/kinship.js');

Page({
  data: {
    myGender: 'm',
    chain: [],
    chainNames: [],
    result: null,
    tipEnabled: false
  },

  onLoad() {
    const app = getApp();
    this.setData({ tipEnabled: app.globalData.tipEnabled });
    this.updateResult();
  },

  onGenderChange(e) {
    this.setData({
      myGender: e.detail.value,
      chain: [],
      chainNames: [],
      result: null
    });
  },

  addRelation(e) {
    const rel = e.currentTarget.dataset.rel;
    if (this.data.chain.length >= 4) {
      wx.showToast({
        title: '关系链不能超过4步',
        icon: 'none'
      });
      return;
    }

    const newChain = [...this.data.chain, rel];
    const newChainNames = [...this.data.chainNames, kinship.nodeNames[rel]];

    this.setData({
      chain: newChain,
      chainNames: newChainNames
    }, this.updateResult);
  },

  undo() {
    if (this.data.chain.length === 0) return;

    const newChain = [...this.data.chain];
    const newChainNames = [...this.data.chainNames];
    newChain.pop();
    newChainNames.pop();

    this.setData({
      chain: newChain,
      chainNames: newChainNames
    }, this.updateResult);
  },

  reset() {
    this.setData({
      chain: [],
      chainNames: [],
      result: null
    });
  },

  updateResult() {
    if (this.data.chain.length === 0) {
      this.setData({ result: null });
      return;
    }
    const result = kinship.resolveKinship(this.data.chain, this.data.myGender);
    this.setData({ result });
  }
});