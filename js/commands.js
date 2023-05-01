import executor from "./executors.js";

export default [
  {
    name: ["search", "s"],
    description: "Searches DuckDuckGo for the given query",
    execute: executor.search,
  },
  {
    name: ["ls"],
    description: "Lists available shortcuts",
    execute: executor.ls,
  },
  {
    name: ["help"],
    description: "Lists available commands",
    execute: executor.help,
  },
  {
    name: ["clear"],
    description: "Clears the output history",
    execute: executor.clear,
  },
  {
    name: ["weather"],
    description: "Displays the weather forecast",
    execute: executor.weather,
  },
  {
    name: ["motd"],
    description: "Displays a random famous quote",
    execute: executor.motd,
  },
];
