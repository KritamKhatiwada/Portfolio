<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app px-6 relative">
	<div class="select-none ">
		<div class="border-b-1 h-16 flex items-center justify-end">
			<!-- <p>	Date: 2025/01/18 with npm  </p> -->
			</div>
			<div class=" flex align-middle justify-center">
				<p class="lg:text-9xl md:text-7xl sm:text-6xl  tracking-wide">The Khatiwada Times</p>
			</div>
	</div>

	<Header />

	<main class=" h-500 ">
		{@render children()}
	</main>
</div>
<style lang="postcss">
	@reference "tailwindcss";
	:global(html) {
	  background-color: theme(--color-gray-100);
	}
  </style>
