import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessSnackbarComponent } from '../../common/snackbar/success-snackbar.component';
import { ErrorSnackbarComponent } from '../../common/snackbar/error-snackbar.component';
import { InfoSnackbarComponent } from '../../common/snackbar/info-snackbar.component';
import { WarningSnackbarComponent } from '../../common/snackbar/warning-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string, title: string = 'Success') {
    this.snackBar.openFromComponent(SuccessSnackbarComponent, {
      data: { title, message },
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar-panel']
    });
  }

  showError(message: string, title: string = 'Error') {
    this.snackBar.openFromComponent(ErrorSnackbarComponent, {
      data: { title, message },
      duration: 7000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['error-snackbar-panel']
    });
  }

  showInfo(message: string, title: string = 'Info') {
    this.snackBar.openFromComponent(InfoSnackbarComponent, {
      data: { title, message },
      duration: 5000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['info-snackbar-panel']
    });
  }

  showWarning(message: string, title: string = 'Warning') {
    this.snackBar.openFromComponent(WarningSnackbarComponent, {
      data: { title, message },
      duration: 6000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['warning-snackbar-panel']
    });
  }
}
