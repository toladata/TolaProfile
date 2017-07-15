import { Component, OnInit } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';
import { PositionHelper } from '../../../shared/helpers/postion.helper';

@Component({
  selector: 'tola-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  scrollFlag: boolean;
  sidebarTop: number;
  private sidebarEl;

  constructor(
    private positionHelper: PositionHelper
  ) {
    PageScrollConfig.defaultDuration = 300;
    PageScrollConfig.defaultScrollOffset = 28;
    this.scrollFlag = true;
    window.addEventListener('scroll', () => {
      this.getScrollPosition();
    });
  }
  ngOnInit() {
    this.sidebarEl = document.querySelector('.sidebar--sticky');
    this.sidebarTop = this.positionHelper.elemPosition(this.sidebarEl).top;
  }

  getScrollPosition() {
    let scrollPosition = window.scrollY;
    if(scrollPosition >= this.sidebarTop && this.scrollFlag) {
      console.log(window.scrollY);
      this.sidebarEl.classList.add('fixed');
      this.scrollFlag = false;
    } else if (scrollPosition < this.sidebarTop){
      this.sidebarEl.classList.remove('fixed');
      this.scrollFlag = true;
    }
  }
}
