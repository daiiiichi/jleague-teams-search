export class Team {
  constructor(clubName, prefecture) {
    this.clubName = clubName;
    this.prefecture = prefecture;
  }

  display() {
    return `- ${this.clubName} (${this.prefecture})`;
  }
}
