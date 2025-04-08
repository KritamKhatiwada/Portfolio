<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import sveltelogo from '$lib/images/svelte-logo.svg';
	import figma from '$lib/images/figma.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="home" />
</svelte:head>
<div class="flex px-0">
	<div class="w-[30%] border-r-1">
		<p class="text-6xl ">Kritam Khatiwada</p>
		<p class="text-3xl text-left"> Front-End Developer, UI/UX Desiginer, and High School Student	from Morang, Nepal</p>
	</div>
	<div class=" ml-6 flex flex-col w-full gap-y-12">
		<div class="flex-row flex items-center  gap-x-6 text-base">
		<button class=" p-2 bg-[#D3BD95] border-l-6 border-[#D23939] border-solid shadow-md ">
			<div class="p-2 flex flex-row custom-dashed-border  gap-3"><img src={figma} alt="figma" class="h-6 " />Figma</div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border gap-3"><img src={sveltelogo} alt="svelte" class="h-5 " />Svelte</div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border gap-3"><img src={figma} alt="Javascript" class="h-5" />Javascript</div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border gap-3"><img src={figma} alt="Typescript" class="h-5 " />TypeScript</div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border gap-3"><img src={figma} alt="Git" class="h-5 " />Git</div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md ">
			<div class="p-2 flex flex-row custom-dashed-border gap-3"><img src={figma} alt="Typescript" class="h-5 " />TypeScript</div></button>
			</div>
			<!-- need to think about what to put below
			 add logo to all 
			 decrease line height of skills/ui/ux stuff
			 add github and email link
			 reduce gap between figma and unk thing to add
			 check without gradient make it fell like a newspaper-->
			<div class="h-80 bg-blue-900"></div>
		</div>
</div>