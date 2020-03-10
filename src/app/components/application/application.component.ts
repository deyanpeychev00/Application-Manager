import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Application} from '../../models/Appplication';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  @Input() application;
  @Output() deleteApplicationEvent: EventEmitter<Application> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  displayDeleteModal() {
    document.getElementById(this.application._id).style.display = "block";
  }
  closeDeleteModal() {
    document.getElementById(this.application._id).style.display = "none";
  }
  deleteApplication() {
    this.closeDeleteModal();
    this.deleteApplicationEvent.emit(this.application);
  }
}
