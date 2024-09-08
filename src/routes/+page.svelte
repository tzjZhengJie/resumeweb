<script>
	import { Linkedin, Github, Mail, Download } from 'lucide-svelte';
	import { assets } from '$app/paths';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import typewriter from '../api/typewriter';
	let ready = false;
	onMount(() => {
        setTimeout(() => {
            ready = true;
        }, 500);
    });

	const links = 'flex items-center mb-2 sm:mb-0 sm:mr-2';
</script>

<style>
.logo-cloud {
	width: 105%; /* Adjust this value to your preference */
	/* Other styles */
}
</style>

{#if ready}
<div class="relative text-white flex items-center justify-center h-full px-4 phone:px-0">
	<div class="relative z-10 text-start">
		<div class="text-start">
			<div in:typewriter={{ speed: 10 }}>
				
				<div class="tablet:flex laptop:flex desktop:flex tablet:gap-4 laptop:gap-4 desktop:gap-4">
					<Avatar
						class="mx-auto"
						src={`${assets}/me.jpg`}
						width="w-40"
						border="border-4 border-surface-300-600-token hover:!border-primary-500"
						rounded="rounded-full"
					/>
					<div class="flex-col">
						<div class="mt-6">
							<h1 class="text-4xl phone:text-4xl font-bold">Zheng Jie</h1>
							<p class="text-3x1 phone:text-3x1 mt-2">
								I'm a data analyst with a passion for data-driven decision-making and problem-solving.
							</p>
						</div>
						<div class="flex justify-center text-xs sm:text-sm mt-4">
							<a
								transition:fly={{ y: 50, duration: 1800, delay: 350 }}
								class={links}
								href="https://www.linkedin.com/in/tan-zheng-jie/"
							>
								<Linkedin />&nbsp;LinkedIn
							</a>
							<div class="mx-3"></div>
							<a
								transition:fly={{ y: 50, duration: 1800, delay: 450 }}
								class={links}
								href="https://github.com/tzjZhengJie"
							>
								<Github />&nbsp;Github
							</a>
							<div class="mx-3"></div>
							<a
								transition:fly={{ y: 50, duration: 1800, delay: 550 }}
								class={links}
								href="mailto:zhengjietan20@gmail.com"
							>
								<Mail />&nbsp;Email
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>	
</div>
{/if}