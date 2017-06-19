export class SoccerUtils {

  public static TEAM_NAME: string = "SC Dahenfeld";

  static calculateTable(matches: any) {
    let table: any = [];

    for (let i = 0; i < matches.length; i++) {
      let tempClub = {
        id: 0,
        name: "",
        spiele: 0,
        punkte: 0,
        diff: 0
      };

      // Check if home_team already exists in scope
      if (!this.checkIfInArray(table, matches[i].home_name)) {
        tempClub.id = matches[i].home_id;
        tempClub.name = matches[i].home_name;
        table.push(tempClub);
      }
    }

    // Check results for every team
    for (let i = 0; i < table.length; i++) {
      for (let j = 0; j < matches.length; j++) {
        if (matches[j].home_name == table[i].name && matches[j].home_result) {
          table[i].spiele += 1;
          // Heimspiel
          if (matches[j].home_result > matches[j].away_result) {
            // Sieg
            table[i].punkte += 3;
            table[i].diff += matches[j].home_result - matches[j].away_result;
          } else if (matches[j].home_result == matches[j].away_result) {
            // Unentschieden
            table[i].punkte += 1;
            table[i].diff += 0;
          } else if (matches[j].home_result < matches[j].away_result) {
            // Niederlage
            table[i].punkte += 0;
            table[i].diff -= matches[j].away_result - matches[j].home_result;
          }
        } else if (matches[j].away_name == table[i].name && matches[j].home_result) {
          table[i].spiele += 1;
          // Auswärtsspiel
          if (matches[j].home_result < matches[j].away_result) {
            // Sieg
            table[i].punkte += 3;
            table[i].diff += matches[j].away_result - matches[j].home_result;
          } else if (matches[j].home_result == matches[j].away_result) {
            // Unentschieden
            table[i].punkte += 1;
            table[i].diff += 0;
          } else if (matches[j].home_result > matches[j].away_result) {
            // Niederlage
            table[i].punkte += 0;
            table[i].diff -= matches[j].home_result - matches[j].away_result;
          }
        }
      }
    }

    return table;
  }

  static checkIfInArray(table, home_name) {
    for (let i = 0; i < table.length; i++) {
      if (table[i].name == home_name) {
        return true;
      }
    }

    return false;
  }
}
