import { Injectable } from '@angular/core';
import { Observable, observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AutoService {

baseUri: string = 'http://localhost:4000/api';
//baseUri: string = ' https://automovilc.herokuapp.com/api'
  headers = new HttpHeaders().set('content-Type', 'application/json')

  constructor(private http:HttpClient) { }


  //metodo para agregar un nuevo empleado
  agregarAuto(data):Observable<any>{
    let url = `${this.baseUri}/create`;
    return this.http.post(url,data).pipe(catchError(this.errorMgmt));
  }

  //metodo para obtener los empleados
  getAutos(){
    return this.http.get(`${this.baseUri}`);
  }

  //metodo que obtiene un solo empleado por su id
  getAuto(id):Observable<any>{
    let url = `${this.baseUri}/auto/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res:Response) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );


  }

  //metodod para actulizar un empleado
  updateAuto(id,data):Observable<any>{
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, {headers: this.headers}).pipe(
      catchError(this.errorMgmt)
    );
  }

  //metodo para elimanar un empleado
  deleteAuto(id): Observable<any>{
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, {headers: this.headers}).pipe(
      catchError(this.errorMgmt)
    );
  }


  //manejador de erores
  errorMgmt(error:HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      //obtenemos el error del lado del cliente
      errorMessage = error.error.message;
    }else{
      //obtenemos el error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
