import { Component, OnInit } from '@angular/core';
import {Application} from '../../models/Appplication';
import {ApplicationService} from '../../services/application/application.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-application',
  templateUrl: './update-application.component.html',
  styleUrls: ['./update-application.component.css']
})
export class UpdateApplicationComponent implements OnInit {
  application: Application = new Application();
  errorMessage = {
    hidden: true,
    msg: 'Please fill-in all of the fields before submitting.'
  };

  constructor(private applicationService: ApplicationService, private activeRoute: ActivatedRoute, private router: Router) {
    activeRoute.paramMap.subscribe(paramData => {
      this.application['_id'] = paramData.get('id');
    });
  }

  ngOnInit(): void {
    this.applicationService.getApplicationByID(this.application['_id']).subscribe(res => {
      this.application = res;
    }, err => {
      if (err.status === 404) {
        this.router.navigateByUrl('/appplications');
        return;
      }
      this.errorMessage.msg = err.error.description;
      this.errorMessage.hidden = false;
    });
  }
  submitUpdate() {
    const validateResult = this.applicationService.validateApplication(this.application);
    if (validateResult.success) {
      this.errorMessage.hidden = true;
      this.applicationService.updateApplication(this.application).subscribe(res => {
        this.router.navigateByUrl('/appplications');
      }, err => {
        this.errorMessage.msg = err.error.description;
        this.errorMessage.hidden = false;
      });
    } else {
      this.errorMessage.msg = validateResult.msg;
      this.errorMessage.hidden = false;
      return;
    }
  }
  hideErrorMessage() {
    this.errorMessage.hidden = true;
  }

  setErrorMessageClasses() {
    return {
      'error-message': true,
      hidden: this.errorMessage.hidden
    };
  }
}
