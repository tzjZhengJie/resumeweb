<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/navigation.svelte';
</script>

<Navigation />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-500-400">
			<span class="justify-center">Title</span>
			<div class="fixed top-4 right-8">
				<LightSwitch />
			</div>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
