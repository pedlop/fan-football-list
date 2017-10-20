import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Player } from './player';

@Injectable()
export class PlayerService {

  constructor(private http: HttpClient) { }

  create(player): Observable<any> {
    return this.http.post('/api/players', player);
  }

  getAll(): Observable<any> {
    return this.http.get('/api/players');
  }

  findById(id: any): Observable<any> {
    return this.http.get(`/api/players/${id}`);
  }

  update(id: any, player: Player): Observable<any> {
    return this.http.put(`/api/players/${id}`, player);
  }

  remove(id: any): Observable<any> {
    return this.http.delete(`/api/players/${id}`);
  }

  // findByPosition(position: any): Observable<any> {
  //   return this.http.get('/api/players', position);
  // }

}
