import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuItems: MenuItem[] = [];
  isShownMenu: boolean = false;

  ngOnInit() {
    this.menuItems = [
      { label: 'Incio', icon: 'pi pi-fw pi-home' },
      { label: 'Cotizar', icon: 'pi pi-fw pi-calendar' },
      { label: 'Sobre mi', icon: 'pi pi-fw pi-pencil' },
      { label: 'Contacto', icon: 'pi pi-fw pi-file' },
    ];
  }
  handleShowModal(): void {
    this.isShownMenu = !this.isShownMenu;
  }
}
