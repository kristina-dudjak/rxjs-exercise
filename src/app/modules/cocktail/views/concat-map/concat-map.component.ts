import { Component } from '@angular/core'
import { Router } from '@angular/router'
import {
  BehaviorSubject,
  combineLatestAll,
  concatMap,
  debounceTime,
  distinctUntilChanged,
  firstValueFrom,
  map,
  of,
  repeat,
  tap
} from 'rxjs'
import { CocktailService } from 'src/app/shared/services/cocktail.service'

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent {
  constructor (
    private cocktailService: CocktailService,
    private router: Router
  ) {}

  isDetailsPage () {
    return this.router.url.includes('details')
  }

  numberOfItems$ = new BehaviorSubject<number>(1)

  cocktails$ = this.cocktailService.cocktails$

  currentNumberChanged$ = this.numberOfItems$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    concatMap(n => this.getCocktails(n))
  )

  onSelected (value: string) {
    this.numberOfItems$.next(parseInt(value))
  }

  loadMore () {
    return firstValueFrom(
      of(this.cocktailService.getCocktail()).pipe(
        repeat(this.numberOfItems$.getValue()),
        combineLatestAll(),
        map(cocktails => {
          cocktails.map(cocktail =>
            this.cocktailService.addCocktailState(cocktail)
          )
        })
      )
    )
  }

  getCocktails (quantity: number) {
    return firstValueFrom(
      of(this.cocktailService.getCocktail()).pipe(
        repeat(quantity),
        combineLatestAll(),
        tap(cocktail => this.cocktailService.updateCocktailsState(cocktail))
      )
    )
  }
}
