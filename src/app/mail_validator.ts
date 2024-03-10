import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({
  selector: '[MailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MailValidatorDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class MailValidatorDirective implements Validator {
  @Input('appForbiddenName') forbiddenName = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName
      ? createPasswordStrengthValidator()(control)
      : null;
  }
}

export function createPasswordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? { passwordStrength: true } : null;
  }
}