import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FieldBase } from '../forms/fields/field-base';
import { CheckboxField } from '../forms/fields/checkbox-field';
import { DropdownField } from '../forms/fields/dropdown-field';
import { RadioField } from '../forms/fields/radio-field';
import { TextboxField } from '../forms/fields/textbox-field';
import { QuestionType } from '../forms/fields/field-type';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  fields = `[
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
      "placeholder": "John",
      "required": true,
      "order": 1
    },
    {
      "type": "textbox",
      "key": "lastName",
      "label": "Last name",
      "placeholder": "Smith",
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

  getFields() {
    const fieldsJson = JSON.parse(this.fields);
    const fields: FieldBase<any>[] = [];
    for (let field of fieldsJson) {
      const fieldObject = this.resolveFieldType(field);
      if (fieldObject) fields.push(fieldObject);
    }
    return of(fields.sort((a, b) => a.order - b.order));
  }

  resolveFieldType(field: FieldBase<any>): FieldBase<any> | null {
    switch (field.type) {
      case QuestionType.Checkbox:
        return new CheckboxField(field);
      case QuestionType.Dropdown:
        return new DropdownField(field);
      case QuestionType.Radio:
        return new RadioField(field);
      case QuestionType.Textbox:
        return new TextboxField(field);
      default:
        return null;
    }
  }

}
