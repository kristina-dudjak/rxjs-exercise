import { Component } from '@angular/core'
import { concatAll, of, repeat, tap } from 'rxjs'
import { CocktailService } from 'src/app/shared/services/cocktail.service'

@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.scss']
})
export class ConcatAllComponent {
  constructor (private cocktailService: CocktailService) {}

  cocktailGroup$ = this.cocktailService.getCocktail().pipe(repeat(3))

  cocktails$ = of(this.cocktailGroup$, this.cocktailGroup$).pipe(
    concatAll(),
    tap(cocktail => this.cocktailService.addCocktailState(cocktail))
  )
}
