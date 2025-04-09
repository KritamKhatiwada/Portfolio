<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app px-6 relative font-serif">
	<div class="select-none ">
		<div class="border-b-1 h-6 flex items-center justify-end"></div>
			<div class=" flex align-middle justify-center">
				<span class="lg:text-8xl md:text-7xl sm:text-6xl   py-12">THE KHATIWADA TIMES</span>
			</div>
	</div>

	<Header />

	<main class=" h-600 font-sans ">
		{@render children()}
	</main>
</div>
<style lang="postcss">
	@reference "tailwindcss";
	:global(html) {
	  background-color: theme(--color-gray-100);
	}
  </style>
