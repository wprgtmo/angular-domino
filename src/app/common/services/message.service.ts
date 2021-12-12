import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface IPosition {
  horizontalPosition: any,
  verticalPosition: any
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private SNACKBAR_TYPE_INFO = 1;
  private SNACKBAR_TYPE_WARNING = 2;
  private SNACKBAR_TYPE_ERROR = 3;

  constructor(private _snackBar: MatSnackBar) { }

  showInfo(message: string, position: number, duration?: number): void{

  }

  showWarning(message: string, position: number, duration?: number): void{

  }  
  
  showError(message: string, position: number, duration?: number): void{

  }

  private showSnackBar(message: string, position: number, type: number, duration?: number): void{
    if (!duration) duration=3000;

    this._snackBar.open(message, '')

  }


}
