#!/usr/bin/env node

import { TeamDatabase } from "./models/teamDatabase.js";
import { Terminal } from "./models/terminal.js";

async function main() {
  const terminal = new Terminal();
  const teams = new TeamDatabase();

  const userSelect = await terminal.select(
    "searchMethod",
    "検索方法を選んでください",
    ["リーグで検索", "都道府県で検索"]
  );

  if (userSelect === "リーグで検索") {
    await teams.searchByLeague();
  } else if (userSelect === "都道府県で検索") {
    await teams.searchByPrefecture();
  } else {
    console.log("無効な選択肢です");
  }
}

main();
