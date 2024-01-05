<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/components/navigation.svelte';
</script>

<Navigation />

<slot class="bg-surface-500 " />
