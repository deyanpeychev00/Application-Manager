import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navbar = {
    toggled: false,
  };
  constructor() { }

  ngOnInit(): void {
  }
  setNavbarClasses() {
    return {
      topnav: true,
      responsive: this.navbar.toggled
    };
  }
  toggleNavbar() {
    this.navbar.toggled = !this.navbar.toggled;
  }
}
