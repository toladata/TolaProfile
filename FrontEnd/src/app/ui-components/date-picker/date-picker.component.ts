import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IMyDateModel, INgxMyDpOptions } from 'ngx-mydatepicker';

@Component({
  selector: 'tola-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  // public currentOptions: DatePickerOptions;
  @Input() labelText: String = '';
  @Input() formGroup: FormGroup;
  @Input() formControlName: String = '';
  @Input() inputPlaceholder: String = '';
  @Input() id: String;
  @Input() errors: String = '';
  @Input() options: any = {};
  public firstDate: String;
  public myOptions: INgxMyDpOptions = {
    dateFormat: 'dd.mm.yyyy'
  };

  constructor() {
    // this.currentOptions = new DatePickerOptions(this.options);
  }

  ngOnInit() {
    this.firstDate = this.formGroup.value[`${this.formControlName}`];
  }

  onDateChanged(event: IMyDateModel): void {
     this.formGroup.controls[`${this.formControlName}`].setValue(event['formatted']);
  }

}
