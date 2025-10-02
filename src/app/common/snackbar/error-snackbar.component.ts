import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-snackbar',
  standalone: false,
  template: `
    <div class="snackbar-container error-snackbar">
      <mat-icon class="snackbar-icon">error</mat-icon>
      <div class="snackbar-content">
        <div class="snackbar-title">{{ data.title }}</div>
        <div class="snackbar-message">{{ data.message }}</div>
      </div>
      <button mat-icon-button (click)="dismiss()" class="snackbar-close">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `,
  styles: [`
    .snackbar-container {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 4px 8px;
      min-width: 300px;
      max-width: 500px;
    }
    
    .error-snackbar {
      background: linear-gradient(135deg, #f44336 0%, #d32f2f 100%);
      color: white;
      border-radius: 8px;
    }
    
    .snackbar-icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
    
    .snackbar-content {
      flex: 1;
      min-width: 0;
    }
    
    .snackbar-title {
      font-weight: 600;
      font-size: 14px;
      line-height: 1.2;
      margin-bottom: 2px;
    }
    
    .snackbar-message {
      font-size: 13px;
      line-height: 1.3;
      opacity: 0.9;
    }
    
    .snackbar-close {
      flex-shrink: 0;
      color: white;
      width: 32px;
      height: 32px;
    }
    
    .snackbar-close mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
  `]
})
export class ErrorSnackbarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { title: string; message: string },
    private snackBarRef: MatSnackBarRef<ErrorSnackbarComponent>
  ) {}

  dismiss() {
    this.snackBarRef.dismiss();
  }
}
