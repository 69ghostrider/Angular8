import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form',{static:false}) signupForm: NgForm
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({    //resetting the form value on click of a button
    //   userData:{                  //will over write all the previously entered data
    //     username : suggestedName,
    //     email : ''
    //   },
    //   secret: 'pet',
    //   questionAnswer : '',
    //   gender: 'female'
    // })

    this.signupForm.form.patchValue({
      userData:{
        username : suggestedName,
        email : suggestedName+'@gmail.com'  //can change only specific attributes on form
      }
    })
  }
  defaultQuestion = 'pet';
  answer ='';
  genders = ['male', 'female'];
  defaultRadio = this.genders[0];
  user ={
    username : '',
    email : '',
    secretQuestion : '',
    answer : '',
    gender : ''
  }
  submitted=false;
  // onSubmit(form: NgForm){
  //   console.log(form)
  // }

  onSubmit(){
   this.submitted=true;
   this.user.username = this.signupForm.value.userData.username;
   this.user.email = this.signupForm.value.userData.email;
   this.user.secretQuestion = this.signupForm.value.secret;
   this.user.answer = this.signupForm.value.questionAnswer;
   this.user.gender = this.signupForm.value.gender;

   this.signupForm.reset(); //reset the form 
  }
}
