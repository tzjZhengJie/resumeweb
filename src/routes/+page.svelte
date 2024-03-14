<script>
	import { Linkedin, Github, Mail, Download } from 'lucide-svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<style>
.logo-cloud {
	width: 105%; /* Adjust this value to your preference */
	/* Other styles */
}
</style>

<div class="relative text-white flex items-center justify-center h-full px-4 sm:px-0">
	<div class="relative z-10 text-start">
		<div class="flex items-center">
			<Avatar
				class="mr-4"
				src="photo_2024-03-04_16-43-23.jpg"
				width="w-32"
				border="border-4 border-surface-300-600-token hover:!border-primary-500"
				rounded="rounded-full"
			/>
			<div>
				<p class="text-2xl sm:text-4xl">Tan Zheng Jie</p>
				<p class="text-lg sm:text-2xl mt-2" style="font-family: Georgia;">Data Analyst</p>
			</div>
		</div>

		<div class="logo-cloud grid-cols-1 sm:!grid-cols-4 gap-0.5 mt-3">
			<a class="logo-item" href="https://www.linkedin.com/in/tan-zheng-jie/">
				<Linkedin />&nbsp;LinkedIn
			</a>
			<a class="logo-item" href="https://github.com/tzjZhengJie">
				<Github />&nbsp;Github
			</a>
			<a class="logo-item" href="mailto:zhengjietan20@gmail.com">
				<Mail />&nbsp;Email
			</a>

			<a class="logo-item" href="https://drive.google.com/file/d/1OJjd54v2l-VmpOemekuJ0auWGsZ_nK_P/view?usp=sharing">
				<button class="btn variant-filled">
					<Download />&nbsp;Resume
				</button>
    		</a>
		</div>
	</div>
</div>
