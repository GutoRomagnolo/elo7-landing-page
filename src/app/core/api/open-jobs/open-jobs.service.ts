import { environment } from './../../../../environments/env';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClientService } from '../../http-client/http-client.service';
import { OpenJobs } from './interface';

@Injectable({
  providedIn: 'root'
})

export class OpenJobsService {
  constructor( private httpClient: HttpClientService ) {}

  public searchActiveOpenJobs(): Observable<OpenJobs[]> {
    const url = environment.openjobs;
    return this.httpClient.get<{ vagas: [] }>(url).pipe(
      map(openJobsObject => {
        return this.getActiveOpenJobs(openJobsObject.vagas)
      })
    )
  }

  private getActiveOpenJobs(rawOpenJobs: []): OpenJobs[] {
    return this.mapRawOpenJobsToInterface(rawOpenJobs)
  }

  private mapRawOpenJobsToInterface(rawOpenJobs: []): OpenJobs[] {
    const activeOpenJobs: OpenJobs[] = [];
    rawOpenJobs.forEach((rawOpenJob: any) => {
      if (rawOpenJob.ativa) {
        const mappedOpenJob: OpenJobs = {
          position: rawOpenJob.cargo,
          active: rawOpenJob.ativa,
          link: rawOpenJob.link,
          location: rawOpenJob.localizacao 
            ? `${rawOpenJob.localizacao.bairro} - ${rawOpenJob.localizacao.cidade}, ${rawOpenJob.localizacao.pais}` 
            : 'Remoto'
        }
        activeOpenJobs.push(mappedOpenJob);
      }
    })
    return activeOpenJobs
  }
}
