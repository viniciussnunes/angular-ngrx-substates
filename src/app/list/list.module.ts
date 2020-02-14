import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { ListComponent } from "./list.component";
import { ItemComponent } from "./item/item.component";
import { SubitemComponent } from "./item/subitem/subitem.component";

import { ItemService } from "./api/item.service";
import { SubitemService } from "./api/subitem.service";
import { ListService } from "./api/list.service";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import * as fromList from "./states/reducers/list.reducer";
import * as fromItem from "./states/reducers/item.reducer";
import * as fromSubitem from "./states/reducers/subitem.reducer";

import { SubitemEffects } from "./states/effects/subitem.effects";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({
      list: fromList.reducer,
      item: fromItem.reducer,
      subitem: fromSubitem.reducer
    }),
    EffectsModule.forRoot([SubitemEffects])
  ],
  declarations: [ListComponent, ItemComponent, SubitemComponent],
  providers: [ItemService, SubitemService, ListService],
  exports: [ListComponent, ItemComponent, SubitemComponent]
})
export class ListModule {}
