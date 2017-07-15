import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tola-select-inline',
  templateUrl: './select-inline.component.html',
  styleUrls: ['./select-inline.component.scss']
})
export class SelectInlineComponent implements OnInit {

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
