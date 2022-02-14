import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { accionCargandoDatos, accionDatosCargados } from './../../state/actions/cargando.actions';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    this.store.dispatch(accionCargandoDatos());
    return next
      .handle(req)
      .pipe(finalize(() => this.store.dispatch(accionDatosCargados())));
  }
}
