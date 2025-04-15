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
	import maillogo from '$lib/images/mail-svgrepo-com.svg';
	import linkedinlogo from '$lib/images/linkedin-rounded-svgrepo-com.svg';
	import figma from '$lib/images/figma.svg'
	import instalogo from '$lib/images/instagram-svgrepo-com.svg';
	import youtubelogo from '$lib/images/youtube-168-svgrepo-com.svg';
	import githublogo from '$lib/images/github-square-svgrepo-com.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="home" />
</svelte:head>
<div id="hero" class="flex  gap-12 justify-between">
	<div class="w-[50%]  flex gap-12 flex-col ">
			<div class="flex flex-row  shadow-sm  items-center w-full ">
				<div class="h-50 w-full flex border-r-1 "><img  class="h-full p-1 pr-6  " src={megif} alt="Working Illustration"></div>
				<div class="flex flex-col h-50 w-full p-2 pl-6   bg-[#8e723d1b] justify-between ">
					<div>
						<p class="font-bold text-xl">Kritam Khatiwada</p>
						
						<p>Full-Stack Developer</p>
						<p>UI/UX Designer</p>
						<p class="italic">from Morang, Nepal</p>
					</div>
					<div class="flex gap-3 items-center justify-end">
						<!-- <a href="https://instagram.com/Losxsus"><img src={maillogo} class="h-9" alt="Gmail link"></a> -->
						<!-- <a href="https://youtube.com/@losx-69"><img src={youtubelogo} class="h-8" alt="youtube link"></a> -->
						<a href="https://linked.com/KritamKhatiwada"><img src={linkedinlogo} class="h-6" alt="Linkedin link"></a>
						<a href="https://github.com/KritamKhatiwada"><img src={githublogo} class="h-7" alt="Github link"></a>
					</div>
				</div>

			</div>
			<div>
				<div class="flex-row flex flex-wrap items-center gap-x-3  gap-y-3 text-sm">
							<button class=" p-1  bg-[#D3BD95]  border-l-6 border-[#D23939] shadow-sm"><div class="p-1 flex flex-row custom-dashed-border items-center  justify-center gap-2"><img src={sveltelogo} alt="svelte" class="h-4 ml-2 " /><div class="mr-2">Svelte</div></div></button>
							<button class=" p-1  bg-[#D3BD95] shadow-sm">	<div class="p-1 flex flex-row custom-dashed-border items-center justify-center gap-2"><img src={jslogo} alt="Javascript" class="h-4 ml-2" /><div class="mr-2">Javascript</div></div></button>
							<button class=" p-1  bg-[#D3BD95] shadow-sm"><div class="p-1 flex flex-row custom-dashed-border items-center justify-center gap-2"><img src={tslogo} alt="Typescript" class="h-4 ml-2 " /><div class="mr-2">TypeScript</div></div></button>
							<button class=" p-1  bg-[#D3BD95] shadow-sm"><div class="p-1 flex flex-row custom-dashed-border items-center justify-center gap-2"><img src={gitlogo} alt="Git" class="h-5 ml-2" /><div class="mr-2">Git</div></div></button>
							<button class=" p-1  bg-[#D3BD95] shadow-sm"><div class="p-1 flex flex-row custom-dashed-border items-center justify-center gap-2"><img src={illustratorlogo} alt="adobe illustrator" class="h-4 ml-2 " /><div class="mr-2">Illustrator</div></div></button>
							<button class=" p-1 bg-[#D3BD95]  border-solid shadow-sm "><div class="p-1 flex flex-row custom-dashed-border items-center  justify-center gap-2"><img src={figma} alt="figma" class="h-4 ml-2" /><div class="mr-2">Figma</div></div></button>
							<button class=" p-1  bg-[#D3BD95] shadow-sm">	<div class="p-1 flex flex-row custom-dashed-border items-center justify-center gap-2"><img src={fresco} alt="fresco" class="h-4 ml-2" /><div class="mr-2">Fresco</div></div></button>
				</div>
			</div>
		
	</div>
	<div class=" w-full">
		<div class="h-120 flex flex-row custom-dashed-border ">
		</div>
	</div>
</div>

<div id="projects" class="flex mt-32 px-0">

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