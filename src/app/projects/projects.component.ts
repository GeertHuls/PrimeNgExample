import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      projectId: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  hasFormErrors() {
    return !this.projectForm.valid;
  }

  fieldErrors(field: string){
    const controlSate = this.projectForm.controls[field];
    return (controlSate.dirty && controlSate.errors)
      ? controlSate.errors
      : null;
  }
}
