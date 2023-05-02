import commands from "./commands.js";
import executors from "./executors.js";
import { error, render } from "./helpers.js";
import shortcuts from "./shortcuts.js";

const input = document.getElementById("input");
const output = document.getElementById("output");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const userInput = input.value.trim().split(" ");
    const command = userInput[0].toLowerCase();
    const options = userInput.slice(1);
    render(`<span class="red">$&nbsp;</span>${input.value}`);
    try {
      const commandDetails = commands.find((c) =>
        c.name.map((n) => n.toLowerCase()).includes(command)
      );
      if (commandDetails) {
        if (command === "help") commandDetails.execute(commands);
        else commandDetails.execute(options);
      } else {
        const shortcutDetails = shortcuts
          .flatMap((c) => Object.entries(c.items))
          .find(([i]) => i.toLowerCase().startsWith(command));
        if (shortcutDetails) {
          console.log(shortcutDetails);
          render(`Redirecting to ${shortcutDetails[0]}...`);
          window.location.href = shortcutDetails[1];
        } else error("yellow", command, "command not found");
      }
    } catch (e) {
      error("red", "JS Error", e.message);
    }
    input.value = "";
  }
});

window.addEventListener("load", () => {
  executors.ls();
  executors.motd();
  let filenames = ["purple-mountains.jpg"];
  let root = document.getElementsByTagName("html")[0];
  root.style.backgroundImage = `url("./backgrounds/${
    filenames[Math.floor(Math.random() * filenames.length)]
  }")`;
  root.style.backgroundSize = "cover";
  root.style.backgroundPosition = "center";
});
