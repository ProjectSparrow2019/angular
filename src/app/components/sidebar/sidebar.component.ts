import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
<<<<<<< HEAD
    { path: '/tables', title: 'Tabelas',  icon:'ni-bullet-list-67 text-red', class: '' }
=======
    { path: '/user-profile', title: 'Perfil',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Pesquisas',  icon:'ni-bullet-list-67 text-red', class: '' }
>>>>>>> 9de198a8b90c28ad4af27d03d28294dd5fd018d8
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
