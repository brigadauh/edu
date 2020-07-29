export class MessageDialogData {
    constructor(public notificationType: MessageDialogEnum, public message: string, public yesTitle?: string, noTitle?: string) {
    }
}

export enum MessageDialogEnum {
    Error = 1,
    Success = 2,
    Info = 3
}
