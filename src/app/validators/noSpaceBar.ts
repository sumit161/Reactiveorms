import { AbstractControl, ValidationErrors } from '@angular/forms';

export class noSpaceBarValidator {
  public static noSpace( AnyParControl: AbstractControl): null | ValidationErrors {
    let val = AnyParControl.value as string;
    if (!val) {
      return null;
    }
    if(val.includes(" ")){
      return {
        noSpaceerror :"Space is not allowed"
      }
    }else{
      return null
    }
  }
}
