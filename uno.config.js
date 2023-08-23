// uno.config.ts
import { defineConfig, presetUno, presetAttributify,
presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
    presets:[
        presetUno(),
        presetAttributify(),
        presetIcons()
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup()
    ],
    theme: {
        breakpoints: {
            xs: '320px',
            sm: '480px',
            md: '770px',
            lg: '1024px',
            xl: '1200px',
        }
    }
})