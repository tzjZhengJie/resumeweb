<script lang="ts">
	import { ArrowLeft, ArrowRight } from 'lucide-svelte';
	import { assets } from '$app/paths';
	import { onMount } from 'svelte';
	
	let elemCarousel: HTMLDivElement;
	let currentIndex = 0;
	let imageDescription = '';

	const imageNames = Array.from({ length: 4 }, (_, i) => `rgw-${i + 1}`);

	function carouselLeft(): void {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = images.length - 1; // Loop back to the last image
        }
        const x = elemCarousel.clientWidth * currentIndex;
        elemCarousel.scroll(x, 0);
    }

	function carouselRight(): void {
			if (currentIndex < images.length - 1) {
				currentIndex++;
			} else {
				currentIndex = 0; // Loop back to the first image
			}
			const x = elemCarousel.clientWidth * currentIndex;
			elemCarousel.scroll(x, 0);
		}

	let imagesLoaded = 0;

	function onImageLoad() {
		imagesLoaded++;
		if (imagesLoaded === imageNames.length) {
			currentIndex = 0;
			elemCarousel.scrollLeft = 0;
		}
}

	let images = [
        {
            name: 'rgw-1',
            description:  [
                'BeautifulSoup to web scrape Linkedin job postings.',
                'Mine data such as company, job titles, level, job descriptoon, time posted, url.',
                // Add more descriptions as needed...
            ]
        },
        {
            name: 'rgw-2',
            description:  [
                'Mined data is then saved in csv and loaded into a pandas dataframe.',
				'The data is then cleaned and preprocessed to remove any null values.',
                // Add more descriptions as needed...
            ]
        },
		{
            name: 'rgw-3',
            description:  [
                'Utilise BERT to generate job category embeddings.',
				'Pre-labeled data is used to train a classifier to predict job category.',
				'Achived 95% accuracy on test data.',
                // Add more descriptions as needed...
            ]
        },
		{
            name: 'rgw-4',
            description:  [
				'Resume parse into vertex API, which then recommend relevant job titles.',
                'Use cosine similarity to recommend jobs to users based on their resume.',
				'Vertex API recommended data scientist, the NLP will recommend relevant roles.',
				'This code is then deployed on Google Cloud Platform',
                // Add more descriptions as needed...
            ]
        },
        // Add more images as needed...
    ];

	onMount(() => {
        currentIndex = Math.round(elemCarousel.scrollLeft / elemCarousel.clientWidth);
		elemCarousel.scrollLeft = 0;
    });
</script>
<style>
.snap-x.snap-mandatory.scroll-smooth.flex.overflow-x-auto {
	scrollbar-width: none !important; /* For Firefox */
	-ms-overflow-style: none !important; /* For Internet Explorer and Edge */
}

.snap-x.snap-mandatory.scroll-smooth.flex.overflow-x-auto::-webkit-scrollbar {
	display: none !important; /* For Chrome, Safari, and Opera */
}
</style>

<div class="container w-2/4 mx-auto">
	<h2 class="text-2xl text-white font-bold">My contributions</h2>
	<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center mt-8">
		<button type="button" class="btn-icon variant-filled hidden sm:inline-flex" on:click={carouselLeft}>
			<ArrowLeft />
		</button>

		<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
			{#each imageNames as imageName}
				<img
					class="snap-center w-full rounded-container-token"
					src={`${assets}/hackathon/${imageName}.png`}
					alt={imageName}
					loading="lazy"
					on:load={onImageLoad}
				/>			
			{/each}
		</div>

		<button type="button" class="btn-icon variant-filled hidden sm:inline-flex"on:click={carouselRight}>
			<ArrowRight />
		</button>
	</div>

	<div class="card p-2 grid grid-cols-1 gap-1 mt-4">
		<ul class="list-disc list-inside">
			{#each images[currentIndex].description as desc}
				<li class="text-base mt-3 hanging-indent">{desc}</li>
			{/each}
		</ul>
	</div>

	<br />
</div>
