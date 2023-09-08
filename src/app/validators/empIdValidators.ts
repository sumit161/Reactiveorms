import { AbstractControl, ValidationErrors } from "@angular/forms";

export class empIdValidators {
  public static isempIdValid(AnyPara : AbstractControl): ValidationErrors | null{
    let val = AnyPara.value as string;
    let regexp = /^[a-z]\d{3}$/i;
    let isValid = regexp.test(val)
  if(val){
    if(isValid){
      return null
    }else{
      return {
        inValidEmpId : "emp id shou;d Starts with  1 alphabet and ends with 3 number"
      }
    }
  }else{
    return null
  }
  }
}
