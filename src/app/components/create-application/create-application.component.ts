import {Component, OnInit} from '@angular/core';
import {Application} from '../../models/Appplication';
import {ApplicationService} from '../../services/application/application.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-application',
  templateUrl: './create-application.component.html',
  styleUrls: ['./create-application.component.css']
})
export class CreateApplicationComponent implements OnInit {
  application: Application = new Application();
  errorMessage = {
    hidden: true,
    msg: 'Please fill-in all of the fields before submitting.'
  };

  constructor(private applicationService: ApplicationService, private router: Router) {
  }

  ngOnInit(): void {
  }
  fillApplicationModel() {
    if (!this.application.study_from_home) {
      this.application.study_from_home = false;
    }
    if (!this.application.tech_skills) {
      this.application.tech_skills = '';
    }
    if (!this.application.personal_presentation) {
      this.application.personal_presentation = '';
    }
  }
  submitCreate() {
    this.fillApplicationModel();

    const validateResult = this.applicationService.validateApplication(this.application);
    if (validateResult.success) {
      this.errorMessage.hidden = true;
      this.applicationService.createApplication(this.application).subscribe(res => {
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
