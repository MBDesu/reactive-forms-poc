import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '../fields/field-base';
import { QuestionType } from '../fields/field-type';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {

  @Input() question!: FieldBase<string>;
  @Input() form!: FormGroup;
  QuestionType = QuestionType;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

}
