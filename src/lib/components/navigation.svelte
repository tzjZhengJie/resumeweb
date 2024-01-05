<script lang="ts">
	import { page } from '$app/stores';
	import { TabAnchor, TabGroup, LightSwitch } from '@skeletonlabs/skeleton';
	import { GanttChart, Home, User } from 'lucide-svelte';

	const nav = 'flex flex-col items-center';
</script>

<div>
	<TabGroup
		justify="justify-center"
		active="variant-ghost-secondary"
		hover="hover:variant-soft-secondary"
		flex="flex-1 lg:flex-none"
		rounded="rounded-lg"
		border="border-0"
		class="text-surface-600-300-token rounded-lg fixed z-50 -translate-x-1/2 bottom-8 left-1/2 bg-surface-300-600-token w-auto"
	>
		<TabAnchor href="/" selected={$page.url.pathname === '/'}>
			<svelte:fragment slot="lead"><div class={nav}><Home />Home</div></svelte:fragment>
		</TabAnchor>
		<span class="mx-2"></span>
		<TabAnchor href="/project" selected={$page.url.pathname === '/project'}>
			<svelte:fragment slot="lead"><div class={nav}><GanttChart />Projects</div></svelte:fragment>
		</TabAnchor>
		<span class="mx-2"></span>
		<TabAnchor href="/about" selected={$page.url.pathname === '/about'}>
			<svelte:fragment slot="lead"><div class={nav}><User />About</div></svelte:fragment>
		</TabAnchor>
	</TabGroup>
</div>

<div class="fixed bottom-12 right-8">
	<LightSwitch />
</div>
