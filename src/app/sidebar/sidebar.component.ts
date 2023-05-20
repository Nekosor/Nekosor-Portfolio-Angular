import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarOpen = false;
  showHamburgerIcon = false;

  ngOnInit(): void {
    this.checkScreenWidth();
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any): void {
    this.checkScreenWidth();


  }
  private checkScreenWidth(): void {
    this.showHamburgerIcon = window.innerWidth < 768;
    if (!this.showHamburgerIcon) {
      this.sidebarOpen = true;
    }
  }
}
