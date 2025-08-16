# cem-demo

This project demonstrates use of the Custom Elements Manifest and related tools created by Burton Smith at Microsoft.

After cloning this repository,
enter `npm install` to install all the required dependencies.

To update the custom elements manifest file, enter `npm run cem`.

To start a local server and run the demo app,
enter `npm run dev` and browse `localhost:5173`.
This uses "Code Bubble" to render an example of using
the `hello-world` custom element and display its source code.
Clicking the "Sandbox" button opens a [CodePen](https://codepen.io)
where you can experiment with the custom element.
TODO: Do users have to manually enter the required
JavaScript code to import the web component code?

To run Storybook, enter `npm run storybook`.

To lint all the source files, enter `npm run lint`.
