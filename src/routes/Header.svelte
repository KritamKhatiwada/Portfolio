<script lang="ts">
	import { page } from '$app/state';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>
<header class="flex justify-between h-16 items-center border-t-1 border-b-1">
	<div>📍 Morang, Nepal</div>
	<div class="w-1/6 "> 
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
