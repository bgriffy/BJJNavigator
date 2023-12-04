import { Injectable } from '@angular/core';
import { Gym } from '../models/Gym'; 
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root', 
})

export class GymService {
  private apiUrl :string = "http://localhost:5000/Gyms";

  constructor(private http: HttpClient) { }

  getGyms() : Observable<Gym[]> {
    return this.http.get<Gym[]>(this.apiUrl);
  }

  deleteGym (gym: Gym): Observable<Gym>{
    const deletionUrl = `${this.apiUrl}/${gym.id}`;
    return this.http.delete<Gym>(deletionUrl);
  }

  updateGym (gym: Gym): Observable<Gym>{
    const updateUrl = `${this.apiUrl}/${gym.id}`;
    return this.http.put<Gym>(updateUrl, gym, httpOptions);
  }

  addGym (gym: Gym): Observable<Gym>{
    return this.http.post<Gym>(this.apiUrl, gym, httpOptions);
  }
}

