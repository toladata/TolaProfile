import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tola-enketo-form',
  templateUrl: './enketo-form.component.html',
  styleUrls: ['./enketo-form.component.scss']
})
export class EnketoFormComponent implements OnInit {
  pageTitle = 'Enketo Form';

  constructor() { }

  ngOnInit() {
  }

}
