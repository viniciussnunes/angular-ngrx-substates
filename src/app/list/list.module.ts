import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { ItemComponent } from './item/item.component';
import { SubitemComponent } from './item/subitem/subitem.component';
import { ItemService } from './api/item.service';
import { SubitemService } from './api/subitem.service';
import { ListService } from './api/list.service';
import { StoreModule } from '@ngrx/store';
import * as fromList from './states/reducers/list.reducer';
import * as fromItem from './states/reducers/item.reducer';
import * as fromSubitem from './states/reducers/item.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ 
      list: fromList.reducer,
      item: fromItem.reducer,
      subitem: fromSubitem.reducer
    })
  ],
  declarations: [
    ListComponent,
    ItemComponent,
    SubitemComponent
  ],
  providers: [
    ItemService,
    SubitemService,
    ListService
  ],
  exports: [
    ListComponent,
    ItemComponent,
    SubitemComponent
  ]
})
export class ListModule { }