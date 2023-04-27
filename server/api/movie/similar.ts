export default defineEventHandler(async (event) => {
	const query = getQuery(event);
	return await $fetch(`https://api.themoviedb.org/3/movie/${query?.id}/similar?api_key=725e8fbcc55eca64a1abd5b2906c3a8e&language=es`);
})
