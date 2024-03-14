<script lang="ts">
	import { TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import { GanttChart, Home, User } from 'lucide-svelte';
	import { base } from '$app/paths';

	const nav = 'flex flex-col items-center';
</script>

<div class="overflow-y-auto">
	<TabGroup
		justify="justify-center"
		active="bg-gradient-to-br variant-gradient-warning-success text-surface-600 dark:text-white"
		hover="hover:bg-gradient-to-br variant-gradient-warning-success text-surface-600 opacity-60 dark:text-white"
		flex="flex-1 lg:flex-none"
		rounded="rounded-lg"
		border="border-0 rounded-lg outline outline-offset-2 outline-primary-500"
		class="text-surface-600-300-token rounded-lg fixed z-50 -translate-x-1/2 bottom-10 left-1/2 bg-surface-300-600-token w-auto"
	>
		<TabAnchor class="small-tab" href="{base}/">
			<svelte:fragment slot="lead">
				<div class={nav}>
					<Home />
					<span class="hidden md:inline">Home</span>
				</div>
			</svelte:fragment>
		</TabAnchor>
		<span class="mx-2"></span>
		<TabAnchor class="small-tab" href="{base}/project">
			<svelte:fragment slot="lead">
				<div class={nav}>
					<GanttChart />
					<span class="hidden md:inline">Projects</span>
				</div>
			</svelte:fragment>
		</TabAnchor>
		<span class="mx-2"></span>
		<TabAnchor class="small-tab" href="{base}/about">
			<svelte:fragment slot="lead">
				<div class={nav}>
					<User />
					<span class="hidden md:inline">About</span>
				</div>
			</svelte:fragment>
		</TabAnchor>
	</TabGroup>
</div>

<style>
	.small-tab {
		font-size: 0.8rem;
		padding: 5px;
	}
</style>
