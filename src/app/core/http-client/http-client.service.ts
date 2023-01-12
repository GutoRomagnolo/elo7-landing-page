import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError, Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class HttpClientService {
  constructor(private readonly httpClient: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
