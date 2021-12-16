import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MessageService } from '../services/message.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DominoInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((error) => this.handlerError(error)));
  }


  handlerError(error: HttpErrorResponse): Observable<never>{
    if (error instanceof HttpErrorResponse){
      if (error instanceof ErrorEvent){
        this.messageService.showError('ERROR DE CLIENTE', 'top right');
      }else{
        switch (error.status) {
          case 401:
              this.messageService.showError('No cuenta con los permisos para esta acción: ' + error.message, 'top right');
            break;
          case 500:
              this.messageService.showError('Ocurrió el siguiente error en el servidor: ' + error.message, 'top right');
            break;
          default:
            this.messageService.showError('ERROR DE SERVIDOR: ' + error.message, 'top right');
            break;
        }
      }
      console.log(error.status);
      console.log(error.message);
      console.log(error.error.messages.error);
    }else{
        console.log('Otro tipo de error: ' + error);
    }
    return throwError(error);
  }
}
