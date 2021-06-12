import { FieldBase } from "./field-base";
import { QuestionType } from "./field-type";

export class CheckboxField extends FieldBase<string> {
  controlType = QuestionType.Checkbox;
}