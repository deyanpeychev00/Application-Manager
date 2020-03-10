import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';

@Injectable()

export class ApplicationService {
  database;

  constructor(private http: HttpClient, private authService: AuthService) {
    this.database = this.authService.getDatabaseCredentials();
  }

  validateApplication(application) {
    if (!application.name || application.name === null || application.name.toString().trim() === '') {
      return {
        success: false,
        msg: 'Please fill the name before submitting.'
      };
    }
    if (!application.email || application.email === null || application.email.toString().trim() === '') {
      return {
        success: false,
        msg: 'Please fill the email before submitting.'
      };
    }
    if (!application.age || application.age === null || application.age.toString().trim() === '') {
      console.log(application.age);
      return {
        success: false,
        msg: 'Please fill the age before submitting.'
      };
    }
    if (Number(application.age) < 0) {
      return {
        success: false,
        msg: 'Age cannot be a negative number.'
      };
    }
    if (!application.phone_number || application.phone_number === null || application.phone_number.toString().trim() === '') {
      return {
        success: false,
        msg: 'Please fill the phone number before submitting.'
      };
    }
    if (!application.communication_way || application.communication_way === null
      || application.communication_way.toString().trim() === '') {
      return {
        success: false,
        msg: 'Please check preferred form of communication before submitting.'
      };
    }
    if (!application.english_level || application.english_level === null || application.english_level.toString().trim() === '') {
      return {
        success: false,
        msg: 'Please select english level before submitting.'
      };
    }
    if (!application.available_to_start || application.available_to_start === null
      || application.available_to_start.toString().trim() === '') {
      return {
        success: false,
        msg: 'Please select start availability date level before submitting.'
      };
    }
    return {
      success: true,
      msg: ''
    };
  }

  getApplications(): Observable<any> {
    return this.http.get(`${this.database.url}/appdata/${this.database.key}/applications?query={}&sort={"_kmd.lmt": -1}`, {
      headers: new HttpHeaders()
        .set('Authorization', 'Basic ' + this.database.token)
        .set('Content-Type', 'application/json')
    });
  }
  getApplicationByID(applicationID): Observable<any> {
    return this.http.get(`${this.database.url}/appdata/${this.database.key}/applications/${applicationID}`, {
      headers: new HttpHeaders()
        .set('Authorization', 'Basic ' + this.database.token)
        .set('Content-Type', 'application/json')
    });
  }
  createApplication(application): Observable<any> {
    const body = JSON.stringify(application);
    return this.http.post(`${this.database.url}/appdata/${this.database.key}/applications`, body, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + this.database.token)
        .set('Content-Type', 'application/json')
    });
  }
  updateApplication(application): Observable<any> {
    const body = JSON.stringify(application);
    return this.http.put(`${this.database.url}/appdata/${this.database.key}/applications/${application._id}`, body, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + this.database.token)
        .set('Content-Type', 'application/json')
    });
  }
  deleteApplication(applicationID): Observable<any> {
    return this.http.delete(`${this.database.url}/appdata/${this.database.key}/applications/${applicationID}`, {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + this.database.token)
        .set('Content-Type', 'application/json')
    });
  }

}
