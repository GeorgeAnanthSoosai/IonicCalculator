import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface Item {
  value : string,
  type : string
}
interface calcRowList {
  rowItem01 : Item,
  rowItem02 : Item,
  rowItem03 : Item,
  rowItem04 : Item,
}

@Component({
  templateUrl: 'build/pages/calculator/calculator.html'
})
export class Calculator {
  calcItemList : calcRowList[];
  calcResults : any;
  previousItem : any;

  constructor(public navCtrl: NavController) {
    this.calcItemList = [
      {
        rowItem01 : {value : "(", type : "group"},
        rowItem02 : {value : ")", type : "group"},
        rowItem03 : {value : "%", type : "math"},
        rowItem04 : {value : "AC", type : "clear"}
      }, {
        rowItem01 : {value : "7", type : "number"},
        rowItem02 : {value : "8", type : "number"},
        rowItem03 : {value : "9", type : "number"},
        rowItem04 : {value : "/", type : "math"}
      }, {
        rowItem01 : {value : "4", type : "number"},
        rowItem02 : {value : "5", type : "number"},
        rowItem03 : {value : "6", type : "number"},
        rowItem04 : {value : "*", type : "math"}
      }, {
        rowItem01 : {value : "1", type : "number"},
        rowItem02 : {value : "2", type : "number"},
        rowItem03 : {value : "3", type : "number"},
        rowItem04 : {value : "-", type : "math"}
      }, {
        rowItem01 : {value : "0", type : "number"},
        rowItem02 : {value : ".", type : "number"},
        rowItem03 : {value : "=", type : "total"},
        rowItem04 : {value : "+", type : "math"}
      }
    ]
    this.calcResults = 0;
    this.previousItem = {};
  }

  setupTypedKey(selectedItem) {
    if(selectedItem.type == "number") {
      if(parseFloat(this.calcResults) > 0 ) {
        this.calcResults =  parseFloat(this.calcResults) + selectedItem.value;
      } else {
        this.calcResults = selectedItem.value;
      }

    }
    if(selectedItem.type == "math") {
      this.previousItem = {
        value : this.calcResults,
        operator : selectedItem.value
      }
      this.calcResults = "0";
    }
    if(selectedItem.type == "total") {
      if(this.previousItem && this.previousItem.value) {
        this.calcResults = eval(parseFloat(this.calcResults) + this.previousItem.operator + parseFloat(this.previousItem.value));
      }
    }
    if(selectedItem.type == "clear") {
      this.calcResults = "0";
      this.previousItem = {};
    }
  }
}
