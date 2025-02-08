import { Team } from "./team.js";
import TeamList from "../data/team_list.js";
import { Terminal } from "./terminal.js";

export class TeamDatabase {
  constructor() {
    this.teams = TeamList.flatMap((l) => l.team).map(
      (team) => new Team(team.club_name, team.prefecture),
    );
  }

  display(teams) {
    if (teams.length === 0) {
      console.log("該当するチームはありません");
    } else {
      teams.forEach((team) => {
        console.log(team.display());
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
    ).team.map((team) => new Team(team.club_name, team.prefecture));

    console.log(`${userSelectLeague}のチームは、以下の通りです。`);
    this.display(leagueTeams);
  }

  async searchByPrefecture() {
    const terminal = new Terminal();
    const userInputPrefecture = await terminal.input(
      "prefecture",
      "都道府県を入力してください 例）東京、大阪",
    );

    const prefectureTeams = this.teams.filter((team) =>
      team.prefecture.startsWith(userInputPrefecture),
    );

    console.log(`${userInputPrefecture}のチームは、以下の通りです。`);
    this.display(prefectureTeams);
  }
}
