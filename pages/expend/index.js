//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    expendList: [{
      expendName: '管理人员支出',
      isShowList: false,
      canRemove: false,
      twoList: [{
        expendName: '小区经理',
        area: '',
        unitPrice: '',
        total: 0,
        isShowList: false,
        canRemove: false,
        detailList: [{
          expendName: '社会保障费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '加班费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '服装费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '物资消耗费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '高温费',
          area: '',
          unitPrice: '',
          total: 0
        }]
      }, {
        expendName: '管理员',
        area: '',
        unitPrice: '',
        total: 0,
        isShowList: false,
        canRemove: false,
        detailList: [{
          expendName: '社会保障费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '加班费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '服装费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '物资消耗费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '高温费',
          area: '',
          unitPrice: '',
          total: 0
        }]
      }]
    }, {
      expendName: '保洁及车库人员支出',
      isShowList: false,
      canRemove: false,
      twoList: [{
        expendName: '保洁人员',
        area: '',
        unitPrice: '',
        total: 0,
        isShowList: false,
        canRemove: false,
        detailList: [{
          expendName: '社会保障费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '加班费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '服装费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '物资消耗费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '高温费',
          area: '',
          unitPrice: '',
          total: 0
        }]
      }, {
        expendName: '车库管理人员',
        area: '',
        unitPrice: '',
        total: 0,
        isShowList: false,
        canRemove: false,
        detailList: [{
          expendName: '社会保障费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '加班费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '服装费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '物资消耗费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '高温费',
          area: '',
          unitPrice: '',
          total: 0
        }]
      }]
    }, {
      expendName: '内外安保人员',
      isShowList: false,
      canRemove: false,
      twoList: [{
        expendName: '外保安',
        area: '',
        unitPrice: '',
        total: 0,
        isShowList: false,
        canRemove: false,
        detailList: [{
          expendName: '社会保障费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '加班费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '服装费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '物资消耗费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '高温费',
          area: '',
          unitPrice: '',
          total: 0
        }]
      }, {
        expendName: '内保安',
        area: '',
        unitPrice: '',
        total: 0,
        isShowList: false,
        canRemove: false,
        detailList: [{
          expendName: '社会保障费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '加班费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '服装费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '物资消耗费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '高温费',
          area: '',
          unitPrice: '',
          total: 0
        }]
      }]
    }, {
      expendName: '维修人员',
      isShowList: false,
      canRemove: false,
      twoList: [{
        expendName: '维修工',
        area: '',
        unitPrice: '',
        total: 0,
        isShowList: false,
        canRemove: false,
        detailList: [{
          expendName: '社会保障费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '加班费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '服装费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '物资消耗费',
          area: '',
          unitPrice: '',
          total: 0
        }, {
          expendName: '高温费',
          area: '',
          unitPrice: '',
          total: 0
        }]
      }]
    }, {
      expendName: '其他费用支出',
      isShowList: false,
      canRemove: false,
      twoList: [{
        expendName: '办公用品',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '电话费',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '绿化支出',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '泵房电费支出',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '电梯电费支出',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '公灯电费支出',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '电梯保养费',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '电梯限速器检测',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '电梯检测',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '多层电控门保养',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '高层电控门保养',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '维修材料费',
        area: '',
        unitPrice: '',
        total: 0
      }]
    }],
    taxes: {
      index: 0,
      isShow: false,
      list: [3.65, 5.65, 6.67]
    },
    profit: {
      index: 0,
      isShow: false,
      list: [7, 8, 9, 10, 11, 12]
    },
    contingencies: {
      index: 4,
      isShow: false,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  //事件处理函数
  // 显示影藏一级标题
  showTwoList: function (e) {
    let index = e.currentTarget.dataset.oneindex;
    let expendList = this.data.expendList;
    expendList[index].isShowList = !expendList[index].isShowList;
    this.setData({
      expendList: expendList
    });
  },
  // 显示影藏二级标题
  showThreeList: function (e) {
    let oneIndex = e.currentTarget.dataset.oneindex;
    let twoIndex = e.currentTarget.dataset.twoindex;
    let expendList = this.data.expendList;
    expendList[oneIndex].twoList[twoIndex].isShowList = !expendList[oneIndex].twoList[twoIndex].isShowList;
    this.setData({
      expendList: expendList
    });
  },
  // 外层失去焦点的时候记录area中的值
  changeOutArea: function (e) {
    let areaVal = e.detail.value;
    let oneIndex = e.currentTarget.dataset.oneindex;
    let twoIndex = e.currentTarget.dataset.twoindex;
    let expendList = this.data.expendList;

    expendList[oneIndex].twoList[twoIndex].area = areaVal; // 更新area
    expendList[oneIndex].twoList[twoIndex].total = (Number(areaVal) * Number(expendList[oneIndex].twoList[twoIndex].unitPrice)).toFixed(2); // 更新total

    // if (expendList[oneIndex].twoList[twoIndex].detailList) {
    //   for (let i = 0, len = expendList[oneIndex].twoList[twoIndex].detailList.length; i < len; i++) {
    //     expendList[oneIndex].twoList[twoIndex].detailList[i].area = areaVal;
    //   }
    //   this.countAllPrice(oneIndex, twoIndex);
    // }
    // this.countAllPrice(oneIndex, twoIndex);
    this.setData({
      expendList: expendList
    });
  },
  // 外层失去焦点的时候记录price中的值
  changeOutPrice: function (e) {
    let priceVal = e.detail.value;
    let oneIndex = e.currentTarget.dataset.oneindex;
    let twoIndex = e.currentTarget.dataset.twoindex;
    let expendList = this.data.expendList;

    expendList[oneIndex].twoList[twoIndex].unitPrice = priceVal; // unitPrice
    expendList[oneIndex].twoList[twoIndex].total = (Number(priceVal) * Number(expendList[oneIndex].twoList[twoIndex].area)).toFixed(2); // 更新total

    // if (expendList[oneIndex].twoList[twoIndex].detailList) {
    //   for (let i = 0, len = expendList[oneIndex].twoList[twoIndex].detailList.length; i < len; i++) {
    //     expendList[oneIndex].twoList[twoIndex].detailList[i].unitPrice = priceVal;
    //   }
    //   this.countAllPrice(oneIndex, twoIndex);
    // }
    // this.countAllPrice(oneIndex, twoIndex);
    this.setData({
      expendList: expendList
    });
  },
  // 内层area失去焦点
  changeInArea: function (e) {
    let areaVal = e.detail.value;
    let oneIndex = e.currentTarget.dataset.oneindex;
    let twoIndex = e.currentTarget.dataset.twoindex;
    let threeIndex = e.currentTarget.dataset.threeindex;
    let expendList = this.data.expendList;

    expendList[oneIndex].twoList[twoIndex].detailList[threeIndex].area = areaVal;
    expendList[oneIndex].twoList[twoIndex].detailList[threeIndex].total = (Number(areaVal) * Number(expendList[oneIndex].twoList[twoIndex].detailList[threeIndex].unitPrice)).toFixed(2);
    // expendList[oneIndex].twoList[twoIndex].area = '';
    // expendList[oneIndex].twoList[twoIndex].unitPrice = '';

    this.setData({
      expendList: expendList
    });

    // this.countAllPrice(oneIndex, twoIndex);
  },
  // 内层price失去焦点
  changeInPrice: function (e) {
    let priceVal = e.detail.value;
    let oneIndex = e.currentTarget.dataset.oneindex;
    let twoIndex = e.currentTarget.dataset.twoindex;
    let threeIndex = e.currentTarget.dataset.threeindex;
    let expendList = this.data.expendList;

    expendList[oneIndex].twoList[twoIndex].detailList[threeIndex].unitPrice = priceVal;
    expendList[oneIndex].twoList[twoIndex].detailList[threeIndex].total = (Number(priceVal) * Number(expendList[oneIndex].twoList[twoIndex].detailList[threeIndex].area)).toFixed(2);
    // expendList[oneIndex].twoList[twoIndex].area = '';
    // expendList[oneIndex].twoList[twoIndex].unitPrice = '';

    this.setData({
      expendList: expendList
    });

    // this.countAllPrice(oneIndex, twoIndex);
  },
  // 增加一个
  addOne: function (e) {
    let index = e.currentTarget.dataset.oneindex;
    let expendList = this.data.expendList;
    expendList[index].twoList.push({
      expendName: '其他',
      area: '',
      unitPrice: '',
      total: 0,
      isShowList: false,
      canRemove: false,
      detailList: [{
        expendName: '社会保障费',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '加班费',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '服装费',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '物资消耗费',
        area: '',
        unitPrice: '',
        total: 0
      }, {
        expendName: '高温费',
        area: '',
        unitPrice: '',
        total: 0
      }]
    })
    this.setData({
      expendList: expendList
    });
  },
  // 删除
  removeOther: function (e) {
    let outIndex = e.currentTarget.dataset.outindex;
    let inIndex = e.currentTarget.dataset.inindex;
    let expendList = this.data.expendList;
    if (expendList[outIndex].detailList[inIndex].canRemove) {
      expendList[outIndex].detailList.splice(inIndex, 1);
      this.setData({
        expendList: expendList
      });
      this.countAllPrice(outIndex);
    }
  },
  // countAllPrice
  countAllPrice: function (index1, index2) {
    let expendList = this.data.expendList;
    let allPrice = Number(expendList[index1].twoList[index2].total);

    if (expendList[index1].twoList[index2].detailList) {
      for (let i = 0, len = expendList[index1].twoList[index2].detailList.length; i < len; i++) {
        let total = expendList[index1].twoList[index2].detailList[i].area * expendList[index1].twoList[index2].detailList[i].unitPrice;
        expendList[index1].twoList[index2].detailList[i].total = total.toFixed(2);
        allPrice += total;
      }
    }

    expendList[index1].twoList[index2].total = allPrice.toFixed(2);
    // return allPrice.toFixed(2);
    this.setData({
      expendList: expendList
    })
  },
  toggleSelect: function (e) {
    let typeItem = e.currentTarget.dataset.type;
    if (typeItem === 'taxes') {
      let taxes = this.data.taxes;
      taxes.isShow = !taxes.isShow;
      this.setData({
        taxes: taxes
      })
    } else if (typeItem === 'profit') {
      let profit = this.data.profit;
      profit.isShow = !profit.isShow;
      this.setData({
        profit: profit
      })
    } else if (typeItem === 'contingencies') {
      let contingencies = this.data.contingencies;
      contingencies.isShow = !contingencies.isShow;
      this.setData({
        contingencies: contingencies
      })
    }
  },
  choodeSelect: function (e) {
    let typeItem = e.currentTarget.dataset.type;
    let index = e.currentTarget.dataset.index;
    if (typeItem === 'taxes') {
      let taxes = this.data.taxes;
      taxes.isShow = !taxes.isShow;
      taxes.index = index;
      this.setData({
        taxes: taxes
      })
    } else if (typeItem === 'profit') {
      let profit = this.data.profit;
      profit.isShow = !profit.isShow;
      profit.index = index;
      this.setData({
        profit: profit
      })
    } else if (typeItem === 'contingencies') {
      let contingencies = this.data.contingencies;
      contingencies.isShow = !contingencies.isShow;
      contingencies.index = index;
      this.setData({
        contingencies: contingencies
      })
    }
  },
  submit: function () {
    let {
      expendList,
      taxes,
      profit,
      contingencies
    } = this.data;
    wx.setStorage({
      key: "expendData",
      data: {
        expendList,
        taxes,
        profit,
        contingencies
      },
      success: function () {
        // 提交成功
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  onLoad: function () {

  }
})
