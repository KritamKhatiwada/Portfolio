<script lang="ts">
	import { page } from '$app/state';
	import homelogo from '$lib/images/home-svgrepo-com.svg';
	import githublogo from '$lib/images/github-square-svgrepo-com.svg';
	import instalogo from '$lib/images/instagram-svgrepo-com.svg';
	import linkedinlogo from '$lib/images/linkedin-rounded-svgrepo-com.svg';
	import youtubelogo from '$lib/images/youtube-168-svgrepo-com.svg';
</script>
<header class=" flex justify-between h-16 items-center border-t-1 border-b-1 sticky top-0 mb-11 bg-[#bba378] bg-[url('./lib/images/clean-gray-paper.png')] ">
		<a href="/" class="flex gap-2 no-underline"> 
				<div class=" w-4 flex"> <img alt="Home" src={homelogo}/></div>
			<p>Morang, Nepal</p>
		</a>
	<div class=" lg:w-50 "> 
		<ul class="flex flex-row justify-between">
			<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<li aria-current={page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Resume</a>
			</li>
			<!-- <li aria-current={page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
			<a href="/sverdle">Sverdle</a>
			</li> -->
		</ul>
	</div>
	<div class="flex gap-3 items-center">
		<a href="https://instagram.com/Losxsus"><img src={instalogo} class="h-5" alt="Instagram link"></a>
		<a href="https://youtube.com/@losx-69"><img src={youtubelogo} class="h-6" alt="youtube link"></a>
		<a href="https://linked.com/KritamKhatiwada"><img src={linkedinlogo} class="h-5" alt="Linkedin link"></a>
		<a href="https://github.com/KritamKhatiwada"><img src={githublogo} class="h-6" alt="Github link"></a>
	</div>
	
</header>
