import commands from "commands";
const terminal = document.getElementById("terminal");
const input = document.getElementById("input");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    terminal.innerHTML += `\n<span class="prompt">$</span> ${command}\n`;
    const cmd = commands.find((c) => c.name === command);
    if (cmd) {
      cmd.execute();
    } else {
      terminal.innerHTML += `${command}: command not found\n`;
    }
    input.value = "";
  }
});
