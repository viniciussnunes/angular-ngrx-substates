import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list.component';
import { ItemComponent } from './item/item.component';
import { SubitemComponent } from './item/subitem/subitem.component';
import { ItemService } from './api/item.service';
import { SubitemService } from './api/subitem.service';
import { ListService } from './api/list.service';

@NgModule({
  imports: [
    CommonModule
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