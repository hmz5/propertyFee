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
      contingencies: '',
      taxesAverage: '',
      profitAverage: '',
      contingenciesAverage: '',
      monthCountAverage: ''
    },
    addIncome: '',
    needIncome: '',
    profitLoss: ''
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
          if (Number(incomeList[i].total) > 0) {
            countArea += Number(incomeList[i].area);
            countPrice += Number(incomeList[i].total);
          } else {
            for (let j = 0, jLen = incomeList[i].detailList.length; j < jLen; j++) {
              countArea += Number(incomeList[i].detailList[j].area);
              countPrice += Number(incomeList[i].detailList[j].total);
            }
          }
        }
        console.log(countArea, countPrice);
        _this.setData({
          incomeList: res.data,
          incomeCount: {
            area: countArea,
            monthCount: countPrice.toFixed(2),
            average: countArea != 0 ? (countPrice / countArea).toFixed(2) : 0
          }
        })

        wx.getStorage({
          key: 'expendData',
          success: function (res) {
            // console.log(res.data)
            let expendList = res.data.expendList;
            let countPrice = 0;
            for (let i = 0, len = expendList.length; i < len; i++) {
              expendList[i].total = 0;
              for (let j = 0, jLen = expendList[i].twoList.length; j < jLen; j++) {
                if (expendList[i].twoList[j].detailList) {
                  for (let k = 0, kLen = expendList[i].twoList[j].detailList.length; k < kLen; k++) {
                    console.log(kLen);
                    countPrice += Number(expendList[i].twoList[j].detailList[k].total);
                    expendList[i].twoList[j].detailList[k].average = (expendList[i].twoList[j].detailList[k].total / _this.data.incomeCount.area).toFixed(2);
                  }
                }
                countPrice += Number(expendList[i].twoList[j].total);
                expendList[i].twoList[j].average = (expendList[i].twoList[j].total / _this.data.incomeCount.area).toFixed(2);
                // console.log(expendList[i].twoList[j].total, _this.data.incomeCount.area);
                expendList[i].total += Number(expendList[i].twoList[j].total);
              }
              expendList[i].average = (expendList[i].total / _this.data.incomeCount.area).toFixed(2);
            }
            console.log(countPrice);
            let taxes = res.data.taxes.list[res.data.taxes.index] * countPrice / 100;
            let profit = res.data.profit.list[res.data.profit.index] * countPrice / 100;
            let contingencies = res.data.contingencies.list[res.data.contingencies.index] * countPrice / 100;
            let taxesAverage = (taxes / _this.data.incomeCount.area).toFixed(2);
            let profitAverage = (profit / _this.data.incomeCount.area).toFixed(2);
            let contingenciesAverage = (contingencies / _this.data.incomeCount.area).toFixed(2);
            let monthCountAverage = ((countPrice + taxes + profit + contingencies) / _this.data.incomeCount.area).toFixed(2);
            _this.setData({
              expendData: res.data,
              expendCount: {
                taxes: taxes.toFixed(2),
                profit: profit.toFixed(2),
                contingencies: contingencies.toFixed(2),
                area: '',
                monthCount: (countPrice + taxes + profit + contingencies).toFixed(2),
                taxesAverage,
                profitAverage,
                contingenciesAverage,
                monthCountAverage
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
    // console.log(this.data)
    setTimeout(() => {
      // let pageData = this.data;
      let addIncome = this.data.incomeCount.area != 0 ? ((this.data.incomeCount.monthCount - this.data.expendCount.monthCount) / this.data.incomeCount.area).toFixed(2) : 0;
      let profitLoss = (this.data.incomeCount.monthCount - this.data.expendCount.monthCount).toFixed(2);
      this.setData({
        addIncome: addIncome <= 0 ? Math.abs(addIncome) : '',
        needIncome: addIncome <= 0 ? (Math.abs(addIncome) + Number(this.data.incomeCount.average ? this.data.incomeCount.average : 0)).toFixed(2) : Number(this.data.incomeCount.average),
        profitLoss: profitLoss
      })
    }, 500)
  }
})
