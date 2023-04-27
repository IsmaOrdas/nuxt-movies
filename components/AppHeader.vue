<template>
	<header class="app-header sticky flex items-center">
			<div class="flex justify-between items-center">
					<div class="mr-6">
							<h1>Nuxt <span style="color: #00bd6f">movies</span></h1>
					</div>
					<div>
						<nuxt-link to="/" class="mr-2">Movies</nuxt-link>
						<nuxt-link to="/series">Series</nuxt-link>
					</div>
			</div>
	</header>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.app-header {
	background-color: var(--white);
	border-bottom: 1px solid var(--gray);
	height: var(--header-height);
	padding: 0 1rem;
	position: sticky;
	top: 0;
	z-index: 100;

	h1 {
		font-size: 24px;
		margin-bottom: 0;
	}
}
</style>
