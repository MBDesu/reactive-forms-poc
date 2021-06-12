import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FieldBase } from './forms/fields/field-base';
import { QuestionService } from './services/field.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-forms-poc';

  questions: Observable<FieldBase<any>[]>;

  constructor(private questionService: QuestionService) {
    this.questions = this.questionService.getFields();
  }

}
