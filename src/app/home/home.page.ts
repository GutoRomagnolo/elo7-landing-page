import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {
  public title = "home-page";
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
}
