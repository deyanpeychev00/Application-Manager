import { Component, OnInit } from '@angular/core';
import {ApplicationService} from '../../services/application/application.service';
import { Application } from '../../models/Appplication';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  applications: Application[];
  constructor(private applicationService: ApplicationService) { }

  ngOnInit(): void {
    this.retrieveAllApplications();
  }
  retrieveAllApplications() {
    this.applicationService.getApplications().subscribe(applications => {
      this.applications = applications;
      },
      err => {
        console.log(err);
      });
  }
  removeApplication(application: Application) {
    this.applicationService.deleteApplication(application._id).subscribe(res => {
      this.applications = this.applications.filter(item => item._id !== application._id);
    });
  }

}
