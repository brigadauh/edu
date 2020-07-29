import { TestBed } from '@angular/core/testing';

import { ModalDialogService } from './modal-dialog.service';
import {MessageDialogData, MessageDialogEnum} from './message-dialog.model';

describe('ModalDialogService', () => {
  let service: ModalDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ModalDialogService]
    });
    service = TestBed.inject(ConfirmDialogService);
  });

  it('should create service', () => {

    service = TestBed.get(ModalDialogService);
    expect(service).toBeTruthy();
  });
  it('confirm raise the confirm observable with the yes and no callbacks and with the message', () => {

    service = TestBed.get(ModalDialogService);
    const dialogData = new MessageDialogData(MessageDialogEnum.Info, 'Information Message');
    spyOn(console, 'log');
    let confirmData: any = null;
    const yesFn = () => console.log('yes function called');
    const noFn = () => console.log('no function called');
    service.getMessage().subscribe(x => {
      confirmData = x;
      expect(x.type).toEqual('Confirm');
      expect(x.messageNotification).toEqual(dialogData);
      expect(x.yesFn).toBeDefined();
      expect(x.noFn).toBeDefined();
    });
    service.confirm(dialogData, yesFn, noFn);
  });
  it('alert raise the alert observable with the yes  callbacks and with the message', () => {
    service = TestBed.get(ConfirmDialogService);
    const dialogData = new MessageDialogData(MessageDialogEnum.Info, 'Information Message');
    spyOn(console, 'log');
    let confirmData: any = null;
    const yesFn = () => console.log('yes function called');
    const noFn = () => console.log('no function called');
    service.getMessage().subscribe(x => {
      confirmData = x;
      expect(x.type).toEqual('Alert');
      expect(x.messageNotification).toEqual(dialogData);
      expect(x.yesFn).toBeDefined();
      expect(x.noFn).toBeUndefined();
    });
    service.alert(dialogData, yesFn);
  });

});
