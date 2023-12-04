import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lect } from 'src/app/models/lector';

@Injectable({
  providedIn: 'root'
})
export class LectoresService {
  public URL: string = 'http://localhost:8000/api/vuelo';
  
  constructor(public http: HttpClient) {}

  public getAllLector(): Observable<Lect[]> {
    return this.http.get<Lect[]>(`${this.URL}/ListVuelo`);
  } 

  public getLectorById(id: number): Observable<Lect> {
    return this.http.get<Lect>(`${this.URL}/BuscarVuelo/${id}`);
  }

  public createLector(lector: Lect): Observable<Lect> {
    return this.http.post<Lect>(`${this.URL}/InsertVuelo`,lector);
  }

  public updateLector(id: number, lector: Lect): Observable<Lect> {
    return this.http.put<Lect>(`${this.URL}/EditarVuelo/${id}`,lector);
  }

  public deleteLector(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/DeleteVuelo/${id}`);
  }
}
