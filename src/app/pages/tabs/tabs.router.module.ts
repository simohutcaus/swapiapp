import { FilmDetailsPage } from './../film-details/film-details.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { FilmsPage } from '../films/films.page';
import { PeoplePage } from '../people/people.page';
import { PlanetsPage } from './../planets/planets.page';
import { PeopleDetailsPage } from '../people-details/people-details.page';
import { PlanetDetailsPage } from '../planet-details/planet-details.page';
 
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'films',
        outlet: 'films',
        component: FilmsPage
      },
      { 
        path: 'films/:id', 
        outlet: 'films',
        component: FilmDetailsPage
      },
      {
        path: 'people',
        outlet: 'people',
        component: PeoplePage
      },
      {
        path: 'people/:id',
        outlet: 'people',
        component: PeopleDetailsPage
      },
      {
        path: 'planets',
        outlet: 'planets',
        component: PlanetsPage
      },
      {
        path: 'planets/:id',
        outlet: 'planets',
        component: PlanetDetailsPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(films:films)',
    pathMatch: 'full'
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}