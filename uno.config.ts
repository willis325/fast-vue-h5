import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss';

export default defineConfig({
  shortcuts: {
    'flex-row-middle': 'flex flex-row items-center',
    'flex-row-between': 'flex flex-row items-center justify-between',
    'flex-row-middle-center': 'flex flex-row items-center justify-center',
    'flex-col-center': 'flex flex-col justify-center',
    'flex-col-middle-center': 'flex flex-col items-center justify-center',
    'b-base': 'b-1 b-solid b-white',
  },
  theme: {
    colors: {},
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {},
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
