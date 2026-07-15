# General Component Overview

In general, the library components do not include any styles, though some styles are still applied, for example, to ensure the intended behavior when working with screen readers.

The library components support styling via the `classes` object prop. The keys of this object are listed in the props table, and their location within the component's template structure can be found in the highlighted lines of the `Template` section. You can use standard `CSS classes`, `Tailwind classes`, or a combination of both.

::: warning
Components in the `Examples` section are styled using standard `Tailwind` utility classes and custom utility classes defined via the Inline Theme Directive - `@theme inline`. Directly copying styles from an example into a library component will not provide the same display style. Custom classes are easily recognized by the `my` prefix, for example, `text-my-label`.
:::

Required component props are marked with a red asterisk <span style="color: var(--vp-custom-block-danger-text); font-size: 1.25rem;">\*</span>. Many required and all optional props have default values. This helps ensure type safety, as well as component stability across different build environments and in cases where dynamic data is temporarily missing.

This helps ensure type safety, as well as the stable components behavior across different build environments and in cases where dynamic data is temporarily missing.

The `Component Internals Notes` section found on some pages does not directly relate to the documentation and serves only as short notes for myself.
