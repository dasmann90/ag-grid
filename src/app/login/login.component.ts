import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  
  constructor(
      private router: Router,
      private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      rememberme: [false],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      var data = {
        username: this.form.value.username,
        password: this.form.value.password,
      }
      if(data['username']=='mk@gmail.com'){
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('user_type', 'admin');
         this.router.navigate(['/']);
      }else if(data['username']=='mkd@gmail.com'){
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/']);
      }else{
        
      }
    }else{
      this.markFormGroupTouched(this.form);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control: { markAsTouched: () => void; controls: any[]; }) => {
      control.markAsTouched();
      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }


}
