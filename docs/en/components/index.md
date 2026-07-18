# General Component Overview

Component parameters are listed in the tables. Required parameters are marked with a red asterisk <span style="color: var(--vp-custom-block-danger-text); font-size: 1.25rem;">\*</span>. Many required and all optional parameters have default values. This helps ensure type safety and stable component behavior across different build environments, as well as in cases where dynamic data is temporarily unavailable.

In general, the library components do not include any styles, though some styles are still applied, for example, to ensure the intended behavior when working with screen readers. The library components support styling via the `classes` object prop. The keys of this object are listed in the props table, and their location within the component's template structure can be found in the highlighted lines of the `Template` section. You can use standard `CSS classes`, `Tailwind classes`, or a combination of both.

::: warning
The components in the `Examples` section are not standard styled library components. In addition to static and dynamic styling using `Tailwind` utility classes and custom classes (distinguishable by the `my-` prefix) defined Inline Theme Directive (`@theme inline`), they may also contain additional template elements to achieve the desired behavior. Nevertheless, some styles are provided below each example for general reference.
:::

<!-- The `Component Internals Notes` section found on some pages does not directly relate to the documentation and serves only as short notes for myself. -->
