import { Controller, Get } from '@nestjs/common';
import { Course } from '../../../shared/course';
import { findAllCourses } from '../../db-data';

@Controller('api')
export class CoursesController {

  @Get('courses')
  async findAllCourses(): Promise<Course[]> {
    return findAllCourses() as unknown[] as Course[];
  }

  @Get('hello-courses')
  async helloCourses(): Promise<string> {
    return 'Welcome to the api for courses';
  }

}
