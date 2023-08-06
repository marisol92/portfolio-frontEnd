import { Injectable } from '@angular/core';
import { Experience } from '../model/experience';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL= "http://localhost:8080/experience/";

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.URL + `detail/${id}`);
  }

  public save(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', experience);
  }

  public update(id: number, experience: Experience): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, experience);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`); 
  }
}
