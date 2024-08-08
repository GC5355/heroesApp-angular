import { Component } from '@angular/core';

@Component({
  selector: 'hero-layout-page',
  templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'Listado', icons: 'label', url: './list' },
    { label: 'Anadir', icons: 'add', url: './new-hero' },
    { label: 'Buscar', icons: 'search', url: './search' }
  ]


}
