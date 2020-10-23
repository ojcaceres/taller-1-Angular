import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { dataCourses } from './dataCourses';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Array<Course>;
  getCourseList() {
    this.courseService.getCourses().subscribe(cs => {
      this.courses = cs;
    });
  }

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.getCourseList();
  }

}
