import {Match} from "./Match";
import {Player} from "./Player";
import {Mannschaftsart} from "./Mannschaftsart";

export class Soccer {

  team: Mannschaftsart;
  matches: Match[] = [];
  table: any = [];
  players: Player[] = [];
  isError: boolean = false;

}
