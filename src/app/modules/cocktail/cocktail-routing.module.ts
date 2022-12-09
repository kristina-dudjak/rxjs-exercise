import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component'
import { CocktailDetailsComponent } from './views/cocktail-details/cocktail-details.component'
import { ConcatAllComponent } from './views/concat-all/concat-all.component'
import { ForkJoinComponent } from './views/fork-join/fork-join.component'

const routes: Routes = [
  {
    path: 'forkJoin',
    component: ForkJoinComponent,
    children: [
      {
        path: '',
        component: CocktailsListComponent
      },
      {
        path: 'details/:id',
        component: CocktailDetailsComponent
      }
    ]
  },
  {
    path: 'concatAll',
    component: ConcatAllComponent,
    children: [
      {
        path: '',
        component: CocktailsListComponent
      },
      {
        path: 'details/:id',
        component: CocktailDetailsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CocktailRoutingModule {}
