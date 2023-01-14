import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OpenJobs } from "@app/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent implements OnInit {
  public activeOpenJobs: OpenJobs[] = [];

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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(routeResponse => {
      if (routeResponse.activeOpenJobs) {
        this.activeOpenJobs = routeResponse.activeOpenJobs;
        this.formatOpenJobsLocations();
      }
    })
  }

  public scrollToElement($element: any): void {
    $element.scrollIntoView({
      behavior: "smooth", 
      block: "start", 
      inline: "nearest"
    });
  }

  public redirectToElo7Page(): void {
    window.open('https://elo7.gupy.io', '_blank')
  }

  private formatOpenJobsLocations(): void {
    this.activeOpenJobs.forEach(activeJob => {
      if (activeJob.location != 'Remoto') {
        activeJob.formatedLocation = `
          ${activeJob.location.neighborhood} - ${activeJob.location.city}, ${activeJob.location.country}
        `;
      }
    })
  }
}
