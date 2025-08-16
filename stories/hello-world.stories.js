import "../src/hello-world.js";

export default {
  title: "Components/hello-world",
  component: "hello-world",
  argTypes: {
    greeting: { control: "text" },
    name: { control: "text" },
    // Other kinds of controls:
    // enabled: { control: 'boolean' }
    // count: { control: 'number' }
    // variant: { control: 'select', options: ['primary', 'secondary'] }
  },
};

const html = String.raw;

export const Default = (args) => html`<hello-world
  greeting="${args.greeting || "Hello"}"
  name="${args.name || "World"}"
>
</hello-world>`;

export const WithName = (args) => html`<hello-world
  greeting="${args.greeting || "Hello"}"
  name="${args.name || "Mark"}"
>
</hello-world>`;
WithName.args = {
  name: "Mark",
};

export const WithGreetingAndName = (args) => html`<hello-world
  greeting="${args.greeting}"
  name="${args.name}"
>
</hello-world>`;
WithGreetingAndName.args = {
  greeting: "What's up",
  name: "Mark",
};

export const WithSlots = (args) => html`<hello-world
  greeting="${args.greeting || "Welcome aboard"}"
  name="${args.name || "Captain"}"
>
  <div slot="before">This line precedes the greeting.</div>
  <div slot="after">This line follows the greeting.</div>
</hello-world>`;
WithSlots.args = {
  greeting: "Welcome aboard",
  name: "Captain",
};
