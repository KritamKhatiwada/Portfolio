<script lang="ts">
	import sveltelogo from '$lib/images/svelte-16-svgrepo-com.svg';
	import gitlogo from '$lib/images/git-svgrepo-com.svg';
	import tslogo from '$lib/images/typescript-svgrepo-com.svg';
	import jslogo from '$lib/images/javascript-svgrepo-com.svg';
	import illustratorlogo from '$lib/images/adobe-illustrator-svgrepo-com.svg';
	import fresco from '$lib/images/adobe-fresco-icon.svg';
	import linklogo from '$lib/images/adobe-illustrator-svgrepo-com.svg';
	import handPic from '$lib/images/Hand-semi.png';
	import megif from '$lib/images/Working_illustration2.gif';
	import nameLogo from '$lib/images/name-logo.png';
	// import maillogo from '$lib/images/mail-svgrepo-com.svg';
	import figma from '$lib/images/figma.svg'
	import img4now from '$lib/images/imagefornow.jpg'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="home" />
</svelte:head>
<div id="hero" class="flex  justify-between">
	<div class="w-[30%] ">
		<!-- <p class="text-3xl font-bold height"> Kritam Khatiwada</p> -->
		<p class="text-lg text-center mb-6">I'm Kritam, a frontend developer and a graphic desiginer form Nepal.</p>	
		<div ><img  class="h-90" src={megif} alt="Working Illustration"></div>
		<div class="text-xl ">
					</div>	
		<div class="flex">
		</div>
		
	</div>
	<div class=" ml-6 flex flex-col-reverse w-[60%] gap-12 ">
		<div class="flex-row flex flex-wrap items-center gap-x-6  gap-y-6">
			<button class=" p-2  bg-[#D3BD95]  border-l-6 border-[#D23939] shadow-md"><div class="p-2 flex flex-row custom-dashed-border items-center  justify-center gap-3"><img src={sveltelogo} alt="svelte" class="h-5 ml-2 " /><div class="mr-2">Svelte</div></div></button>
			<button class=" p-2  bg-[#D3BD95] shadow-md">	<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={jslogo} alt="Javascript" class="h-5 ml-2" /><div class="mr-2">Javascript</div></div></button>
			<button class=" p-2  bg-[#D3BD95] shadow-md"><div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={tslogo} alt="Typescript" class="h-5 ml-2 " /><div class="mr-2">TypeScript</div></div></button>
			<!-- <button class=" p-2  bg-[#D3BD95] shadow-md"><div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={gitlogo} alt="Git" class="h-5 ml-2" /><div class="mr-2">Git</div></div></button> -->
			<button class=" p-2 bg-[#D3BD95]  border-solid shadow-md "><div class="p-2 flex flex-row custom-dashed-border items-center  justify-center gap-3"><img src={figma} alt="figma" class="h-6 ml-2" /><div class="mr-2">Figma</div></div></button>
			<button class=" p-2  bg-[#D3BD95] shadow-md"><div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={illustratorlogo} alt="adobe illustrator" class="h-5 ml-2 " /><div class="mr-2">Illustrator</div></div></button>
			<!-- <button class=" p-2  bg-[#D3BD95] shadow-md">	<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={fresco} alt="fresco" class="h-5 ml-2" /><div class="mr-2">Fresco</div></div></button> -->
			<!-- <button class=" p-2  bg-[#D3BD95] shadow-md">	<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={illustratorlogo} alt="fresco" class="h-5 ml-2" /><div class="mr-2">Photoshop</div></div></button> -->
			<!-- <button class=" p-2  bg-[#D3BD95] shadow-md">	<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={illustratorlogo} alt="fresco" class="h-5 ml-2" /><div class="mr-2"></div></div></button> -->
		</div>
		<div class="h-80 flex flex-row custom-dashed-border ">
			<!-- <img src={img4now} alt="portrait" srcset="" class=" w-full h-80"> -->
		</div>
		
		<!--
			use different font 
			fix typography (line height and space)
			add github and email link
			take own picture wide shot
			add second page
			change the figma logo to red -->
	</div>
</div>
<div id="projects" class="flex mt-32 px-0">
	<div class="w-[70%]">
		<img class="" src={handPic} alt="Project Showcase" srcset="">
	</div>

	<div class="flex flex-col  w-[30%]">
		<span class=" border-black font-bold text-7xl mb-3">PROJECTS</span>
	<span class="font-semibold text-3xl mb-3">Amazon Client-Side</span>
	<div class="flex gap-3  mb-6">
		<button class="p-1 bg-[#ffffff39] rounded">HTML</button>
		<button class="p-1 bg-[#ffffff39] rounded">CSS</button>
		<button class="p-1 bg-[#ffffff39] rounded">Javascript</button>
	</div>
	
	<p class="mb-3 ">A fully responsive front-end clone of Amazon's e-commerce platform.</p>
	<p class="mb-6">Functionality: Product listings, responsive, cart functionality (with localStorage), search bar.</p>
	<button class=" py-2 px-3 bg-[#D3BD95] shadow-md">
		<div class="py-2 px-6 flex flex-row custom-dashed-border items-center justify-center gap-3">View<img src={linklogo} alt="view" class="h-5 " /></div></button>
	</div>
</div>