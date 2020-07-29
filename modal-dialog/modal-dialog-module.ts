import { NgModule } from '@angular/core';
import { ModalDialogService } from './confirm-dialog.service';
import { ModalDialogComponent } from './confirm-dialog.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ModalDialogComponent
  ],
  providers: [ModalDialogService],
  imports: [ CommonModule ],
  exports: [
    ModalDialogComponent
  ],
  entryComponents: [
    ModalDialogComponent
  ]
})
export class ModalDialogModule { }
