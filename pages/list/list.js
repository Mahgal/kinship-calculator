const kinship = require('../../utils/kinship.js');

Page({
  data: {
    myGender: 'm',
    relativesGroups: [],
    selectedResult: null,
    tipEnabled: false
  },

  onLoad() {
    const app = getApp();
    this.setData({
      relativesGroups: kinship.getCommonRelatives(),
      tipEnabled: app.globalData.tipEnabled
    });
  },

  onGenderChange(e) {
    this.setData({
      myGender: e.detail.value,
      selectedResult: null
    });
  },

  showDetail(e) {
    const chain = e.currentTarget.dataset.chain;
    const result = kinship.resolveKinship(chain, this.data.myGender);

    // Quick fix: scrollToTop is usually done automatically or we leave it at current pos
    this.setData({ selectedResult: result });

    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  }
});