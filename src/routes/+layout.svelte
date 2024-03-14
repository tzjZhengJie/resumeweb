<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/navigation.svelte';
</script>

<Navigation />

<AppShell>
	<svelte:fragment slot="header">
		<AppBar background="bg-surface-500-400">
			<div class="flex items-center top-8">
				<div class="fixed right-8">
					<LightSwitch />
				</div>
			</div>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
