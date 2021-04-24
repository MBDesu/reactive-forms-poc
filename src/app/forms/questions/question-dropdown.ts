import { QuestionBase } from "./question-base";
import { QuestionType } from "./question-type";

export class DropdownQuestion extends QuestionBase<string> {
  controlType = QuestionType.Dropdown;
}