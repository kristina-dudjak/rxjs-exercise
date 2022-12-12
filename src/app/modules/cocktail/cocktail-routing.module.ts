import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component'
import { CocktailDetailsComponent } from './views/cocktail-details/cocktail-details.component'
import { CombineAllComponent } from './views/combine-all/combine-all.component'
import { CombineLatestComponent } from './views/combine-latest/combine-latest.component'
import { ConcatAllComponent } from './views/concat-all/concat-all.component'
import { ConcatMapComponent } from './views/concat-map/concat-map.component'
import { ForkJoinComponent } from './views/fork-join/fork-join.component'
import { NavigatorComponent } from './views/navigator/navigator.component'

const routes: Routes = [
  {
    path: '',
    component: NavigatorComponent
  },
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
  },
  {
    path: 'combineAll',
    component: CombineAllComponent,
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
    path: 'combineLatest',
    component: CombineLatestComponent,
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
    path: 'concatMap',
    component: ConcatMapComponent,
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
