import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  // private sub: Subject<any>;

  constructor(private http: HttpClient) {
    // this.sub = new Subject();
  }

  getUsers(): Observable<any> {
    return this.http.get('/api/users');
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(`/api/users/${id}`);
  }

  removeUser(id: any): Observable<any> {
    return this.http.delete(`/api/users/${id}`);
      // .map(() => {
      //   this.sub.next();
      //   return null;
      // });
  }

}
