  import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cate } from 'src/app/models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CateService {
  public URL: string = 'http://localhost:8000/api/hotel';
  
  constructor(public http: HttpClient) {}

  public getAllCategoria(): Observable<Cate[]> {
    return this.http.get<Cate[]>(`${this.URL}/ListHo`);
  } 

  public getCategoriaById(id: number): Observable<Cate> {
    return this.http.get<Cate>(`${this.URL}/BuscarHo/${id}`);
  }

  public createCategoria(categoria: Cate): Observable<Cate> {
    return this.http.post<Cate>(`${this.URL}/InsertHo`,categoria);
  }

  public updateCategoria(id: number, categoria: Cate): Observable<Cate> {
    return this.http.put<Cate>(`${this.URL}/EditarHo/${id}`,categoria);
  }

  public deleteCategoria(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/DeleteHo/${id}`);
  }
}
