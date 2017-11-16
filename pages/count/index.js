//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    incomeList: [],
    expendData: {},
    incomeCount: {
      area: '',
      monthCount: '',
      average: ''
    },
    expendCount: {
      area: '',
      monthCount: '',
      taxes: '',
      profit: '',
      contingencies: ''
    },
    addIncome: '',
    needIncome: ''
  },
  //事件处理函数

  onShow: function () {
    let _this = this;
    wx.getStorage({
      key: 'incomeList',
      success: function (res) {
        // console.log(res.data)
        let incomeList = res.data;
        let countArea = 0;
        let countPrice = 0;
        for (let i = 0, len = incomeList.length; i < len; i++) {
          for (let j = 0, jLen = incomeList[i].detailList.length; j < jLen; j++) {
            countArea += Number(incomeList[i].detailList[j].area);
            countPrice += Number(incomeList[i].detailList[j].total);
          }
          countArea += Number(incomeList[i].area);
          countPrice += Number(incomeList[i].total);
        }
        console.log(countArea, countPrice);
        _this.setData({
          incomeList: res.data,
          incomeCount: {
            area: countArea,
            monthCount: countPrice.toFixed(2),
            average: (countPrice / countArea).toFixed(2)
          }
        })
      },
      fail: function (res) {
        _this.setData({
          incomeList: [],
          incomeCount: {
            area: '',
            monthCount: ''
          }
        })
      }
    })
    wx.getStorage({
      key: 'expendData',
      success: function (res) {
        // console.log(res.data)
        let expendList = res.data.expendList;
        let countPrice = 0;
        for (let i = 0, len = expendList.length; i < len; i++) {
          for (let j = 0, jLen = expendList[i].twoList.length; j < jLen; j++) {
            if (expendList[i].twoList[j].detailList) {
              for (let k = 0, kLen = expendList[i].twoList[j].detailList.length; k < kLen; k++) {
                console.log(kLen);
                countPrice += Number(expendList[i].twoList[j].detailList[k].total);
              }
            } 
            countPrice += Number(expendList[i].twoList[j].total);
          }
        }
        console.log(countPrice);
        let taxes = res.data.taxes.list[res.data.taxes.index] * countPrice / 100;
        let profit = res.data.profit.list[res.data.profit.index] * countPrice / 100;
        let contingencies = res.data.contingencies.list[res.data.contingencies.index] * countPrice / 100;
        _this.setData({
          expendData: res.data,
          expendCount: {
            taxes: taxes.toFixed(2),
            profit: profit.toFixed(2),
            contingencies: contingencies.toFixed(2),
            area: '',
            monthCount: (countPrice + taxes + profit + contingencies).toFixed(2)
          }
        })
      },
      fail: function (res) {
        _this.setData({
          expendData: {},
          expendCount: {
            area: '',
            monthCount: ''
          }
        })
      }
    })
    // console.log(this.data)
    setTimeout(() => {
      // let pageData = this.data;
      let addIncome = ((this.data.incomeCount.monthCount - this.data.expendCount.monthCount) / this.data.incomeCount.area).toFixed(2);
      this.setData({
        addIncome: addIncome < 0 ? Math.abs(addIncome) : '',
        needIncome: addIncome < 0 ? Math.abs(addIncome) + Number(this.data.incomeCount.average) : this.data.incomeCount.average
      })
    }, 500)
  }
})
