import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map } from 'rxjs'
import { Store } from '../classes/store.class'
import { Cocktail } from '../models/Cocktail'

interface CocktailInterface {
  cocktails: Cocktail[]
}

const initialState: CocktailInterface = {
  cocktails: []
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService extends Store<CocktailInterface> {
  constructor (private http: HttpClient) {
    super(initialState)
  }

  cocktails$ = this.select(({ cocktails }) => cocktails)

  updateCocktailsState (cocktails: Cocktail[]) {
    this.setState({ cocktails })
  }

  // addCocktailState (cocktail: Cocktail) {
  //   this.setState({ cocktails: this.state.cocktails.concat(cocktail) })
  // }

  // getCocktails () {
  //   var calls: Observable<Cocktail>[] = []
  //   for (let i = 0; i < 10; i++) {
  //     calls.push(this.getCocktail())
  //   }
  //   firstValueFrom(
  //     forkJoin(calls).pipe(
  //       map(cocktails => {
  //         this.updateCocktailsState(cocktails)
  //       })
  //     )
  //   )
  // }

  getCocktailById (id: string) {
    return this.cocktails$.pipe(
      map(cocktails => cocktails.find(cocktail => cocktail.idDrink === id))
    )
  }

  getCocktail () {
    return this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .pipe(
        map((response: any) => {
          const cocktail: Cocktail = response.drinks[0]
          // this.addCocktailState(cocktail)
          return cocktail
        })
      )
  }
}
