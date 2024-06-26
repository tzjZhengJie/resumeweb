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

<div class="relative h-screen" style="padding-top: 5px; padding-bottom: 500px;">
                <div class="absolute" style="top: 0; left: 50%; transform: translateX(-50%); width: calc(100% - 200px); height: 450px; overflow: hidden;">
                    <img src="{assets}/images/graph.png" alt="graph" style="width: 100%; object-fit: cover;">
                </div>
                
                <div class="flex flex-col items-center justify-center" style="padding-top: 460px; padding-left: 95px; padding-right: 95px;">
                    <h2 style="align-self: flex-start; margin-top: 60px; font-size: 54px;">Description</h2>
                    <p style="align-self: flex-start; margin-top: 40px; font-size: 24px; line-height: 1.5;">Leveraging exploratory data analysis in Python to examine murder rate among citizen's variables such as educational level, location, income, etc, and determine the correlation with assault rate.</p>
                    <p style="align-self: flex-start; margin-top: 40px; font-size: 24px; line-height: 1.5; color: darkblue;">Skills Applied: Python, SQL</p>
                    <hr style="width: 100%; border-top: 1px solid #fff; margin-top: 40px;">
                    <h2 style="align-self: flex-start; margin-top: 60px; font-size: 54px;">Implementation</h2>
                    <li style="align-self: flex-start; margin-top: 40px; font-size: 24px; line-height: 1.5;">Import CSV dataset into VSC to facilitate the required analysis</li>
                    <li style="align-self: flex-start; margin-top: 40px; font-size: 24px; line-height: 1.5;">Following, I started with preprocessing to remove any null values and unwanted data that is irrelavant to the findings that is required</li>
                    <li style="align-self: flex-start; margin-top: 40px; font-size: 24px; line-height: 1.5;">I proceeded with Exploratory Data Analysis (EDA) by introducing new features for a more efficient statistical analysis later on</li>
                    <li style="align-self: flex-start; margin-top: 40px; font-size: 24px; line-height: 1.5;">Subsequently, I used heat-map and various charts to perform in-depth data breakdown which aids on a comprehensive exploration</li>
                    <hr style="width: 100%; border-top: 1px solid #fff; margin-top: 40px;">
                    <h2 style="align-self: flex-start; margin-top: 60px; font-size: 54px;">Statistical Analysis</h2>
                    <div style="width: 100%; display: flex; justify-content: flex-start; margin-top: 60px;"> <!-- Adjusted this line -->
                        <img src="{assets}/images/pearson.jpg" alt="Python" style="max-width: 100%; object-fit: contain;">
                    </div>
                    <li style="align-self: flex-start; margin-top: 10px; font-size: 24px; line-height: 1.5;">Utilised Pearson correlation, I am able to find variables with significant correlation</li>
                    <li style="align-self: flex-start; margin-top: 10px; font-size: 24px; line-height: 1.5;">H0: There is no significant correlation between assault rate and the components in the dataframe</li>
                    <li style="align-self: flex-start; margin-top: 10px; font-size: 24px; line-height: 1.5;">Ha: There is a significant correlation between assault rate and at least one of the components in the dataframe</li>
                    <div style="width: 100%; display: flex; justify-content: flex-start; margin-top: 60px;"> <!-- Adjusted this line -->
                        <img src="{assets}/images/python.jpg" alt="Python" style="max-width: 100%; object-fit: contain;">
                    </div>
                    <li style="align-self: flex-start; margin-top: 10px; font-size: 24px; line-height: 1.5;">Heat-map is also utilised to visually determine the correlation between each independent variables</li>
                    <hr style="width: 100%; border-top: 1px solid #fff; margin-top: 40px;">
                    <h2 style="align-self: flex-start; margin-top: 60px; font-size: 54px;">Overview of the analysis</h2>
                    <li style="align-self: flex-start; margin-top: 40px; font-size: 24px; line-height: 1.5;">Importing Libraries and dataset: Pandas, glob, seaborn, matplotlib, numpy, scipy, pandasql</li>
                    <li style="align-self: flex-start; margin-top: 40px; font-size: 24px; line-height: 1.5;">EDA: Preprocessing, data cleaning, feature engineering</li>
                    <li style="align-self: flex-start; margin-top: 40px; font-size: 24px; line-height: 1.5;">Statistical Analysis: Pearson correlation, Hypothesis testing</li>
                </div>
</div>
