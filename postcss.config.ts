import tailwindcss from '@tailwindcss/postcss'
import { postcssIsolateStyles } from 'vitepress'

export default {
  plugins: [
    tailwindcss(),
    postcssIsolateStyles({
      // Keeps the isolation focused exclusively on default layout components
      includeFiles: [/theme-default\/styles\/components/],
    }),
  ],
}
