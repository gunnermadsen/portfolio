import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  loading: boolean = false
  submitted: boolean = false
  returnUrl: string
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      UserName: ['madgunner', Validators.compose([ Validators.required ])],
      Password: ['Megatron1!', Validators.compose([ Validators.required ])]
    })

    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard'
  }

  public get f() {
    return this.loginForm.value
  }

  public get c() {
    return this.loginForm.controls
  }

  public onSubmit() {
    this.submitted = true

    if (this.loginForm.invalid) {
      return
    }

    const user = {
      UserName: this.f.UserName,
      Password: this.f.Password
    }


  }

  public getErrorMessage(control: string, error: string): string {
    let message: string
    switch(error) {
      case 'required': {
        message = `${control} is required`
        break
      }
      case 'invalidCharacters': {
        message = 'You are entering invalid characters. <>^*?+=[]{}"\'|\/= are not allowed'
        break
      }
    }
    return this.loginForm.controls[control].hasError(error) ? message : ''
  }
}
