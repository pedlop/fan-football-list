import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamService {

  constructor(private http: HttpClient) { }

  create(team): Observable<any> {
    return this.http.post('/api/teams', team);
  }

  getAll(): Observable<any> {
    return this.http.get('/api/teams');
  }

}
