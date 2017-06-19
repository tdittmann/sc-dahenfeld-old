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
      description: "Erfahre <b>alles</b> über den SC Dahenfeld und sei hautnah dabei. Auf den folgenden Seiten erfährst Du alles, was diese App Dir bietet. <br/> Wische, um auf die nächste Seite zu gelangen. <b>Zum Überspringen klicke auf das SCD-Logo</b>",
      image: "assets/img/logo.png",
    },
    {
      title: "Spielplan, Tabelle und Kader",
      description: "Für die <b>1. und 2. Mannschaft</b> ist der gesamte Spielplan auf Deinem Smartphone! Verpasse kein Spiel und erhalte zusätzlich Informationen zu jedem Spieler. Mit der <b>Tabelle</b> hast du den aktuellen Stand der beiden Mannschaften im Blick.",
      image: "assets/img/tour/tabelleSpielplan.png",
    },
    {
      title: "Vereinskalender",
      description: "Verpasse kein Spiel des SCD: mit dem Vereinskalender werden <b>sämtliche Spiele (inkl. Jugend) in den kommenden 2 Wochen</b> angezeigt.",
      image: "assets/img/tour/vereinskalender.png",
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
