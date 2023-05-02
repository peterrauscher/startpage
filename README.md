# Startpage

An iTerm-inspired startpage page for faster web browsing. Because everything's better on the command line!

![Screenshot](/Screenshot.png)

## Installation

You have two main options:

1. ### Local File

   - To run locally, you can simply clone the repository:

     ```bash
     git clone https://github.com/peterrauscher/startpage.git
     ```

   - Or download the [ZIP file](https://github.com/peterrauscher/startpage/archive/refs/heads/main.zip) directly from Github, and extract it to a local folder.

   Now just set your new tab/homepage as `/path/to/repo/index.html`

2. ### Github Pages

   To access the site from multiple computers, or just to save the few MB of RAM, you can host the site on Github Pages.

   - [Fork the repository](https://github.com/peterrauscher/startpage/fork)
   - Go to the repository page
   - Go to Settings > Pages > Build and Deployment
   - Under "Build and deployment" select "Deploy from a branch"
   - Select branch "main" and folder "/ (root)"

   Now just set your new tab/homepage as the Github Pages domain it gives you!

## Usage

- To search DuckDuckGo, type `search` or `s` followed by your search query!
  - Example: `search Where to find cool startpages`
- List your shortcuts with `ls`.
- To visit a shortcut, just enter the name of the shortcut in, and you'll be redirected.
  - Example: just typing `git` will bring me to Github!
  - **NOTE**: If the first few letters are shared with another shortcut, the first one it finds will be used. You'll have to be more specific in this case. Also, if the first few letters belong to command, the command will be executed instead.
- Run `weather set` to see how to setup the `weather` command.
- List all available commands with `help`.

## Configuration

Because this is a static site, configuration mostly happens within the files themselves. Some things, like the weather API key and location, are stored in local storage. If you completely clear your browser, you will need to reset these.

### Shortcuts

Shortcuts are the links displayed when you first open the page, or when you run `ls`. These are defined in the `js/shortcuts.js` file.

The file is an array of objects of the schema:

```
{
  category: "Name of Category",
  color: "color of category header",
  items: {
    "Example": "https://example.com",
    "Another Example": "https://anotherexample.com",
    ...
  }
}
```

Feel free to add/remove categories and links.

Available values for `color` are:

- `green`
- `cyan`
- `purple`
- `red`
- `yellow`
- `blue`
- `light-gray`
- `gray`
- `black`

### Username and Hostname

Just change the text in `index.html`:

```html
<div class="prompt">
  ...
  <span class="green">username</span>
  ...
  <span class="cyan">hostname</span>
  ...
</div>
```

## Feature Suggestions

If there are any commands you'd like to see added, or improvements you'd like to suggest, or if you encounter a bug: open an issue! I'll get to it when I get a chance :D
