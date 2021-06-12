import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldControlService } from 'src/app/services/field-control.service';
import { FieldBase } from '../fields/field-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: FieldBase<string>[] = [];
  form!: FormGroup;
  payload = '';

  constructor(private questionControlService: FieldControlService) { }

  ngOnInit(): void {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit(): void {
    this.payload = JSON.stringify(this.form.getRawValue(), null, 2);
  }

}
