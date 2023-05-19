import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { LIMIT } from 'src/app/constants/limit';
import { PATTERN } from 'src/app/constants/pattern';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  constructor() {}

  VALIDATION = {
    email: [
      Validators.pattern(PATTERN.EMAIL_PATTERN),
      Validators.email,
      Validators.maxLength(LIMIT.MAX_EMAIL_LENGTH),
    ],
    password: [Validators.pattern(PATTERN.PASSWORD_PATTERN)],
    firstName: [Validators.pattern(PATTERN.FIRST_NAME),Validators.maxLength(LIMIT.max_name_length),Validators.minLength(LIMIT.min_name_length)],
    lastName: [Validators.pattern(PATTERN.LAST_NAME),Validators.maxLength(LIMIT.max_name_length),Validators.minLength(LIMIT.min_name_length)],
    dob: [],
    gender: [],
    maritalStatus: [],
    contact: [Validators.pattern(PATTERN.PHONE_NUMBER)],
    total_year: [],
    total_month: [],
    relevant_year: [],
    relevant_month: [],
    address: [Validators.maxLength(LIMIT.address),Validators.minLength(LIMIT.min_missing_textbox)],
    oldPassword: [Validators.pattern(PATTERN.PASSWORD_PATTERN)],
    newPassword: [Validators.pattern(PATTERN.PASSWORD_PATTERN)],
    confirmPassword: [Validators.pattern(PATTERN.PASSWORD_PATTERN)],
    school: [Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length),Validators.pattern(PATTERN.FIRST_NAME)],
    educationLevel: [],
    fromTime: [],
    toTime: [],
    language: [],
    professionalCourses: [Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length)],
    description: [Validators.maxLength(LIMIT.address),Validators.minLength(LIMIT.min_missing_textbox)],
    employeename: [],
    departmentname: [],
    name: [],
    emp_id: [],
    pitch_title: [Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length)],
    industry: [],
    pitch_type: [],
    editor: [],
    presentation: [],
    title: [],
    goalTraining: [],
    missingDescription: [Validators.minLength(LIMIT.min_missing_textbox)],
    relevantFeedback: [],
    overallFeedback: [],
    satisfiedWithContent: [],
    overallTrainingDescription: [
      Validators.minLength(LIMIT.min_missing_textbox),
    ],
    briefReason: [Validators.minLength(LIMIT.min_missing_textbox)],
    training_name: [],
    team_name: [],
    skill_enhancement: [Validators.minLength(LIMIT.min_missing_textbox)],
    skill_needed: [Validators.minLength(LIMIT.min_missing_textbox)],
    interested: [],
    timeline: [],
    category: [],
    quantity: [],
    priority: [],
    date: [],
    type: [],
    reason: [Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length)],
    id: [],
    code: [Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length)],
    serialnumber: [Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length)],
    modelnumber: [Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length)],
    os: [Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length)],
    osversion: [Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length)],
    brand: [Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length)],
    color: [Validators.minLength(LIMIT.min_name_length),Validators.maxLength(LIMIT.max_name_length)],
    workingcondition: [],
    assetimage: [],
    employee: [],
    company: [],
    approval:[],
    upload_document:[],
    add_tag:[Validators.minLength(LIMIT.add_minimum)]
  };

  getControl(name, required = true, prefilled?) {
    if (prefilled === undefined) {
      prefilled = '';
      console.log(prefilled, 'prfilled');
    }
    let compose = [...this.VALIDATION[name]];
    if (required) {
      if (name === 'checkbox') {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }
    return [
      name === 'checkbox' ? false : prefilled,
      Validators.compose(compose),
    ];
  }
}
