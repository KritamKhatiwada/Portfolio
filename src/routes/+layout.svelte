<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="app px-6">
	<div class="border-b-1 h-16 flex-row justify-end-safe">
	<p>	Date: 2025/01/18 to right  </p>
	</div>
	<div class=" flex align-middle justify-center">
		<p class="text-[150px]">The Khatiwada Times</p>
	</div>
	<Header />

	<main class="px-6">
		{@render children()}
	</main>
</div>
<style lang="postcss">
	@reference "tailwindcss";
	:global(html) {
	  background-color: theme(--color-gray-100);
	}
  </style>
