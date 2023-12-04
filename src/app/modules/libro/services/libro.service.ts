import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Autr } from 'src/app/models/autor';
import { Cate } from 'src/app/models/categoria';
import { Editor } from 'src/app/models/editorial';
import { Lect } from 'src/app/models/lector';
import { Libr } from 'src/app/models/libro';


@Injectable({
  providedIn: 'root'
})
export class LibroService {
  public apiUrl = 'http://localhost:8000/api/reserva';
  public autoresUrl = 'http://localhost:8000/api/cliente';
  public editorialesUrl = 'http://localhost:8000/api/sucursal';
  public categoriasUrl = 'http://localhost:8000/api/hotel';
  public xUrl = 'http://localhost:8000/api/vuelo';

  constructor(public http: HttpClient) {}

  agregarLibro(libro: Libr): Observable<Libr> {
    return this.http.post<Libr>(`${this.apiUrl}/InsertRese`, libro);
  }
//fora
  obtenerAutores(): Observable<Autr[]> {
    return this.http.get<Autr[]>(`${this.autoresUrl}/ListCli`);
  }

  obtenerEditoriales(): Observable<Editor[]> {
    return this.http.get<Editor[]>(`${this.editorialesUrl}/ListSucu`);
  }

  obtenerCategorias(): Observable<Cate[]> {
    return this.http.get<Cate[]>(`${this.categoriasUrl}/ListHo`);
  }

  obtenerLector(): Observable<Lect[]> {
    return this.http.get<Lect[]>(`${this.xUrl}/ListVuelo`);
  }







  listarLibros(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ListRese`);
  }

//DeleteBook
  deleteLibro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteRese/${id}`);
  }

  actualizarLibro(id: number, libro: Libr): Observable<Libr> {
    return this.http.put<Libr>(`${this.apiUrl}/EditRese/${id}`, libro);
  }
  
obtenerLibroPorId(id: number): Observable<Libr> {
  return this.http.get<Libr>(`${this.apiUrl}/ListCli/${id}`);
}

listarLibrosPorCategoria(categoriaId: number): Observable<Libr[]> {
  return this.http.get<Libr[]>(`${this.apiUrl}/ListSucu/${categoriaId}`);
}

listarLibrosPorAutor(autorId: number): Observable<Libr[]> {
  return this.http.get<Libr[]>(`${this.apiUrl}/ListHo/${autorId}`);
}

listarLibrosPorLector(lectorId: number): Observable<Lect[]> {
  return this.http.get<Lect[]>(`${this.xUrl}/ListVuelo/${lectorId}`);
}

}
  