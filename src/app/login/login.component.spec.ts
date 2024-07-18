import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Perform login logic here, such as calling an authentication service
    if (this.username === 'admin' && this.password === 'password') {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}