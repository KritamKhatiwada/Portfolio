<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import sveltelogo from '$lib/images/svelte-logo.svg';
	import figma from '$lib/images/figma.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="flex px-0">
	<div class="w-90 border-r-1">
		<p class="text-6xl">Kritam Khatiwada</p>
		<p class="text-3xl text-left"> Front-End Developer, UI/UX Desiginer, and High School Student	from Morang, Nepal</p>
	</div>
	<div class="w-full ml-6 flex-col">
		<div class=" mb-6 flex flex-row gap-6">
			<div class="flex ">
				<div  class="p-2 border-1 border-dashed flex ">
					<img src={figma} alt="figma" class="h-5 mr-2" /> Figma </div>
			</div>
			<div class="flex  ">
				<div  class="p-2 border-1 border-dashed flex ">
					<img src={sveltelogo} alt="svelte" class="h-5 mr-2" /> Svelte </div>
			</div>
			<div class="flex ">
				<div  class="p-2 border-1 border-dashed flex ">
					<img src={sveltelogo} alt="Js" class="h-5 mr-2" /> Javascript </div>
			</div>
			<div class="flex ">
				<div class="p-2 border-1 border-dashed flex ">
					<img src={sveltelogo} alt="Ts" class="h-5 mr-2" /> TypeScript </div>
			</div>
			<div class="flex lex-row ">
				<div id="figma" class="p-2 border-1 border-dashed flex ">
					<img src={sveltelogo} alt="svelte" class="h-5 mr-2" /> Svelte </div>
			</div>
		</div>
		<div class="h-60 bg-blue-400"></div>
	</div>
</div>