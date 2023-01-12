import { environment } from '../../../environments/env';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../../http-client/http-client.service';

@Injectable({
  providedIn: 'root'
})

export class OpenJobsService {
  constructor( private httpClient: HttpClientService ) {}

  public get(): Observable<[]> {
    const url = environment.openjobs;
    return this.httpClient.get<[]>(url);
  }
}
