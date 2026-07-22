# General Component Overview

Component props are listed in the props tables. Required props are marked with a red asterisk <span style="color: var(--vp-custom-block-danger-text); font-size: 1.25rem;">\*</span>. Many required and all optional props have default values. This helps ensure type safety and stable component behavior across different build environments, as well as in cases where dynamic data is temporarily unavailable.

The library components support styling via the `classes` object prop. You can use standard `CSS classes`, `Tailwind classes`, or a combination of both.

::: warning
References to classes later in this documentation imply `Tailwind classes`. <br />
The components featured in the `Examples` section are not standard pre-styled library components. Beyond static and dynamic styling via classes, the components in the examples may include additional template elements or internal logic. <br />
Custom classes use the `my-` prefix
:::


::: info
In component examples, the values of certain events are logged to the developer console to show the type and count of generated events.
:::
