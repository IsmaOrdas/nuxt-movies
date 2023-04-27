export default defineEventHandler(async () => {
	return await $fetch('https://api.themoviedb.org/3/tv/popular?api_key=725e8fbcc55eca64a1abd5b2906c3a8e&language=es');
})
