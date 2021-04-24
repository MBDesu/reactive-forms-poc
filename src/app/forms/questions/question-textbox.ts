import { QuestionBase } from "./question-base";
import { QuestionType } from "./question-type";

export class TextboxQuestion extends QuestionBase<string> {
  controlType = QuestionType.Textbox;
}