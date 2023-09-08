import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './const/validation';
import { empIdValidators } from './validators/empIdValidators';
import { noSpaceBarValidator } from './validators/noSpaceBar';
import { orbiddenvalidator } from './validators/forbiddenName';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';
  signupForm!: FormGroup;
  genderArray: Array<string> = ['Male', 'Female', 'others'];
  countriesName: Array<string> = ['india', 'bangladesh'];
  ngOnInit(): void {
    this.CreateSignupForm();
    this.f['password'].valueChanges.subscribe((res: any) => {
      // console.log(res);
      if (this.f['password'].valid) {
        this.f['confirmPassword'].enable();
      } else {
        this.f['confirmPassword'].disable();
      }
    });
  }

  //CreateSignupForm
  CreateSignupForm() {
    this.signupForm = new FormGroup({
      userName: new FormControl(null, [
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(4),
        noSpaceBarValidator.noSpace,
      ]),
      Email: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.email),
        orbiddenvalidator.forbiddenName,
      ]),
      gender: new FormControl(null),
      empId: new FormControl(null, [
        Validators.required,
        empIdValidators.isempIdValid,
      ]),
      skills: new FormArray([new FormControl('null')]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(CustomRegex.password),
      ]),
      confirmPassword: new FormControl({ value: null, disabled: true }),
      CurrentAddress: new FormGroup({
        country: new FormControl(null),
        state: new FormControl(null),
        city: new FormControl(null),
        zipcode: new FormControl(null),
      }),
    });
  }

  //onSignUp
  onSignUp() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
  // 1st way
  get getUserNameControl() {
    return this.signupForm.get('userName') as FormControl;
  }
  // 2nd way
  get f() {
    return this.signupForm.controls;
  }
  get skillsfromArray() {
    return this.signupForm.get('skills') as FormArray;
  }
  addMoreSkills() {
    if (this.skillsfromArray.length < 5) {
      let skillCotrol = new FormControl(null);
      this.skillsfromArray.push(skillCotrol);
    } else {
      alert`we add only 5 skills`;
    }
  }
  DeleteSkills() {
    // this.skillsfromArray.pop()
  }
}
