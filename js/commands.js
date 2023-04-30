export default commands = [
  {
    name: "clear",
    description: "Clear the terminal.",
    execute: function () {
      terminal.innerHTML = "";
      input.value = "";
    },
  },
];
