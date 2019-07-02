import { Router } from '@angular/router';
import { AuthService } from "./auth.service";
import { Component, SimpleChanges } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent {
  constructor(private authService: AuthService, private router: Router) {}
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe(
        responseData => {
          console.log(responseData);
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
        errorMessage => {
          this.error = errorMessage; //Alternate approach usig observable in lecture 294
          this.isLoading = false;    // errorr is handled in auth.service.ts and errorMessage is returned
        }
      );
    } else {
      this.authService.signup(email, password).subscribe(
        responseData => {
          console.log(responseData);
          this.isLoading = false;
          this.router.navigate(['/recipes']);
        },
        errorMessage => {
          this.error = errorMessage;
          this.isLoading = false;    // errorr is handled in auth.service.ts and errorMessage is returned
        }
      );
    }

    form.reset();
  }
}
