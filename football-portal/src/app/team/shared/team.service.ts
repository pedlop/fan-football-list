import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamService {

  constructor(private http: HttpClient) { }

}
