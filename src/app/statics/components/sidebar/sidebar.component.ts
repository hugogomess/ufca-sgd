import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin', title: 'Painel Administrativo',  icon: 'dashboard', class: '' },
    { path: '/admin/demandas', title: 'Gerenciar Demandas',  icon: 'content_copy', class: '' },
    { path: '/admin/usuarios', title: 'Gerenciar Usuários',  icon:'person', class: '' },
    { path: '/admin/matrizes-gut', title: 'Matrizes GUT',  icon:'content_paste', class: '' },
    { path: '/admin/termos-de-abertura', title: 'Termos de Abertura',  icon:'library_books', class: '' },
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
