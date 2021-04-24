import { QuestionBase } from "./question-base";
import { QuestionType } from "./question-type";

export class CheckboxQuestion extends QuestionBase<string> {
  controlType = QuestionType.Checkbox;
}