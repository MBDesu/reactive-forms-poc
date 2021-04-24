import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuestionBase } from '../forms/questions/question-base';
import { CheckboxQuestion } from '../forms/questions/question-checkbox';
import { DropdownQuestion } from '../forms/questions/question-dropdown';
import { RadioQuestion } from '../forms/questions/question-radio';
import { TextboxQuestion } from '../forms/questions/question-textbox';
import { QuestionType } from '../forms/questions/question-type';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions = `[
    {
      "type": "dropdown",
      "key": "experienceModel",
      "label": "Experience Model",
      "options": [
        { "key": "IPC", "value": "IP Connect" },
        { "key": "IPD", "value": "IP Drive" },
        { "key": "IPA", "value": "IP Activate" }
      ],
      "order": 4
    },
    {
      "type": "textbox",
      "key": "firstName",
      "label": "First name",
      "value": "John",
      "required": true,
      "order": 1
    },
    {
      "type": "textbox",
      "key": "lastName",
      "label": "Last name",
      "value": "Smith",
      "required": true,
      "order": 2
    },
    {
      "type": "radio",
      "key": "income",
      "label": "Yearly income",
      "options": [
        { "key": "0to25", "value": "$0 - $25,000" },
        { "key": "25to50", "value": "$25,000 - $50,000" },
        { "key": "50plus", "value": "$50,000+" }
      ],
      "order": 3
    }
  ]`;

  getQuestions() {
    const questionJson = JSON.parse(this.questions);
    const questions: QuestionBase<any>[] = [];
    for (let question of questionJson) {
      const questionObject = this.resolveQuestion(question);
      if (questionObject) questions.push(questionObject);
    }
    return of(questions.sort((a, b) => a.order - b.order));
  }

  resolveQuestion(question: QuestionBase<any>): QuestionBase<any> | null {
    switch (question.type) {
      case QuestionType.Checkbox:
        return new CheckboxQuestion(question);
      case QuestionType.Dropdown:
        return new DropdownQuestion(question);
      case QuestionType.Radio:
        return new RadioQuestion(question);
      case QuestionType.Textbox:
        return new TextboxQuestion(question);
      default:
        return null;
    }
  }

}
