import {Injectable} from "@angular/core";
import {ToastController} from "ionic-angular";

@Injectable()
export class ToastService {

  private static DEFAULT_DURATION: number = 3000;

  constructor(private toastCtrl: ToastController) {

  }

  public showToast(pMessage: string): void {
    let toast = this.toastCtrl.create({
      message: pMessage,
      duration: ToastService.DEFAULT_DURATION
    });

    toast.present();
  }

}
