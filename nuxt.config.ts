// https://nuxt.com/docs/api/configuration/nuxt-config
import presetUno from '@unocss/preset-uno';
import presetIcons from '@unocss/preset-icons';

export default defineNuxtConfig({
  ssr: true,
	modules: [
    "@unocss/nuxt",
    "@vueuse/nuxt",
		"@nuxt/image-edge"
  ],
	app: {
    head: {
      htmlAttrs: { lang: "en" },
    },
  },
  css: ["@/assets/styles/main.scss"],
  unocss: {
    uno: true,
    icons: true,
    presets: [
			presetUno(),
			presetIcons({
				extraProperties: {
					'display': 'inline-block',
					'vertical-align': 'middle',
				},
			})
    ]
  },
})
