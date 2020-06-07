import { Component, OnInit, ViewEncapsulation } from '@angular/core';


import  * as firebase  from 'firebase/app';
import 'firebase/firestore';
import { Course } from '../model/course';



// var config = {
//   apiKey: "AIzaSyDAdoefqX5OqjkD3BkW25ZAL6XYZMo4Vz8",
//   authDomain: "fir-course-17549.firebaseapp.com",
//   databaseURL: "https://fir-course-17549.firebaseio.com",
//   projectId: "fir-course-17549",
//   storageBucket: "fir-course-17549.appspot.com",
//   messagingSenderId: "170806523820",
//   appId: "1:170806523820:web:a3181632d54d076a0bec09"
// };

// firebase.initializeApp(config);

// const db = firebase.firestore();

// const settings = {timestampsInSnapshots:true};

// db.settings(settings);

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // db.collection('courses').get()

    //   .then( snaps => {
      
    //       //console.log(snaps)
    //       //console.log('---------------------------')
    //       const courses : Course[] = snaps.docs.map(  snap => { 
    //           return <Course> {
    //             id : snap.id,
    //             ...snap.data()
    //           }
    //       });
    //       console.log(courses)
    //       // console.log( snaps.docs.map( snap => snap.data()) );
        
    //     }
    //   );

  }

}
