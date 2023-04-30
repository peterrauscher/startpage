const terminal = document.getElementById("terminal");
const input = document.getElementById("input");

const promptLine = `
<div class="prompt">
    <span class="username">peter</span>
    <span>@</span>
    <span class="hostname">macbook</span>
    <span>:</span>
    <span class="loc">~</span>
    <span class="caret">&nbsp;$&nbsp;</span>
    <input id="input" autofocus />
    <span id="cursor"></span>
</div>
`;

const commands = [
  {
    name: "clear",
    description: "Clear the terminal.",
    execute: function (terminal, input) {
      terminal.innerHTML = "";
    },
  },
];

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const command = input.value.trim();
    terminal.innerHTML += `\n<span class="caret">&nbsp;$&nbsp;</span>${command}`;
    const cmd = commands.find((c) => c.name === command);
    if (cmd) {
      cmd.execute(terminal, input);
    } else {
      terminal.innerHTML += `${command}: command not found\n`;
    }
    input.value = "";
  }
});
