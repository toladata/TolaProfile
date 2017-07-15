import { Component, OnInit } from '@angular/core';
import dedent from "dedent";

@Component({
  selector: 'tola-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  codeSnippets : string;
  constructor() {
    this.codeSnippets = dedent`
      <tola-input-inline
        labelText="Input"
        inputPlaceholder="Placeholder text"
      ></tola-input-inline>
      // Options
      // labelText = ""; labelClass = "col-md-2"; labelFor = ""; 
      // inputClass = "col-md-10"; inputPlaceholder; border = true;
      
      <tola-input-inline
        labelText="Short Input"
        inputPlaceholder="col-md-4"
        inputClass="col-md-4"
      ></tola-input-inline>
        
      <tola-select-inline
        labelText="Select"
        selectClass="col-md-2"
      >
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
        <option value="option 3">Option 3</option>
        <option value="option 4">Option 4</option>
      </tola-select-inline>
       // labelText = "";
       // labelClass = "col-md-2"; labelFor = ""; selectWrapClass = "col-md-10";
       // selectClass = ""; border = true;
       
      <tola-checkbox-inline
        labelText="Checkbox"
        [inline]=true
        [checkboxData]="['Option one','Option two','Option three']"
        ></tola-checkbox-inline>
      // Options
      // labelText = ""; labelClass = "col-md-2"; labelFor = ""; checkboxClass = "col-md-10";
      // border = true; inline = true; checkboxData = [];
      
      <tola-radio-inline
        labelText="Radios"
        [inline]=true
        [radioData]="['Option one','Option two','Option three']"
        ></tola-radio-inline>
      // Options
      // labelText = ""; labelClass = "col-md-2"; labelFor = ""; radioClass = "col-md-10";
      // border = true; inline = true; radioData = [];
      
      <tola-submit-inline></tola-submit-inline>
      // Options
      // offset = 'offset-md-2'; submitClass = 'col-md-10'; submitValue = 'Submit';
      // border = false;
    `;
  }

  ngOnInit() {
  }
}
