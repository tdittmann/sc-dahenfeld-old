import {Stats} from "./Stats";

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

  // Stats
  seasonStats: Stats;
  careerStats: Stats;

}
