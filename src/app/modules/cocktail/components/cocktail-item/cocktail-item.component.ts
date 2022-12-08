import { Component, Input } from '@angular/core'
import { Cocktail } from 'src/app/shared/models/Cocktail'

@Component({
  selector: 'app-cocktail-item',
  templateUrl: './cocktail-item.component.html',
  styleUrls: ['./cocktail-item.component.scss']
})
export class CocktailItemComponent {
  @Input() cocktail: Cocktail
}
