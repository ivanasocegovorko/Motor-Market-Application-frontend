import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {

  Email: string = '';
  password: string = '';
 
  constructor(private userService: UserService, private router: Router) { }
 
  ngOnInit(): void {
  }
 
  signin(){
    this.userService.login(this.Email, this.password).subscribe((response:any) => {
        this.router.navigateByUrl('/vehicle');
    }, error => {
        console.log('Error: ', error);
        window.alert('Unsuccessful Login');
        this.router.navigateByUrl('/signin');
    });
  }
 }