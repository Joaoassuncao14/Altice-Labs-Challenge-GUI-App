import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculeSequenceService {

  private apiUrl = 'http://localhost:8080/labseq'

  constructor(private http: HttpClient) { }

  getLabseqResult(numb: number): Observable<string> {
    return this.http.get(`${this.apiUrl}/${numb}`, { responseType: 'text' }).pipe(
      catchError((error: any) => {
        alert("ERROR: The index may be any nonnegative integer number")
        return throwError(error);
      })
    );
  }
  
}
