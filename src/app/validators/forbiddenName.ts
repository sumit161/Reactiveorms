import { AbstractControl, ValidationErrors } from '@angular/forms';

export class orbiddenvalidator {
  static forbiddenName(AnyPara: AbstractControl): ValidationErrors | null {
    let val = AnyPara.value as string;
    if(!val){
      return null;
    }

    if(val.toLowerCase().trim().includes("admin")){
      return {
        forbiddenError : 'Admin name is not allowe in email'
      }
    }else{
      return null
    }
  }
}
