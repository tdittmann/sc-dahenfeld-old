import {Player} from "./Player";

export class StatsPlayer {

  name: string;
  statValue1: number;
  statValue2: number;
  statValue3: number;
  playerObject: Player;

  constructor(pPlayerObject: Player, pStatValue1: number, pStatValue2: number, pStatValue3: number) {
    this.name = pPlayerObject.vorname + " " + pPlayerObject.nachname;
    this.statValue1 = pStatValue1;
    this.statValue2 = pStatValue2;
    this.statValue3 = pStatValue3;
    this.playerObject = pPlayerObject;
  }

}
