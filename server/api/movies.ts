export default defineEventHandler(async () => {
	const config = useRuntimeConfig()
	console.log(config.public)
	return await $fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${config.apiKey}&language=es`);
})
