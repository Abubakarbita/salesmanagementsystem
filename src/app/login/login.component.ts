import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Implement login logic here
    if (this.email === 'test@example.com' && this.password === 'password') {
      // Navigate to the next page on successful login
      this.router.navigate(['']);
    } else {
      alert('Invalid login credentials');
    }
  }
}
