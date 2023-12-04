import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autr } from 'src/app/models/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  public URL: string = 'http://localhost:8000/api/cliente';
  
  constructor(public http: HttpClient) {}

  public getAllAutor(): Observable<Autr[]> {
    return this.http.get<Autr[]>(`${this.URL}/ListCli`);
  } 

  public getAutorById(id: number): Observable<Autr> {
    return this.http.get<Autr>(`${this.URL}/BuscarCli/${id}`);
  }

  public createAutor(autor: Autr): Observable<Autr> {
    return this.http.post<Autr>(`${this.URL}/InsertCli`,autor);
  }

  public updateAutor(id: number, autor: Autr): Observable<Autr> {
    return this.http.put<Autr>(`${this.URL}/EditarCli/${id}`,autor);
  }

  public deleteAutor(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/DeleteCli/${id}`);
  }
}
