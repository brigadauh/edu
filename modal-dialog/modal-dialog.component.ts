import {Component, OnInit} from '@angular/core';
import {ModalDialogService} from './modal-dialog.service';

@Component({
  selector: 'modal-dialog',
  templateUrl: 'modal-dialog.component.html',
  styleUrls: ['modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {
  message: any;

  constructor(
      private modalDialogService: ModalDialogService
  ) {
  }

  ngOnInit() {
    this.modalDialogService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
}
