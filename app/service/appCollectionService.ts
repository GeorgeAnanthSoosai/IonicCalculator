import { Calculator } from '../pages/calculator/calculator';

interface appItemList {
  appIcon : string,
  appHeading : string,
  appDescription : string,
  redirectUrl : any
}


export interface appList {
  appHeader : string,
  appItem : appItemList[],
}

export class AppItemCollection {
  applicationCollection : appList[];

  constructor() {
    this.applicationCollection = [{
      appHeader : "Match App",
      appItem : [
        {
          appIcon : "img/calculator-icon.gif",
          appHeading : "Calculator",
          appDescription : "calculator for doing the basic operation",
          redirectUrl : Calculator
        }, {
          appIcon : "img/calculator-icon.gif",
          appHeading : "Calculator-1",
          appDescription : "calculator for doing the basic operation",
          redirectUrl : Calculator
        }
      ]
    }, {
      appHeader : "Organization - app",
      appItem : [
        {
          appIcon : "img/calculator-icon.gif",
          appHeading : "Calculator - 2",
          appDescription : "calculator for doing the basic operation",
          redirectUrl : Calculator
        }, {
          appIcon : "img/calculator-icon.gif",
          appHeading : "Calculator-3",
          appDescription : "calculator for doing the basic operation",
          redirectUrl : Calculator
        }
      ]
    }]
  };



}
