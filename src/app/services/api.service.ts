import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserTasks(): Observable<any> {
    return this.http.get(`${environment.serverUrl}/todos`,  {params: {userId: '1'}});
  }

  addNewUserTask(data) {
    return this.http.post(`${environment.serverUrl}/todos`, data);
  }

}
