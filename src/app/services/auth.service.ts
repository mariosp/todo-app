import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null;
  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = JSON.parse(localStorage.getItem('user')) || null;
    this.fireAuth.authState.subscribe(user => {
      this.user = user;
      if (this.user){
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
        this.router.navigate(['sign-in']);
      }
    });
  }

  loginWithGoogle(): Promise<any> {
    return this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then( success => {
        this.user = success.user;
        this.router.navigate(['']);
      })
      .catch(error => console.log('closed popup or error'));
  }

  get isLoggedIn(): boolean {
    return  this.user  !==  null;
  }

  async logout(){
    await this.fireAuth.signOut();
    this.router.navigate(['sign-in']);
  }
}
