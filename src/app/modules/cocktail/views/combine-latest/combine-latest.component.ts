import { Component } from '@angular/core'
import { combineLatest, Observable, tap } from 'rxjs'
import { Cocktail } from 'src/app/shared/models/Cocktail'
import { CocktailService } from 'src/app/shared/services/cocktail.service'

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent {
  constructor (private cocktailService: CocktailService) {}

  cocktails$: Observable<Cocktail[]> = combineLatest([
    this.cocktailService.getCocktail(),
    this.cocktailService.getCocktail(),
    this.cocktailService.getCocktail(),
    this.cocktailService.getCocktail(),
    this.cocktailService.getCocktail()
  ]).pipe(
    tap(cocktails => this.cocktailService.updateCocktailsState(cocktails))
  )
}
