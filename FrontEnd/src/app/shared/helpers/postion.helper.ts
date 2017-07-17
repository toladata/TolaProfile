import { Injectable } from '@angular/core';

@Injectable()
export class PositionHelper {

  public elemPosition(el) {
    var x = 0;
    var y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft;
      y += el.offsetTop;
      el = el.offsetParent;
    }
    return {top: y, left: x};
  }
}
