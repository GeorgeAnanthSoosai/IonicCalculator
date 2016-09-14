import {Pipe} from '@angular/core';

@Pipe({
  name: 'formatCalcResults'
})
export class FormatCalcResult {
  transform(value, args) {
    console.log(args);
    var results = value;
    if(args.value) {
      results = args.value + " " + args.operator + " " + value;
    }
    return results;
  }
}
