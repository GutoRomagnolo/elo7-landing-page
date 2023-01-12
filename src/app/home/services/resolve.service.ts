import { Injectable } from "@angular/core";
import { OpenJobsService, OpenJobs } from "@app/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OpenJobsResolveService {
  public rawOpenJobs: string[] = []

  constructor(private openJobsService: OpenJobsService) {}
  private activeOpenJobs: OpenJobs[] = [];

  public resolve(): any {
    this.loadOpenJobs().subscribe((data: any) => {
      this.destructureObjectResponse(data)
      this.mapRawOpenJobs()
      console.log(this.activeOpenJobs)
    });
  }

  public destructureObjectResponse(openJobsObject: any): void {
    for(const key in openJobsObject) {
      this.rawOpenJobs.push(...openJobsObject[key]);
    }
  }

  public mapRawOpenJobs(): void {
    this.rawOpenJobs.forEach((rawOpenJob: any) => {
      if (rawOpenJob.ativa) {
        const mappedOpenJob: OpenJobs = {
          position: rawOpenJob.cargo,
          active: rawOpenJob.ativa,
          link: rawOpenJob.link,
          location: rawOpenJob.localizacao || 'remoto'
        }
        this.activeOpenJobs.push(mappedOpenJob)
      }
    })
  }

  public loadOpenJobs(): Observable<[]> {
    return this.openJobsService.get();
  }
}
