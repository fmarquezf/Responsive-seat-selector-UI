# Responsive-seat-selector-UI

This solution was developed using the web framework Astro and the library React to build the interactive components of the project. 

The seat distribution was made with a file run by Node.js, which create a json file with the information of each seats, the row they belong, the seat number, the Id composed of the seat number and the row they belong, the section they belong (this will be used for mobile UI), and the state if the seats are available or unavailable.

Then that information is taken to organize each seat and show their state, their state change to "selected" when they are clicked, they can be deselected, if they are clicked again.

There is a button called "reserve seat", which shows a modal with the number of seats selected and the total price to reserve those seats, there are two buttons in that modal, one to close the modal, and the other one called "Pay" to simulate the action of reserving those seats, once it is clicked it shows that the purchase was successful, and the state of the seats selected change to unavailable, because they were reserved.

When seen on smaller devices like mobile phones, the UI changes, and now there are 3 sections shown (A, B and C), those sections can be clicked to zoom them in where the seats can now be selected, a back button is shown when the sections are zoomed in to go back to the 3 sections again.

The project can be seen at https://fmarquezf.github.io/Responsive-seat-selector-UI/


```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
