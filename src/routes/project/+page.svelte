<script lang="ts">
    import { onMount, afterUpdate } from 'svelte';
    import { fly } from 'svelte/transition';
    import { assets } from '$app/paths';
    import { base } from '$app/paths';
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
    import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';

    let ready = false;
    let ready1 = false;
    let ready2 = false;
    let readya = false;
    let readyb = false;
    let readyc = false;
    let ready_overall = false;
    
    let tabSet: number=2;
    let tabSet1: number=0;
    let selectedTools: string[] = ["Power BI"];

    onMount(() => {
        setTimeout(() => {
            ready = true;
            ready1 = true;
            ready2 = true;
            readya = true;
            readyb = true;
            readyc = true;
            ready_overall = true;
        }, 500); 
    });

    $: {
        if (tabSet === 0) {
            ready1 = ready2 = false;
			selectedTools = ["Power BI"];
            setTimeout(() => {
                ready = true;
            }, 510);

        } else if (tabSet === 1) {
            ready = ready2 = false;
            setTimeout(() => {
                ready1 = true;
            }, 510);
        }

        else if (tabSet === 2) {
            ready = ready1 = false;
            setTimeout(() => {
                ready2 = true;
            }, 510);
        }

        if (tabSet1 === 0) {
            readyb =readyc= false;
			selectedTools = ["Power BI"];
            setTimeout(() => {
                readya = true;
            }, 510);

        } else if (tabSet1 === 1) {
            readya = readyc = false;
            setTimeout(() => {
                readyb = true;
            }, 510);
        }

        else if (tabSet1 === 2) {
            readya = readyb = false;
            setTimeout(() => {
                readyc = true;
            }, 510);
        }
    }

    afterUpdate(() => {
        if (ready && readya && tabSet !== 2) {
        tabSet = 0;
        tabSet1 = 0;
        }
    });

    function handleChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        selectedTools = Array.from(target.selectedOptions, option => option.value);
        console.log('Selected Tools:', selectedTools);
    }
</script>

<style>
    .select-wrapper {
        position: absolute;
        margin-top: -24%; /* Adjust top positioning as needed */
        margin-left: 5%;
        width: 120%;
        height: auto; /* Auto height to fit options */
        overflow-y: auto; /* Hide any overflow, including scrollbars */
    }

    .select {
        width: 100%;
        height: 250px; /* Auto height to fit options */
        padding: 25px;
        background-color: transparent; /* Make background transparent */
        color: white; /* Text color */
        border: none; /* Remove border */
        font-size: 23px; /* Adjust font size as needed */
        appearance: none; /* Remove default appearance */
        outline: none; /* Remove outline on focus */
        scrollbar-width: none; /* Firefox specific: hide scrollbar */
        -ms-overflow-style: none; /* IE and Edge specific: hide scrollbar */
        
    }

    .select option {
        margin: 15px 0;
        background-color: rgba(23, 23, 23, 0.5); /* Semi-transparent background for options */
    }
</style>

