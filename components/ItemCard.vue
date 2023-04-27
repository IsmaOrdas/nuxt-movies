<template>
	<div class="movie-card mt-4">
		<NuxtLink :to="moviePath">
			<nuxt-img :src="image" class="movie-card__poster hover:opacity-75 transition ease-in-out duration-150" />
		</NuxtLink>
		<div class="mt-2">
			<a class="movie-card__title mb-2">{{ item.title }}</a>
			<div class="movie-card__meta m-0">
				<span class="i-mdi-star-circle"></span>
				<span>{{ item.vote_average }}</span>
				<span> | </span>
				<span>{{ item?.release_date }}</span>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface IItem {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

const props = defineProps<{
	item: IItem
}>();

const image = computed(() => `https://image.tmdb.org/t/p/w400/${props.item.poster_path}`);
const moviePath = computed(() => `/movies/${props.item.id}`);
</script>

<style lang="scss" scoped>
.movie-card {

	&__title {
		font-size: 18px;
		font-weight: 400;
		line-height: 22px;
	}

	&__poster {
		border-radius: 2px;
		contain: paint;
	}

	&__meta {
		font-size: 14px;
		font-weight: 400;
	}
}
</style>
