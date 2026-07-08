# General Component Overview

In general, the library components do not include any styles, though a few styles are still applied, for example, to ensure the intended behavior when working with screen readers.

The library components can be styled by the user via the corresponding CSS classes. These classes can be placed either:

- in a separate folder (for example, in the `src/styles/components` folder) and then imported into the `main.ts` file;
- within the `<style>` block of Vue Single-File Components.

The examples provided with this library use the first approach, placing the component styles in a separate folder. Meanwhile, the `<style>` block of Vue Single-File Components is used to dynamically manage styles via the `v-bind` function.
