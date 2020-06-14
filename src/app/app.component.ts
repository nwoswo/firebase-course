import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;
    isLoggedout$: Observable<boolean>;
    pictureUrl$: Observable<string>;

    constructor( private afAuth: AngularFireAuth ){}


    ngOnInit(): void {
     
      this.afAuth.authState.subscribe( user => console.log(user)  );

      this.isLoggedIn$ = this.afAuth.authState.pipe( map(user => !!user) );

      console.log('isLoggedIn=',this.isLoggedIn$);
      this.isLoggedout$ = this.isLoggedIn$.pipe( map( loggedin => !loggedin ) );

      this.pictureUrl$ = this.afAuth.authState.pipe( map(user => user ?  user.photoURL : null) );

    }


    logout() {
      this.afAuth.auth.signOut();
    }

}
