import { AbstractControl, ValidatorFn } from '@angular/forms';

/** A hero's name can't match the given regular expression */
export function userNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
