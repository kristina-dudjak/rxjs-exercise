import { Component } from '@angular/core'
import { forkJoin, tap } from 'rxjs'
import { Cocktail } from 'src/app/shared/models/Cocktail'
import { CocktailService } from 'src/app/shared/services/cocktail.service'

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.scss']
})
export class ForkJoinComponent {
  constructor (private cocktailService: CocktailService) {}

  cocktails$ = forkJoin<Cocktail[]>([
    this.cocktailService.getCocktail(),
    this.cocktailService.getCocktail(),
    this.cocktailService.getCocktail(),
    this.cocktailService.getCocktail(),
    this.cocktailService.getCocktail()
  ]).pipe(
    tap(cocktails => this.cocktailService.updateCocktailsState(cocktails))
  )
}
