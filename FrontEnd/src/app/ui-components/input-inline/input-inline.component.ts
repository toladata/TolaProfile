import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'tola-input-inline',
  templateUrl: './input-inline.component.html',
  styleUrls: ['./input-inline.component.scss']
})
export class InputInlineComponent implements OnInit {

  @Input() labelText: String ;
  @Input() labelClass: String ;
  @Input() labelFor: String ;
  @Input() inputClass: String ;
  @Input() inputPlaceholder: String ;
  @Input() border: Boolean ;
  @Input() controlName: String;

  constructor() {
    this.labelText = "";
    this.labelClass = "col-md-2";
    this.labelFor = "";
    this.inputClass = "col-md-10";
    this.inputPlaceholder;
    this.border = true;
    this.controlName = '';
  }

  ngOnInit() {
  }

}
