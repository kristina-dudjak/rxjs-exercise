import { Component } from '@angular/core'
import { combineLatestAll, of, repeat, tap } from 'rxjs'
import { CocktailService } from 'src/app/shared/services/cocktail.service'

@Component({
  selector: 'app-combine-all',
  templateUrl: './combine-all.component.html',
  styleUrls: ['./combine-all.component.scss']
})
export class CombineAllComponent {
  constructor (private cocktailService: CocktailService) {}

  cocktails$ = of(this.cocktailService.getCocktail()).pipe(
    repeat(10),
    combineLatestAll(),
    tap(cocktails => this.cocktailService.updateCocktailsState(cocktails))
  )
}
