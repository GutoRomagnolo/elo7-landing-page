import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OpenJobs } from "@app/core";
import { OpenJobsResolveService } from "./services/resolve.service"

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit {
  public title = "home-page";
  public openJobs: OpenJobs[] = [];

  public teamMembers: Array<{ name: String; url: String }> = [
    {
      name: "Camila",
      url: "./../assets/images/camila-image.png",
    },
    {
      name: "Guto",
      url: "./../assets/images/guto-image.png",
    },
    {
      name: "David",
      url: "./../assets/images/david-image.png",
    },
    {
      name: "Beatriz",
      url: "./../assets/images/beatriz-image.png",
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private openJobsResolveService: OpenJobsResolveService
  ) {}

  ngOnInit() {
    this.loadOpenJobs()
  }

  private loadOpenJobs(): any {
    this.openJobs = this.openJobsResolveService.resolve();
    console.log('this.openJobs', this.openJobs)
  }
}
