import {Injectable} from "@angular/core";
import {SocialSharing} from "@ionic-native/social-sharing";
import {News} from "../entities/News";
import {ToastController} from "ionic-angular";

@Injectable()
export class SocialSharingService {

  constructor(private socialSharing: SocialSharing, private toastCtrl: ToastController) {

  }

  share(news: News): void {

    let options = {
      message: 'Hey, schau dir den folgenden Artikel "' + news.titel + '" auf http://sc-dahenfeld.de/index.php?option=com_content&view=article&id=' + news.id + ' an!',
      subject: news.titel
    }

    this.socialSharing.shareWithOptions(options).then(
      (result) => {
        console.log("Sharing successful");
        console.log(result);
      },
      (error) => {
        this.showErrorToast();
        console.error(error);
      }
    );

  }

  private showErrorToast() {
    let toast = this.toastCtrl.create({
      message: 'Beim Teilen des Artikels ist etwas schief gelaufen',
      duration: 3000
    });

    toast.present();
  }

}
