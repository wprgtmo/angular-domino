import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MessageService } from '../services/message.service';

@Injectable()
export class DominoInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    return next.handle(req);
  }


  handlerError(error: HttpErrorResponse){
    if (error instanceof HttpErrorResponse){
      if (error instanceof ErrorEvent){
        console.log('Error de cliente');
        this.messageService.showError('ERROR DE CLIENTE', 'top right');

      }else{
        console.log('Error de servidor');
        this.messageService.showError('ERROR DE CLIENTE', 'top right');
      }
      console.log(error.status);
      console.log(error.message);
      console.log(error.error.messages.error);
    }else{
        console.log('Otro tipo de error');
    }
    return throwError(error);
  }
}