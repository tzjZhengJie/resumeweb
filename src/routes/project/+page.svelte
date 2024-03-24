<script lang="ts">
    import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { assets } from '$app/paths';
	import { base } from '$app/paths';
	import typewriter from '../../api/typewriter';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	let ready = false;
	let tabSet: number = 0;
	onMount(() => (ready = true));

</script>


<TabGroup justify="justify-center">
		<Tab bind:group={tabSet} name="tab1" value={0}>Dashboard</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Hackathon</Tab>
		<!-- <Tab bind:group={tabSet} name="tab3" value={2}>Machine Learning</Tab> -->
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
		<div class="grid gap-4 grid-cols-1 sm:grid-cols-2 justify-center sm:mx-64 pb-48 mx-8 mt-20">
			<div class="card card-hover overflow-hidden">
				<header>
					<img
						src={`${assets}/images/spotify.jpg`}
						alt="Spotify Dashboard"
						class="inset-0 w-full h-full object-cover"
					/>
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3">Spotify Dashboard</h3>
					<article>
						<ul class="list-disc pl-5 space-y-2">
							<li class="text-sm">
								Uses PowerPoint to generate a Spotify theme canvas background
							</li>
							<li class="text-sm">
								Added new measures that utilise the current data in the dataset and produce new insights such as average streams per year
							</li>
							<li class="text-sm">
								Understanding basic tools in Power BI such as slicers, drop down bars, etc, to promote user-friendly interface
							</li>
							<li class="anchor text-sm font-bold">
								Skill utilised: Power BI, PowerPoint
							</li>
						</ul>
					</article>
				</div>
			</div>
			<div class="card card-hover overflow-hidden">
				<header>
					<img
						src={`${assets}/images/netflix_dashboard.png`}
						alt="Landing Page"
						class="inset-0 w-full h-full object-cover"
					/>
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3">Netflix Dashboard</h3>
					<article>
						<ul class="list-disc pl-5 space-y-2">
							<li class="text-sm">
								Using Tableau to create a dashboard that visualises metrics such as Top Genre, Age ratings, Ratings, etc.
							</li>
							<li class="text-sm">
								Understanding basic tools in Tableau such as packed-bubbles, horizontal bar charts, distinct count for area chart, geographic map.
							</li>	
		
					</article>
				</div>
			</div>
			<div class="card card-hover overflow-hidden">
				<header>
					<img
						src={`${assets}/images/hackathon-landing-page.png`}
						alt="Landing Page"
						class="inset-0 w-full h-full object-cover"
					/>
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3">COVID Dashboard</h3>
					<article>
						<ul class="list-disc pl-5 space-y-2">
							<li class="text-sm">
								Utilised SQL to clean and transform data from the World Health Organisation
							</li>
							<li class="text-sm">
								Created a dashboard in Tableau to visualise the data
							</li>
							<li class="anchor">
								Skills used: Joins, CTE's, Temp Tables, Windows Functions, Aggregate Functions, Creating Views, Converting Data Types
							</li>
					</article>
				</div>
			</div>
			
		</div>
		{:else if tabSet === 1}
		<div class="grid gap-4 grid-cols-2 sm:grid-cols-2 justify-center sm:mx-64 pb-64 mx-4 mt-4">
			<div class="card card-hover overflow-hidden">
				<a href="{`${base}/project/hackathon`}" in:fly={{ duration: 500 }} out:fly={{ duration: 500 }}>
					<header>
						<img
							src="{`${assets}/images/hackathon-landing-page.png`}"
							alt="Landing Page"
							class="inset-0 w-full h-80 object-cover"
						/>
					</header>
					<div class="p-4 space-y-4">
						<h3 class="h3">"RetrenchGoWhere" web-application</h3>
						<ul class="list-disc pl-5 space-y-2 mt-10">
							<article>
								A platform for recently laid-off workers to discover job opportunities based on their
								previous experience and also develop new skills.
							</article>
							<p>&nbsp;</p>
							<p class=" anchor text-sm text-white-500 italic">Click here for more info</p>
						</ul>
					</div>
					<hr class="opacity-50" />
					<footer class="p-4 card-footer flex justify-start items-center space-x-4">
						<div class="flex-auto flex justify-between items-center">
							<h6 class="font-bold">GoogleXdEEEvelopers Tech4Tomorrow Hackathon</h6>
							<small>2024</small>
						</div>
					</footer>
				</a>
			</div>
		</div>
		{:else if tabSet === 2}
			(tab panel 3 contents)
		{/if}
	</svelte:fragment>
</TabGroup>
			

