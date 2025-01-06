import { Component, inject, OnInit } from '@angular/core';
import { QueryService } from '../../services/query.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  imports: [CommonModule, IonicModule],
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {

  private queryService: QueryService = inject(QueryService);
  onFilterChange(event: Event, filterType: string): void {
    const value = (event.target as HTMLSelectElement).value;

    switch (filterType) {
      case 'productType':
        this.queryService.updateFilters({ productType: value });
        break;
      case 'sortByPrice':
        const isDescending = value === 'true'; 
        this.queryService.updateFilters({
          sortByPrice: 'price',
          IsDescending: isDescending,
        });
        break;
      default:
        break;
    }
  }
}
