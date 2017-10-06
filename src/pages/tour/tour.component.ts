import {Component} from "@angular/core";
import {Storage} from "@ionic/storage";
import {NavController} from "ionic-angular";
import {NewsListComponent} from "../newsList/newsList.component";

@Component({
  templateUrl: "tour.component.html",
  selector: "tour"
})
export class TourComponent {

  slides = [
    {
      title: "Willkommen in der SCD-App!",
      description: "Erfahre <b>alles</b> über den SC Dahenfeld und sei hautnah dabei. Auf den folgenden Seiten erfährst Du alles, was diese App Dir bietet. <br/> Wische, um auf die nächste Seite zu gelangen.",
      image: "assets/img/logo.png",
    },
    {
      title: "Aktuelle Neuigkeiten",
      description: "Bleib am Ball und verpasse keine Neuigkeit des SCD. Egal ob Verein, Fußball, Turnen oder Tischtennis. Mit der SC Dahenfeld App verpasst Du nichts!",
      image: "assets/img/tour/news.png",
    },
    {
      title: "Teaminformationen",
      description: "Für <b>sämtliche Mannschaften</b> des SC Dahenfeld ist der gesamte Spielplan auf Deinem Smartphone! Verpasse kein Spiel und erhalte zusätzlich Informationen zu jedem Spieler. Mit der <b>Tabelle</b> hast du den aktuellen Stand der Mannschaften im Blick.",
      image: "assets/img/tour/teamDetails.png",
    },
    {
      title: "Turnen & Tischtennis",
      description: "Das Angebot der Turn- und Tischtennisabteilung kannst Du jederzeit über die App abrufen. Neben <b>Trainingszeiten</b> findest Du auch <b>Ansprechpartner</b> für die jeweiligen Angebote!",
      image: "assets/img/tour/turnenTischtennis.png",
    }
  ];

  constructor(private nav: NavController, private storage: Storage) {

  }

  redirectToNewsList() {
    this.storage.set("tour", "1");
    this.nav.setRoot(NewsListComponent);
  }

}
