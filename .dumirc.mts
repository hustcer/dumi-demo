import { defineConfig } from 'dumi';
import defineThemeConfig from 'dumi-theme-chakra/dist/factory/defineThemeConfig';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '@hustcer/dumi-demo',
    ...defineThemeConfig({
      // ...
    })
  },
});
