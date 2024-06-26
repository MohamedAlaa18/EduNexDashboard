import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/model/icourse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  URL = environment.API_KEY;

  constructor(private httpClient: HttpClient) { }

  getAllCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(`${this.URL}/api/Courses`);
  }
}
