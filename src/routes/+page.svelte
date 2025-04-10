<script lang="ts">
	import sveltelogo from '$lib/images/svelte-16-svgrepo-com.svg';
	import githublogo from '$lib/images/github-square-svgrepo-com.svg';
	import gitlogo from '$lib/images/git-svgrepo-com.svg';
	import tslogo from '$lib/images/typescript-svgrepo-com.svg';
	import jslogo from '$lib/images/javascript-svgrepo-com.svg';
	import illustratorlogo from '$lib/images/adobe-illustrator-svgrepo-com.svg';
	import fresco from '$lib/images/adobe-fresco-icon.svg';
	import linklogo from '$lib/images/adobe-illustrator-svgrepo-com.svg';
	import handPic from '$lib/images/Hand-semi.png';
	// import maillogo from '$lib/images/mail-svgrepo-com.svg';
	import figma from '$lib/images/figma.svg'
	import img4now from '$lib/images/imagefornow.jpg'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="home" />
</svelte:head>
<div id="hero" class="flex  ">
	<div class="w-[30%] border-r-2 border-b-2 ">
		
		<div class="  flex  mb-6 border-black border-y-2  w-full ">
			<p class="text-8xl mr-3">WANTED</p>
		</div>
		<!-- <p class="text-xl  italic"> For Skills in Code & Design</p> -->
		<!-- <div class=" py-5 mr-2 mb-6 border-y-1 w-full select-none"><img src={namelogo} alt="Name" srcset="">
		</div> -->

					<span class="text-3xl font-semibold ">Kritam Khatiwada</span>
					<div class="text-lg pr-2 mb-3">
						<p>A Front-End Developer</p>
						<p>& Graphic Designer </p>
						<p>from Morang, Nepal</p>
					</div>
				
		<div class="flex gap-6">
			<div class="w-full "><a href="/"><img src={githublogo} alt="Github" aria-label="Github Link" width="50px"/></a></div>
		<!-- <div class=" w-12"><a href="/"><img src={maillogo} alt="Gmail" aria-label="Mail Link"/></a></div> -->
		</div>
		
	</div>
	<div class=" ml-6 flex flex-col  gap-12 w-full ">
		<div class="h-80 overflow-hidden "><img src={img4now} alt="portrait" srcset=""></div>

		<div class="flex-row flex items-center  gap-x-6 ">
			<button class=" p-2 bg-[#D3BD95] border-l-6 border-[#D23939] border-solid shadow-md ">
			<div class="p-2 flex flex-row custom-dashed-border items-center  justify-center gap-3"><img src={figma} alt="figma" class="h-6 ml-2" /><div class="mr-2">Figma</div></div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border items-center  justify-center gap-3"><img src={sveltelogo} alt="svelte" class="h-5 ml-2 " /><div class="mr-2">Svelte</div></div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={jslogo} alt="Javascript" class="h-5 ml-2" /><div class="mr-2">Javascript</div></div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={tslogo} alt="Typescript" class="h-5 ml-2 " /><div class="mr-2">TypeScript</div></div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={gitlogo} alt="Git" class="h-5 ml-2" /><div class="mr-2">Git</div></div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={illustratorlogo} alt="adobe illustrator" class="h-5 ml-2 " /><div class="mr-2">Illustrator</div></div></button>
		<button class=" p-2  bg-[#D3BD95] shadow-md">
			<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3"><img src={fresco} alt="fresco" class="h-5 ml-2" /><div class="mr-2">Fresco</div></div></button>
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
<div id="projects" class="flex mt-40 px-0">
	<div class="w-[70%]">
		<img class="" src={handPic} alt="Project Showcase" srcset="">
	</div>

	<div class="border-l-2 border-b-2 gap-3 flex flex-col items-end text-end w-[30%]"><p class=" mb-6 border-black border-y-2  w-full text-8xl ">PROJECTS</p>
	<h1 class="mt-6 ">Amazon</h1>
	<p class="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
		molestias numquam dolor odio fuga debitis harum quisquam voluptatibus porro ex 
		nulla quo esse accusantium.
	</p>
	<button class=" p-2  bg-[#D3BD95] shadow-md">
		<div class="p-2 flex flex-row custom-dashed-border items-center justify-center gap-3">View<img src={linklogo} alt="view" class="h-5 " /></div></button>
	</div>
</div>