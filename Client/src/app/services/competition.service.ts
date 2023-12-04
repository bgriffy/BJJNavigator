import { Injectable } from '@angular/core';
import { Competition } from '../models/Competition'; 
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

export class CompetitionService {
  private apiUrl :string = "http://localhost:5000/Competitions";

  constructor(private http: HttpClient) { }

  getCompetitions() : Observable<Competition[]> {
    return this.http.get<Competition[]>(this.apiUrl);
  }

  deleteCompetition (competition: Competition): Observable<Competition>{
    const deletionUrl = `${this.apiUrl}/${competition.id}`;
    return this.http.delete<Competition>(deletionUrl);
  }

  updateCompetition (competition: Competition): Observable<Competition>{
    const updateUrl = `${this.apiUrl}/${competition.id}`;
    return this.http.put<Competition>(updateUrl, competition, httpOptions);
  }

  addCompetition (competition: Competition): Observable<Competition>{
    return this.http.post<Competition>(this.apiUrl, competition, httpOptions);
  }
}

