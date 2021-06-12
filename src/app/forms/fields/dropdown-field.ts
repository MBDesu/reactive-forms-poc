import { FieldBase } from "./field-base";
import { QuestionType } from "./field-type";

export class DropdownField extends FieldBase<string> {
  controlType = QuestionType.Dropdown;
}