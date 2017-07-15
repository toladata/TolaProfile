import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tola-checkbox-inline',
  templateUrl: './checkbox-inline.component.html',
  styleUrls: ['./checkbox-inline.component.scss']
})
export class CheckboxInlineComponent implements OnInit {

  @Input() labelText: String ;
  @Input() labelClass: String ;
  @Input() labelFor: String ;
  @Input() checkboxData : any[] ;
  @Input() checkboxClass: String ;
  @Input() border: Boolean ;
  @Input() inline: Boolean ;

  constructor() {
    this.labelText = "";
    this.labelClass = "col-md-2";
    this.labelFor = "";
    this.checkboxClass = "col-md-10";
    this.border = true;
    this.inline = true;
    this.checkboxData = [];
  }

  ngOnInit() {
  }

}
