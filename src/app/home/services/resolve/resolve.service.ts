import { Injectable } from "@angular/core";
import { OpenJobsService, OpenJobs } from "@app/core";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OpenJobsResolveService {
  constructor(
    private openJobsService: OpenJobsService
  ) {}

  public resolve(): Observable<OpenJobs[]> {
    return this.openJobsService.searchActiveOpenJobs()
  }
}
