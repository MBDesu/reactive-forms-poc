import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/services/question-control.service';
import { QuestionBase } from '../questions/question-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form!: FormGroup;
  payload = '';

  constructor(private questionControlService: QuestionControlService) { }

  ngOnInit(): void {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit(): void {
    this.payload = JSON.stringify(this.form.getRawValue());
  }

}
