import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchValue = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchValue']) {
        this.searchValue = params['searchValue'];
      }
    });
  }

  search(value: string) {
    if (value) {
      this.router.navigateByUrl('/search/' + value);
    }
  }
}
