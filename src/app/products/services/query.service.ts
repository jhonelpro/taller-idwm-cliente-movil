import { Injectable } from '@angular/core';
import { QueryParams } from '../interfaces/queryParams';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  private filtersSource = new BehaviorSubject<QueryParams>({
    productType: "", sortByPrice: "", IsDescending: null, pageNumber: 1, pageSize: 10
  });

  public currentFilters$ = this.filtersSource.asObservable();

  updateFilters(newFilters: Partial<QueryParams>) {
    const currentFilters = this.filtersSource.value;
    this.filtersSource.next({ ...currentFilters, ...newFilters });
  }

  resetFilters() {
    this.filtersSource.next({
      productType: "", sortByPrice: "", IsDescending: null, pageNumber: 1, pageSize: 10
    });
  }
}

