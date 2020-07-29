import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ConfirmDialogComponent} from './confirm-dialog.component';
import {ConfirmDialogService} from './confirm-dialog.service';
import {MessageDialogData, MessageDialogEnum} from './message-dialog.model';

describe('ConfirmDialog Component', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let service: ConfirmDialogService;
  let dialogData: any;
  const yesFn = () => console.log('yes function called');
  const noFn = () => console.log('no function called');
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ConfirmDialogComponent],
      providers: [ConfirmDialogService]
    })
        .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ConfirmDialogService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.message).toBeUndefined();
  });
  describe('confirm dialog when message is raised', () => {
    beforeEach(() => {
      dialogData = new MessageDialogData(MessageDialogEnum.Info, 'Information Message');
    });

    it('should set the message when confirm dialog is raised', () => {
      service.confirm(dialogData, yesFn, noFn);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.message.type).toEqual('Confirm');
        expect(component.message.messageNotification).toEqual(dialogData);
        component.message = null;
        fixture.detectChanges();
      });
    });
    it('should have yes and no buttons', () => {
      service.confirm(dialogData, yesFn, noFn);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const buttonEl = fixture.debugElement.nativeElement.querySelectorAll('button');
        expect(buttonEl).toBeDefined();
        expect(buttonEl.length).toEqual(2);
        component.message = null;
        fixture.detectChanges();
      });
    });
    it('should invoke yes function  when clicked yes button', () => {
      const spy = spyOn(console, 'log');
      service.confirm(dialogData, yesFn, noFn);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const buttonEl = fixture.debugElement.nativeElement.querySelectorAll('button');
        buttonEl[0].click();
        expect(spy).toHaveBeenCalledWith('yes function called');
        component.message = null;
        fixture.detectChanges();
      });
    });

    it('should invoke no function  when clicked no button', () => {
      const spy = spyOn(console, 'log');
      service.confirm(dialogData, yesFn, noFn);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const buttonEl = fixture.debugElement.nativeElement.querySelectorAll('button');
        buttonEl[1].click();
        expect(spy).toHaveBeenCalledWith('no function called');
        component.message = null;
        fixture.detectChanges();
      });
    });

    it('should invoke yes function  when clicked yes button when it is alert window', () => {
      const spy = spyOn(console, 'log');
      service.alert(dialogData, yesFn);
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const buttonEl = fixture.debugElement.nativeElement.querySelectorAll('button');
        buttonEl[0].click();
        expect(spy).toHaveBeenCalledWith('yes function called');
        component.message = null;
        fixture.detectChanges();
      });
    });

  });
});
