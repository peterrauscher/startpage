export default commands = [
  {
    name: "clear",
    description: "Clear the terminal.",
    execute: function (terminal, input) {
      terminal.innerHTML = "";
    },
  },
];
