import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero/hero.component';

// localhost:4200/heroes
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
          {path: 'new-hero', component: NewPageComponent },
          {path: 'search', component: SearchPageComponent },
          {path: 'edit/:id', component: NewPageComponent },
          {path: 'list', component: ListPageComponent },
          // Tiene que estar al final de la lista, para que funcione bien el :id
          {path: ':id', component: HeroPageComponent },    //podria ser mejor {path: 'by/:id', component: HeroPageComponent },
          {path: '**', redirectTo: 'list' },
        ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
