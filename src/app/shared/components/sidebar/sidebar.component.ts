import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input('sidebarStatusLarge')
  sidebarStatusLarge: boolean = false;
  persona: string = '';
  menus: Array<any> = [
    {
      link: '/home/edi',
      name: 'SUCURSALES',
      icon: 'fa-solid fa-file-contract',
    },
    {
      link: '/home/cate',
      name: ' HOTEL',
      icon: 'fa-solid fa-face-smile',
    },
    {
      link: '/home/autor',
      name: 'CLIENTE',
      icon: 'fa-solid fa-list-check',
    },
    {
      link: '/home/libro',
      name: 'LIST RESERVA ',
      icon: 'fa-solid fa-list-check',
    },
    {
      link: '/home/alqui',
      name: '-----',
      icon: 'fa-solid fa-list-check',
    },
    {
      link: '/home/lectores',
      name: 'VUELO',
      icon: 'fa-solid fa-list-check',
    },
    
  ]
  constructor(private router: Router) {}
  ngOnInit(): void {}

  toggleSubMenu(menu: any): void {
    menu.open = !menu.open; 
  }
     redirectToAuth(): void {
      this.router.navigate(['/auth']); 
     }
}
