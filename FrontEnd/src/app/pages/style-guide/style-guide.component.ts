import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tola-styleguide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {
  pageTitle = 'Style Guide';
  constructor() { }

  ngOnInit() {}
}
