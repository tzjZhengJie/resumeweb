<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { assets } from '$app/paths';
	import { onMount } from 'svelte';
	import { Youtube } from 'lucide-svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import {
		Home
	} from 'lucide-svelte';
</script>

<div class="relative m-4">
                <div>
                    <img src="{assets}/images/graph.png" alt="graph" class="object-cover border-4 border-black mx-auto desktop:w-auto laptop:w-auto tablet:w-96">
                </div>
                
                <div class="flex flex-col mt-2">
                    <div class="grid gap-4">
                        <div>
                            <h2 class="text-3xl">Description</h2>
                            <p class="mobile:text-sm tablet:text-xl text-2xl italic opacity-80">"Leveraging exploratory data analysis in Python to examine murder rate among citizen's variables such as educational level, location, income, etc, and determine the correlation with assault rate."</p>
                        </div>
                        <div>
                            <h2 class="text-3xl">Skills Applied</h2>
                            <div class="flex gap-2 mt-2">
                                <span class="rounded-full border p-2 text-xs hover:bg-slate-600 hover:cursor-none">Python</span>
                                <span class="rounded-full border p-2 text-xs hover:bg-slate-600 hover:cursor-none">SQL</span>
                            </div>
                        </div>
                        <div class="border-t-2 border-white"></div>
                        <div>
                            <h2 class="text-3xl">Implementation</h2>
                            <div class="mt-2 grid gap-2 list-decimal tablet:text-xl">
                                <li class="hover:opacity-80">Import CSV dataset into VSC to facilitate the required analysis</li>
                                <li class="hover:opacity-80">Following, I started with preprocessing to remove any null values and unwanted data that is irrelavant to the findings that is required</li>
                                <li class="hover:opacity-80">I proceeded with Exploratory Data Analysis (EDA) by introducing new features for a more efficient statistical analysis later on</li>
                                <li class="hover:opacity-80">Subsequently, I used heat-map and various charts to perform in-depth data breakdown which aids on a comprehensive exploration</li>
                            </div>
                        </div>
                        <div class="border-t-2 border-white"></div>
                        <div class="grid gap-2">
                            <h2 class="text-3xl">Statistical Analysis</h2>
                            <div>
                                <img src="{assets}/images/pearson.jpg" alt="Python" class="object-contain">
                            </div>
                            <div class="tablet:text-xl grid gap-2">
                                <li class="hover:opacity-80">Utilised Pearson correlation, I am able to find variables with significant correlation</li>
                                <li class="hover:opacity-80">H0: There is no significant correlation between assault rate and the components in the dataframe</li>
                                <li class="hover:opacity-80">Ha: There is a significant correlation between assault rate and at least one of the components in the dataframe</li>
                            </div>
                            <div class="mt-5">
                                <img src="{assets}/images/python.jpg" alt="Python" class="object-contain">
                            </div>
                            <p class="tablet:text-xl">Heat-map is also utilised to visually determine the correlation between each independent variables</p>
                        </div>
                        <div class="border-t-2 border-white"></div>
                        <div>
                            <h2 class="text-3xl">Overview of the analysis</h2>
                            <div class="grid gap-2 tablet:text-xl">
                                <li class="hover:opacity-80">Importing Libraries and dataset: Pandas, glob, seaborn, matplotlib, numpy, scipy, pandasql</li>
                                <li class="hover:opacity-80">EDA: Preprocessing, data cleaning, feature engineering</li>
                                <li class="hover:opacity-80">Statistical Analysis: Pearson correlation, Hypothesis testing</li>
                            </div>
                        </div>
                    </div>
                </div>
</div>
