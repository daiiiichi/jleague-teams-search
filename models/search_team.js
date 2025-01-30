import TeamList from "../data/team_list.js";
import { Terminal } from "./terminal_operation.js";

export class Teams {
  display(teams) {
    if (teams.length === 0) {
      console.log("該当するチームはありません");
    } else {
      teams.forEach((team) => {
        console.log(`- ${team.club_name} (${team.prefecture})`);
      });
    }
  }

  async searchByLeague() {
    const terminal = new Terminal();
    const userSelectLeague = await terminal.select(
      "league",
      "リーグを選んでください",
      TeamList.map((l) => l.league),
    );

    const leagueTeams = TeamList.find(
      (l) => l.league === userSelectLeague,
    ).team;
    console.log(`${userSelectLeague}のチームは、以下の通りです。`);
    this.display(leagueTeams);
  }

  async searchByPrefecture() {
    const terminal = new Terminal();
    const userInputPrefecture = await terminal.input(
      "prefecture",
      "都道府県を入力してください 例）東京都",
    );

    const prefectureTeams = TeamList.flatMap((l) => l.team).filter(
      (team) => team.prefecture === userInputPrefecture,
    );
    console.log(`${userInputPrefecture}のチームは、以下の通りです。`);
    this.display(prefectureTeams);
  }
}
