<script lang="ts">
	import { page } from '$app/state';
	import homelogo from '$lib/images/home-svgrepo-com.svg';
</script>
<header class=" flex justify-between h-16 items-center border-t-1 border-b-1 sticky top-0 mb-11 ">
		<a href="/" class="flex gap-2 no-underline"> 
				<div class=" w-4 flex"> <img alt="Home" src={homelogo}/></div>
			<p>Morang, Nepal</p>
		</a>
	<div class=" lg:w-70 md:w-60 sm:w-1/3 "> 
		<ul class="flex flex-row justify-between">
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Work</a>
			</li>
			<li aria-current={page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href="/projects">Projects</a>
			</li>
			<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About The Artist</a>
			</li>
			<!-- <li aria-current={page.url.pathname.startsWith('/sverdle') ? 'page' : undefined}>
			<a href="/sverdle">Sverdle</a>
			</li> -->
		</ul>
	</div>
	
</header>
