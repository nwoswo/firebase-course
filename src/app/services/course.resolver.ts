


import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Course} from '../model/course';
import {Observable, of} from 'rxjs';
import { CoursesService } from './courses.service';



@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(private coursesService: CoursesService) {
        console.log('-----------CourseResolver---------');
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

        console.log(route.paramMap.get('courseUrl'));

        const courseUrl = route.paramMap.get('courseUrl');
        console.log(route.paramMap.get('courseUrl'));
        return this.coursesService.findCourseByUrl(courseUrl);

        // return of(undefined);

    }

}

