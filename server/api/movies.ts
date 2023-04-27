export default defineEventHandler(async () => {
	const config = useRuntimeConfig()
	return await $fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${config.public.apiKey}&language=es`);
})
