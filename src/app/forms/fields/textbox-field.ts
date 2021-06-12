import { FieldBase } from "./field-base";
import { QuestionType } from "./field-type";

export class TextboxField extends FieldBase<string> {
  controlType = QuestionType.Textbox;
}