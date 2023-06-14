import { NgModule } from '@angular/core';

//Este modulo es para importar todos los compononentes disponibles de PrimenNg
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  exports: [ButtonModule, MenubarModule, TableModule, MultiSelectModule, DropdownModule],
})
export class PrimeNgModule {}
