import { Component } from '@angular/core'
import { CocktailService } from 'src/app/shared/services/cocktail.service'

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent {
  constructor (private cocktailService: CocktailService) {}
  cocktails$ = this.cocktailService.cocktails$
}
