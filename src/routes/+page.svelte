<script>
	import { Linkedin, Github, Mail } from 'lucide-svelte';

	const links = 'flex items-center mb-2 sm:mb-0 sm:mr-2';
</script>

<div class="text-white flex items-center justify-center h-full">
	<div class="text-start">
		<p class="text-2xl sm:text-4xl">Tng Renjie</p>
		<p class="text-lg sm:text-xl mt-2">Electrical & Electronic Engineering Undergraduate</p>
		<div class="flex flex-col items-left sm:flex-row text-xs sm:text-sm mt-2">
			<a class={links} href="https://www.linkedin.com/in/tng-renjie/">
				<Linkedin />&nbsp;LinkedIn
			</a>
			<a class={links} href="https://github.com/tngrj">
				<Github />&nbsp;Github
			</a>
			<a class={links} href="mailto:rtng001@e.ntu.edu.sg">
				<Mail />&nbsp;Email
			</a>
		</div>
	</div>
</div>
