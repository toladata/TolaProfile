import { Component, OnInit } from '@angular/core';
import dedent from "dedent";

@Component({
  selector: 'tola-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  codeSnippets : string;
  constructor() {
    this.codeSnippets = dedent`
      // Primary
      <tola-button-component buttonClass="btn-primary">Primary</tola-button-component>
      <tola-button-component buttonClass="button--navy btn">Navy</tola-button-component>
      <tola-button-component buttonClass="btn">Default</tola-button-component>
      <tola-button-component buttonClass="button--cancel btn">Cancel</tola-button-component>
      <tola-button-component buttonClass="button--action btn"><div class="icon-plus"></div></tola-button-component>
      
      // Secondary
      <tola-button-component buttonClass="btn-secondary">Secondary</tola-button-component>
      <tola-button-component buttonClass="button--secondary-orange btn">Secondary Orange</tola-button-component>
    `;
  }

  ngOnInit() {
  }

}
