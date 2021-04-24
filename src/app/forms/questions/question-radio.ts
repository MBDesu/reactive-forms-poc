import { QuestionBase } from "./question-base";
import { QuestionType } from "./question-type";

export class RadioQuestion extends QuestionBase<string> {
  controlType = QuestionType.Radio;
}