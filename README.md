# cem-demo

This project demonstrates use of the Custom Elements Manifest
and related tools created by Burton Smith at Microsoft.
The tools include:

- custom-elements-manifest/analyzer(https://www.npmjs.com/package/@custom-elements-manifest/analyzer)
- [Code Bubble](https://github.com/break-stuff/code-bubble)
- [wc-dox](https://github.com/break-stuff/wc-dox/blob/main/README.md)
- [StoryBook](https://storybook.js.org)

After cloning this repository,
enter `npm install` to install all the required dependencies.

To update the custom elements manifest file (`custom-elements.json`),
enter `npm run cem`.
TODO: When a library of web components is published, perhaps to npm,
is it sufficient to simply include the `custom-elements.json` file in
the package in order for users to get intellisense for the custom elements?

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
