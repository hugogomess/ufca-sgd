import { FormGroup } from '@angular/forms';

export function MatchValue(
    firstControlName: string,
    secondControlName: string
) {
    return (formGroup: FormGroup) => {
        const firstControl = formGroup.controls[firstControlName];
        const secondControl = formGroup.controls[secondControlName];
        // return null if controls haven't initialized yet
        if (
            !firstControl ||
            !secondControl ||
            !firstControl.value ||
            !secondControl.value
        ) {
            return null;
        }
        if (secondControl.errors && !secondControl.errors.matchValueError) {
            return null;
        }
        if (firstControl.value !== secondControl.value) {
            secondControl.setErrors({ matchValueError: true });
        } else {
            secondControl.setErrors(null);
        }
    };
}
