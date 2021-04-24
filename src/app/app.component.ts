import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './forms/questions/question-base';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-forms-poc';

  questions: Observable<QuestionBase<any>[]>;

  constructor(private questionService: QuestionService) {
    this.questions = this.questionService.getQuestions();
  }

}
