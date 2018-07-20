import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDrawerToggleResult, MatRipple, MatSidenav} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('formatAlignGroup')
  matButtonToggleGroup: ElementRef;
  @ViewChild(MatRipple) ripple: MatRipple;
  constructor() { }

  ngOnInit() {
  }
  triggerRipple(): void {
    const point1 = this.ripple.launch(0, 0, {color: 'pink', centered: true, persistent: true, radius: 50});
    const point2 = this.ripple.launch(0, 0, {color: 'yellow', centered: true, persistent: true, radius: 20});
    setTimeout(() => {
      point1.fadeOut();
    }, 500);

  }
  toggleSideNav(sideNav: MatSidenav) {
    sideNav.toggle().then((result: MatDrawerToggleResult) => {
      console.log(result);
    });
  }
  clearRipple(): void {
    this.ripple.fadeOutAll();
  }
}
