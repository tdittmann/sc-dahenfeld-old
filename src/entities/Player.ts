export class Player {

  person_id: number;
  project_id: number;
  teamplayer_id: number;

  // Personal information
  vorname: string;
  nachname: string;
  bild: string;
  position: string;
  age: number;

  // Actual season
  gelbeKarten: number;
  gelbRoteKarten: number;
  roteKarten: number;
  tore: number;
  spiele: number;
  startelf: number;
  einwechslungen: number;
  auswechslungen: number;
  spielminuten: number;

  // Carrer
  karriereGelbeKarten: number;
  karriereGelbRoteKarten: number;
  karriereRoteKarten: number;
  karriereTore: number;
  karriereSpiele: number;
  karriereStartelf: number;
  karriereEinwechslungen: number;
  karriereAuswechslungen: number;
  karriereSpielminuten: number;

}
