import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tola-button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() buttonClass: String ;

  constructor() {
    this.buttonClass = "btn-primary";
  }

  ngOnInit() {
  }

}
