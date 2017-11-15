//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    incomeList: [{
      incomeName: '物业费',
      area: '',
      unitPrice: '',
      total: 0,
      isShowList: false,
      detailList: [{
        incomeName: '租赁公房',
        area: '',
        unitPrice: '',
        total: 0,
        canRemove: false
      }, {
        incomeName: '售后公房',
        area: '',
        unitPrice: '',
        total: 0,
        canRemove: false
      }, {
        incomeName: '商品房',
        area: '',
        unitPrice: '',
        total: 0,
        canRemove: false
      }, {
        incomeName: '店铺',
        area: '',
        unitPrice: '',
        total: 0,
        canRemove: false
      }]
    }, {
      incomeName: '公益性收入',
      area: '',
      unitPrice: '',
      total: 0,
      isShowList: false,
      detailList: [{
        incomeName: '房屋出租',
        area: '',
        unitPrice: '',
        total: 0,
        canRemove: false
      }, {
        incomeName: '广告费',
        area: '',
        unitPrice: '',
        total: 0,
        canRemove: false
      }, {
        incomeName: '停车费',
        area: '',
        unitPrice: '',
        total: 0,
        canRemove: false
      }]
    }]
  },
  //事件处理函数
  // 显示影藏
  showList: function (e) {
    let index = e.currentTarget.dataset.showindex;
    let incomeList = this.data.incomeList;
    incomeList[index].isShowList = !incomeList[index].isShowList;
    this.setData({
      incomeList: incomeList
    });
  },
  // 外层失去焦点的时候记录area中的值
  changeOutArea: function (e) {
    let areaVal = e.detail.value;
    let index = e.currentTarget.dataset.outindex;
    let incomeList = this.data.incomeList;

    incomeList[index].area = areaVal; // 更新area
    incomeList[index].total = (Number(areaVal) * Number(incomeList[index].unitPrice)).toFixed(2); // 更新total

    for (let i = 0, len = incomeList[index].detailList.length; i < len; i++) {
      incomeList[index].detailList[i].area = areaVal;
    }

    this.setData({
      incomeList: incomeList
    });

    this.countAllPrice(index);
  },
  // 外层失去焦点的时候记录price中的值
  changeOutPrice: function (e) {
    let priceVal = e.detail.value;
    let index = e.currentTarget.dataset.outindex;
    let incomeList = this.data.incomeList;
    incomeList[index].unitPrice = priceVal;

    for (let i = 0, len = incomeList[index].detailList.length; i < len; i++) {
      incomeList[index].detailList[i].unitPrice = priceVal;
    }

    this.setData({
      incomeList: incomeList
    });

    this.countAllPrice(index);
  },
  // 内层area失去焦点
  changeInArea: function (e) {
    let areaVal = e.detail.value;
    let outIndex = e.currentTarget.dataset.outindex;
    let inIndex = e.currentTarget.dataset.inindex;
    let incomeList = this.data.incomeList;

    incomeList[outIndex].detailList[inIndex].area = areaVal;
    incomeList[outIndex].area = '';
    incomeList[outIndex].unitPrice = '';
    incomeList[outIndex].detailList[inIndex].total = (Number(areaVal) * Number(incomeList[outIndex].detailList[inIndex].unitPrice)).toFixed(2);

    this.setData({
      incomeList: incomeList
    });

    this.countAllPrice(outIndex);
  },
  // 内层price失去焦点
  changeInPrice: function (e) {
    let priceVal = e.detail.value;
    let outIndex = e.currentTarget.dataset.outindex;
    let inIndex = e.currentTarget.dataset.inindex;
    let incomeList = this.data.incomeList;

    incomeList[outIndex].detailList[inIndex].unitPrice = priceVal;
    incomeList[outIndex].area = '';
    incomeList[outIndex].unitPrice = '';
    incomeList[outIndex].detailList[inIndex].total = (Number(priceVal) * Number(incomeList[outIndex].detailList[inIndex].area)).toFixed(2);

    this.setData({
      incomeList: incomeList
    });

    this.countAllPrice(outIndex);
  },
  // 增加一个
  addOne: function (e) {
    let index = e.currentTarget.dataset.outindex;
    let incomeList = this.data.incomeList;
    incomeList[index].detailList.push({
      incomeName: '其他',
      area: '',
      unitPrice: '',
      total: 0,
      canRemove: true
    })
    this.setData({
      incomeList: incomeList
    });
  },
  // 删除
  removeOther: function (e) {
    let outIndex = e.currentTarget.dataset.outindex;
    let inIndex = e.currentTarget.dataset.inindex;
    let incomeList = this.data.incomeList;
    if (incomeList[outIndex].detailList[inIndex].canRemove) {
      incomeList[outIndex].detailList.splice(inIndex, 1);
      this.setData({
        incomeList: incomeList
      });
      this.countAllPrice(outIndex);
    }
  },
  // countAllPrice
  countAllPrice: function (index) {
    let allPrice = 0;
    let incomeList = this.data.incomeList;
    for (let i = 0, len = incomeList[index].detailList.length; i < len; i++) {
      let total = incomeList[index].detailList[i].area * incomeList[index].detailList[i].unitPrice;
      incomeList[index].detailList[i].total = total.toFixed(2);
      allPrice += total;
    }
    incomeList[index].total = allPrice.toFixed(2);
    // return allPrice.toFixed(2);
    this.setData({
      incomeList: incomeList
    })
  },
  submit: function () {
    // console.log(this.data.incomeList);
    wx.setStorage({
      key: "incomeList",
      data: this.data.incomeList,
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
