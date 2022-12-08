import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { Cocktail } from 'src/app/shared/models/Cocktail'
import { CocktailService } from 'src/app/shared/services/cocktail.service'

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  constructor (
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}
  id: string
  cocktail$: Observable<Cocktail>

  ngOnInit (): void {
    this.id = this.route.snapshot.params['id']
    this.cocktail$ = this.cocktailService.getCocktailById(this.id)
  }
}
