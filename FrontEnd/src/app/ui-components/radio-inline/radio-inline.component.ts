import { Component, OnInit, Input } from '@angular/core';
import { TextHelper } from '../../shared/helpers/text.helper';

@Component({
  selector: 'tola-radio-inline',
  templateUrl: './radio-inline.component.html',
  styleUrls: ['./radio-inline.component.scss']
})
export class RadioInlineComponent implements OnInit {

  @Input() labelText: String ;
  @Input() labelClass: String ;
  @Input() labelFor: String ;
  @Input() radioData : any[] ;
  @Input() radioClass: String ;
  @Input() border: Boolean ;
  @Input() inline: Boolean ;
  forIds: any[];

  constructor(
    private textHelper: TextHelper
  ) {
    this.labelText = "";
    this.labelClass = "col-md-2";
    this.labelFor = "";
    this.radioClass = "col-md-10";
    this.border = true;
    this.inline = true;
    this.radioData = [];
  }

  ngOnInit() {
    const dataCopy = Array.from(this.radioData);
    this.forIds = dataCopy.map(item => this.textHelper.toCamelCase(item));
  }

}