{#if ready_overall}
<TabGroup justify="justify-center">
    <div style="display: flex; flex-direction: column;">
        <div in:fly={{x:-50, duration: 500, delay: 200}} out:fly={{x:-50, duration: 200}} style="display: flex;">
            <Tab bind:group={tabSet} name="tab3" value={2} class="text-white">Python</Tab>
            <Tab bind:group={tabSet} name="tab1" value={0} class="text-white">Dashboard</Tab>
            <Tab bind:group={tabSet} name="tab2" value={1} class="text-white">Hackathon</Tab>
        </div>
        <div in:fly={{x:50, duration: 700, delay: 500}} out:fly={{x:-50, duration: 200}} style="display: flex; margin-left: 9px; font-weight: bold;">
            {#if tabSet === 0 && ready}    
                <!-- <div in:fly={{x:-50, duration: 500, delay: 200}} out:fly={{x:-50, duration: 200}} style="display: flex; margin-left: 9px; font-weight: bold;"> -->
                    <Tab bind:group={tabSet1} name="tab1" value={0} class="text-white">Power BI</Tab>
                    <Tab bind:group={tabSet1} name="tab3" value={1} class="text-white">Tableau</Tab>
                    <Tab bind:group={tabSet1} name="tab2" value={2} class="text-white">Excel</Tab>
                <!-- </div> -->
            {/if}
        </div>
    </div>  

    <svelte:fragment slot="panel">
        {#if tabSet === 0 && ready}
            <div in:fly={{x:-50, duration: 500, delay: 200}} out:fly={{x:-50, duration: 500}}>
                <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:mx-64 pb-48 mx-8 mt-20">
                    {#if tabSet1 === 0 && readya}
                        <div class="card card-hover overflow-hidden">
                            <header>
                                <img src={`${assets}/images/spotify.jpg`} alt="Spotify Dashboard" class="inset-0 w-full h-full object-cover"/>
                            </header>
                            <div class="p-4 space-y-4">
                                <h3 class="h3">Spotify Dashboard</h3>
                                <article>
                                    <ul class="list-disc pl-5 space-y-2">
                                        <li class="text-sm">Uses PowerPoint to generate a Spotify theme canvas background</li>
                                        <li class="text-sm">Added new measures that utilise the current data in the dataset and produce new insights such as average streams per year</li>
                                        <li class="text-sm">Understanding basic tools in Power BI such as slicers, drop down bars, etc, to promote user-friendly interface</li>
                                        <li class="anchor text-sm font-bold">Skill utilised: Power BI, PowerPoint</li>
                                    </ul>
                                </article>
                            </div>
                        </div>
						<div class="card card-hover overflow-hidden">
							<header>
								<img
									src={`${assets}/images/company_abc.png`}
									alt="Landing Page"
									class="inset-0 w-full h-full object-cover"
								/>
							</header>
							<div class="p-4 space-y-4">
								<h3 class="h3">Company's Employee Analytics Dashboard</h3>
								<article>
									<ul class="list-disc pl-5 space-y-2">
										<li class="text-sm">
											Data cleaning with Python; utilised Pandas library to clean and transform data
										</li>
										<li class="text-sm">
											Utilised SQL to do feature extraction; frequency of employee coming into different timeslot,
											how many days are the employees working per week, etc.
										</li>
										<li class="text-sm">
											Utilised DAX to add leading zeros to the employee ID, etc. 
										</li>
										<li class="anchor text-sm font-bold">
											Skill utilised: SQL, Pandas, Pandasql, Numpy, Matplotlib, Glob,
										</li>
								</article>
							</div>
						</div>
                    {/if}
					{#if tabSet1 === 1 && readyb}
						<div class="card card-hover overflow-hidden">
							<header>
								<img
									src={`${assets}/images/covid_dashboard_1.png`}
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
										<li class="anchor text-sm font-bold">
											Skills used: Joins, CTE's, Temp Tables, Windows Functions, Aggregate Functions, Creating Views, Converting Data Types
										</li>
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
					{/if}
					{#if tabSet1 === 2 && readyc}
                        <div class="card card-hover overflow-hidden">
                            <header>
                                <img
                                    src={`${assets}/images/excel_coffee_dashboard.png`}
                                    alt="Landing Page"
                                    class="inset-0 w-full h-full object-cover"
                                />
                            </header>
                            <div class="p-4 space-y-4">
                                <h3 class="h3">Coffee Sales Dashboard</h3>
                                <article>
                                    <ul class="list-disc pl-5 space-y-2">
                                        <li class="text-sm">
                                            Data preparation and cleaning in Excel to ensure consistency and accuracy
                                        </li>
                                        <li class="text-sm">
                                            Utilised pivot tables for visualisation of data, allowing dynamic updates as filters changes
                                        </li>
                                        <li class="text-sm">
                                            Adding slicers for easy filtering and data segmentation, and using timeline to filter specific date ranges.
                                        </li>
                                        <li class="anchor text-sm font-bold">
                                            Advanced Excel Formulas used: XLOOKUP, INDEX, MATCH, IFERROR, etc
                                        </li>
                                </article>
                            </div>
                        </div>
					{/if}
                </div>
            </div>
        {:else if tabSet === 1 && ready1}
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 justify-center sm:mx-64 pb-64 mx-auto px-4 mt-4">
                <div class="card card-hover overflow-hidden">
                    <a href="{`${base}/project/hackathon`}" in:fly={{x:-50, duration: 500 }} out:fly={{x:-50, duration: 500, delay: 200 }}>
                        <header>
                            <img src={`${assets}/images/hackathon-landing-page.png`} alt="Landing Page" class="inset-0 w-full h-80 object-cover"/>
                        </header>
                        <div class="p-4 space-y-4">
                            <h3 class="h3">"RetrenchGoWhere" web-application</h3>
                            <ul class="list-disc pl-5 space-y-2 mt-10">
                                <article>A platform for recently laid-off workers to discover job opportunities based on their previous experience and also develop new skills.</article>
                                <p>&nbsp;</p>
                                <p class=" anchor text-sm text-white-500 italic">Click here for more info</p>
                            </ul>
                        </div>
                        <hr class="opacity-50"/>
                        <footer class="p-4 card-footer flex justify-start items-center space-x-4">
                            <div class="flex-auto flex justify-between items-center">
                                <h6 class="font-bold">GoogleXdEEEvelopers Tech4Tomorrow Hackathon</h6>
                                <small>2024</small>
                            </div>
                        </footer>
                    </a>
                </div>
            </div>
        {:else if tabSet === 2 && ready2}
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 justify-center sm:mx-64 pb-64 mx-auto px-4 mt-4">
                <div class="card card-hover overflow-hidden">
                    <a href="{`${base}/project/crimerate`}" in:fly={{x:-50, duration: 500 }} out:fly={{x:-50, duration: 500, delay: 200 }}>
                        <header>
                            <img src={`${assets}/images/graph.png`} alt="Landing Page" class="inset-0 w-full h-80 object-cover"/>
                        </header>
                        <div class="p-4 space-y-4">
                            <h3 class="h3">Assault rate statistical analysis</h3>
                            <ul class="list-disc pl-5 space-y-2 mt-10">
                                <article>Categorising groups based on characteristics, and the statistical significant for prediction</article>
                                <p>&nbsp;</p>
                                <p class=" anchor text-sm text-white-500 italic">Click here for more info</p>
                            </ul>
                        </div>
                        <hr class="opacity-50"/>
                        <footer class="p-4 card-footer flex justify-start items-center space-x-4">
                            <div class="flex-auto flex justify-between items-center">
                                <small>2024</small>
                            </div>
                        </footer>
                    </a>
                </div>
            </div>
        {/if}
    </svelte:fragment>
</TabGroup>
{/if}
