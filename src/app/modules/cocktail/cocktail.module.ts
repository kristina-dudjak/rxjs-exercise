import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component'
import { CocktailItemComponent } from './components/cocktail-item/cocktail-item.component'
import { CombineAllComponent } from './views/combine-all/combine-all.component'
import { CocktailRoutingModule } from './cocktail-routing.module'
import { ForkJoinComponent } from './views/fork-join/fork-join.component'
import { CocktailDetailsComponent } from './views/cocktail-details/cocktail-details.component'

@NgModule({
  declarations: [
    CocktailsListComponent,
    CocktailItemComponent,
    CombineAllComponent,
    ForkJoinComponent,
    CocktailDetailsComponent
  ],
  imports: [CommonModule, CocktailRoutingModule]
})
export class CocktailModule {}
