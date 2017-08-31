import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fielderrors',
  templateUrl: './fielderrors.component.html',
  styleUrls: ['./fielderrors.component.css']
})
export class FielderrorsComponent implements OnInit {

  @Input('form') form: FormGroup;
  @Input('field') fieldName: string;
  @Input('nicename') niceName: string;

  constructor() { }

  ngOnInit() {
  }

  fieldErrors(field: string) {
    const controlSate = this.form.controls[field];
    return (controlSate.dirty && controlSate.errors)
      ? controlSate.errors
      : null;
  }
}
