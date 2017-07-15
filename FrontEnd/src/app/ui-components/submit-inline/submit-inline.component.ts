import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tola-submit-inline',
  templateUrl: './submit-inline.component.html',
  styleUrls: ['./submit-inline.component.scss']
})
export class SubmitInlineComponent implements OnInit {

  @Input() offset: String ;
  @Input() submitClass: String ;
  @Input() submitValue: String ;
  @Input() border: Boolean ;

  constructor() {
    this.offset = 'offset-md-2';
    this.submitClass = 'col-md-10';
    this.submitValue = 'Submit';
    this.border = false;
  }

  ngOnInit() {
  }

}
