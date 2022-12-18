import { Component } from '@angular/core'
import { concatAll, delay, of, repeat, tap } from 'rxjs'
import { CocktailService } from 'src/app/shared/services/cocktail.service'

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.scss']
})
export class ConcatAllComponent {
  constructor (private cocktailService: CocktailService) {}

  cocktailGroup$ = this.cocktailService
    .getCocktail()
    .pipe(delay(500), repeat(3))
  cocktailGroup2$ = this.cocktailService
    .getCocktail()
    .pipe(delay(1000), repeat(3))

  cocktails$ = of(this.cocktailGroup$, this.cocktailGroup2$).pipe(
    concatAll(),
    tap(cocktail => this.cocktailService.addCocktailState(cocktail))
  )
}
