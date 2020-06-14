import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { CoursesService } from '../services/courses.service';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  courses$: Observable<Course[]>;
  beninnersCourses$: Observable<Course[]>;
  advancedCourses$: Observable<Course[]>;


  courses2: Course[];

    constructor(private coursesService : CoursesService) {

    }

    ngOnInit() {


      console.log('--------------HomeComponent----------------');



      this.reloadCourses();
    }
    reloadCourses() {

      
      this.courses$ = this.coursesService.loadAllCourses();
    
      this.beninnersCourses$ = this.courses$.pipe(
        map( courses => courses.filter( course => course.categories.includes('BEGINNER') ) )
      );
  
      this.advancedCourses$ = this.courses$.pipe(
        map( courses => courses.filter( course => course.categories.includes('ADVANCED') ) )
      );
    }

    // this.courses$ = this.db.collection('courses').snapshotChanges()
    //     .pipe( map( snaps => {
    //         return snaps.map( snap => {
    //             return <Course> {
    //               id: snap.payload.doc.id,
    //                 ...snap.payload.doc.data() as {}
    //                 };
    //         });
    //     } ) );





    // console.log( this.courses$);

    //     this.db.collection('courses').stateChanges()
    //     .subscribe( snaps => {
    //     this.courses2 = snaps.map( snap => {
    //       return <Course> {
    //         id: snap.payload.doc.id,
    //         ...snap.payload.doc.data() as {}
    //       }
    //     })
  
    //     console.log(this.courses2);
  
    //   });

    


}
