import { Injectable } from "@angular/core";
import { mergeMap, catchError, map } from "rxjs/operators";

import { Actions, createEffect, ofType } from "@ngrx/effects";

import { SubitemService } from "../../api/subitem.service";
import * as SubitemAcitons from "../actions/subitem.actions";
import { of } from "rxjs";

@Injectable()
export class SubitemEffects {
  loadSubitens$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SubitemAcitons.loadSubitens),
      mergeMap(action =>
        this.subitemService.getAll().pipe(
          map(subitens => SubitemAcitons.loadSubitensSuccess({ subitens })),
          catchError(error => of(SubitemAcitons.loadSubitensFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private subitemService: SubitemService
  ) {}
}
