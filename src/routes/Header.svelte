<script lang="ts">
	import { page } from '$app/state';
	import homelogo from '$lib/images/home-svgrepo-com.svg';
	
</script>
<header class=" flex justify-center h-16 items-center border-t-1 border-b-1 sticky top-0 mb-11 bg-[#bba378] bg-[url('./lib/images/clean-gray-paper.png')] ">
		<!-- <a href="/" class="flex w-10 gap-2 no-underline"> 
				<div class=" w-5 flex"> <img alt="Home" src={homelogo}/></div>
		</a> -->
	<div class=" lg:w-50 "> 
		<ul class="flex flex-row justify-between">
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>
			<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
			<!-- <li aria-current={page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
			<a href="/sverdle">Sverdle</a>
			</li> -->
		</ul>
	</div>

	
</header>
