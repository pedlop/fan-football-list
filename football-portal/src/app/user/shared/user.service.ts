import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  // private sub: Subject<any>;

  constructor(private http: HttpClient) {
    // this.sub = new Subject();
  }

  getAll(): Observable<any> {
    return this.http.get('/api/users');
  }

  findById(id: any): Observable<any> {
    return this.http.get(`/api/users/${id}`);
  }

  create(user: any): Observable<any> {
    return this.http.post('/api/users', user);
  }

  remove(id: any): Observable<any> {
    return this.http.delete(`/api/users/${id}`);
      // .map(() => {
      //   this.sub.next();
      //   return null;
      // });
  }

}
