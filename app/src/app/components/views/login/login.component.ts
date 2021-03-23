import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
  });
  subscription: any;
  hidePwd: boolean = true;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    this.subscription = this.apiService.login(this.form.value).subscribe((data:any) => {
      localStorage.setItem('token', data.token);
      this.router.navigate(["/movies"]);
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
