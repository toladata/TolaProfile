import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tola-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() labelText: String ;
  @Input() labelClass: String ;
  @Input() labelFor: String ;
  @Input() selectWrapClass: String ;
  @Input() selectClass: String ;
  @Input() border: Boolean ;

  constructor() {
    this.labelText = "";
    this.labelClass = "col-md-2";
    this.labelFor = "";
    this.selectWrapClass = "col-md-10";
    this.selectClass = "";
    this.border = true;
  }

  ngOnInit() {
  }

}
