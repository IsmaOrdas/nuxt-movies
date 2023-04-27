export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	return await $fetch(`https://api.themoviedb.org/3/movie/${event.context.params.id}?api_key=${config.public.apiKey}&language=es`);
})
