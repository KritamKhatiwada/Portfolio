<script lang="ts">
	import sveltelogo from '$lib/images/svelte-16-svgrepo-com.svg';
	import githublogo from '$lib/images/github-square-svgrepo-com.svg';
	import gitlogo from '$lib/images/git-svgrepo-com.svg';
	import tslogo from '$lib/images/typescript-svgrepo-com.svg';
	import jslogo from '$lib/images/javascript-svgrepo-com.svg';
	import maillogo from '$lib/images/mail-svgrepo-com.svg';
	import figma from '$lib/images/figma.svg'
	import img4now from '$lib/images/imagefornow.jpg'
	import grain from "$lib/images/clean-gray-paper.png"
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="home" />
</svelte:head>
<div class="flex px-0">
	<div class="w-[30%] border-r-1 ">
		
		<div class=" py-5  mr-2 mb-6 border-black border-y-1 w-full  text-[#D23939] select-none"><p class="text-7xl ">WANTED</p>
		</div>
		<!-- <p class="text-xl  italic"> For Skills in Code & Design</p> -->
		<!-- <div class=" py-5 mr-2 mb-6 border-y-1 w-full select-none"><img src={namelogo} alt="Name" srcset="">
		</div> -->

					<p class="text-4xl">Kritam Khatiwada</p>
					<p class="text-2xl pr-5"> Front-End Developer, UI/UX Designer from Morang, Nepal, is actively building and designing on the web.</p>
		<div class="flex gap-6">
			<div class="w-16"><a href="/"><img src={githublogo} alt="Github" aria-label="Github Link"/></a></div>
		<div class="w-16"><a href="/"><img src={maillogo} alt="Gmail" aria-label="Mail Link"/></a></div>
		</div>
		
	</div>
	<div class=" ml-6 flex flex-col w-full gap-y-10">
		<div class="h-80 overflow-hidden "><img src="{img4now}" alt="portrait" srcset=""></div>
		<div class="flex flex-row w-full border-t-1"><p class="text-xl">Skills: </p></div>
		<div class="flex-row flex items-center  gap-x-6 ">
			<button class=" p-2 bg-[#D3BD95] border-l-6 border-[#D23939] border-solid shadow-md ">
			<div class="p-2 flex flex-row custom-dashed-border items-center  justify-center gap-3"><img src={figma} alt="figma" class="h-6 " /><div class="mr-2">Figma</div></div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border items-center  justify-center gap-3"><img src={sveltelogo} alt="svelte" class="h-5 " /><div class="mr-2">Svelte</div></div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={jslogo} alt="Javascript" class="h-5" /><div class="mr-2">Javascript</div></div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={tslogo} alt="Typescript" class="h-5 " /><div class="mr-2">TypeScript</div></div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={gitlogo} alt="Git" class="h-5 " /><div class="mr-2">Git</div></div></button>
		</div>
			<!-- need to think about what to put belows
			 decrease line height of skills/ui/ux stuff
			 add github and email link
			 reduce gap between figma and unk thing to add
			 check without gradient make it fell like a newspaper-->
		</div>
</div>