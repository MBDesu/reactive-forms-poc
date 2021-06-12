import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldBase } from '../forms/fields/field-base';

@Injectable({
  providedIn: 'root'
})
export class FieldControlService {

  constructor() { }

  toFormGroup(questions: FieldBase<string>[]) {
    const group: any = {};
    questions.forEach(question => {
      const value = question.value || '';
      const formControl = question.required ? new FormControl(value, Validators.required) : new FormControl(value);
      group[question.key] = formControl;
    });
    return new FormGroup(group);
  }

}
