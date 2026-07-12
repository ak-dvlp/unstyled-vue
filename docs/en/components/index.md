# General Component Overview

In general, the library components do not include any styles, though some styles are still applied, for example, to ensure the intended behavior when working with screen readers.

Library components are styled using CSS classes, the names of which can be found in the highlighted lines of the `Template` section on each component's page.

::: info
In the examples of this library, styles are placed in separate folders. The `<style>` blocks <br />
of Vue components are used for dynamic style management via `v-bind`.
:::

Required component props are marked with a red asterisk <span style="color: var(--vp-custom-block-danger-text); font-size: 1.25rem;">\*</span>. Optional props have explicitly defined default values to guarantee bulletproof type safety, ensure consistent behavior across different build environments, and maintain complete alignment with the documentation.
