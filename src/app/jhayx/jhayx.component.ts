import { Component, OnInit } from "@angular/core";
import {
  faLinkedin,
  faGithub,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { mobileApps, webApps, companies } from "../jhayX-store";
@Component({
  selector: "app-jhayx",
  templateUrl: "./jhayx.component.html",
  styleUrls: ["./jhayx.component.scss"]
})
export class JhayxComponent implements OnInit {
  faTwitter = faTwitter;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFileAlt = faFilePdf;
  mobileApps = mobileApps;
  webApps = webApps;
  companies = companies;
  constructor() {}

  ngOnInit() {}
}
