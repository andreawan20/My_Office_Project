import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(
    //public api: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  hide: boolean = true;

  //form validation
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.minLength(6),Validators.required]);

  login()
  {
  //   this.api.login(this.user.email, this.user.password).subscribe(res=>{
  //     localStorage.setItem('appToken',JSON.stringify(res));
  //     this.router.navigate(['admin/dashboard']);
  //   },error=>{
  //     alert('tidak dapat login');
  //   });
  }
}