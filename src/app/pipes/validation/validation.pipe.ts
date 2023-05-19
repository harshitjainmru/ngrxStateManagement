import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { PATTERN } from 'src/app/constants/pattern';
import { toTitleCase } from 'src/app/constants/titleCase';

@Pipe({
  name: 'validation',
  pure: false,
})
export class ValidationPipe implements PipeTransform {
  transform(control: FormControl | AbstractControl, name: string): any {
    return control && control.errors
      ? this.getValidationError(control, name)
      : '';
  }
  getValidationError(control: any, name: string) {
    if (control.hasError('required')) {
      return `${toTitleCase(name)} is required`;
    }
    if (control.hasError('pattern')) {
      let pattern = control.errors.pattern.requiredPattern;
      return this.PATTERN_ERRORS(pattern, name);
    }
    if (control.hasError('minlength')) {
      return `${toTitleCase(name)} must be at least ${
        control.errors.minlength.requiredLength
      } characters`;
    }
    if (control.hasError('min')) {
      return `${toTitleCase(name)} must be at least ${
        control.errors.min.requiredLength
      } digit `;
    }
    if (control.hasError('maxlength')) {
      return `${toTitleCase(name)} can not be more than ${
        control.errors.maxlength.requiredLength
      } characters`;
    }
    if (control.hasError('max')) {
      return `${toTitleCase(name)} can not be more than ${
        control.errors.max.max
      } `;
    }
    if (control.hasError('maxError')) {
      return `Maximum ${toTitleCase(
        name
      )} can not be less than minimum ${toTitleCase(name)}`;
    }

  }
  PATTERN_ERRORS(pattern: any, key: string): any {
    let comment: string;
    if (pattern == PATTERN.EMAIL_PATTERN) {
      comment = `${key} is invalid or not in correct format`;
      return comment;
    } else if (pattern == PATTERN.PASSWORD_PATTERN) {
      comment = `${key} can not contain blank spaces`;
      return comment;
    } else if (pattern == PATTERN.FIRST_NAME) {
      comment = `No digits/special characters empty spaces are allowed`;
      return comment;
    } else if (pattern == PATTERN.PHONE_NUMBER) {
      comment = `invalid ${key}`;
      return comment;
    }
  }
}
