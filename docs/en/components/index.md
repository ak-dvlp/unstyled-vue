# General Component Overview

In general, the library components do not include any styles, though some styles are still applied, for example, to ensure the intended behavior when working with screen readers.

The library components support styling via the classes object prop. The keys of this object are highlighted in the 'Template' section on each component's page. You can use standard `CSS classes`, `Tailwind classes`, or a combination of both.

Required component props are marked with a red asterisk <span style="color: var(--vp-custom-block-danger-text); font-size: 1.25rem;">\*</span>. <br />
Many required and all optional props have default values. This ensures type safety, stable performance across different build environments, and handles cases where dynamic data is temporarily missing.

The `Component Internals Notes` section found on some pages does not directly relate to the documentation and serves only as short notes for myself.
