import { FieldBase } from "./field-base";
import { QuestionType } from "./field-type";

export class RadioField extends FieldBase<string> {
  controlType = QuestionType.Radio;
}