<script lang="ts">
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import { assets } from '$app/paths';
	import {
		GraduationCap,
		FolderKanban,
		BookOpenCheck,
		ArrowRight,
		Briefcase,
		BarChart,
		BookPlus,
		UserRoundSearch,
		Github,
		Youtube
	} from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import typewriter from '../../api/typewriter';
	let ready = false;
	onMount(() => (ready = true));
</script>

<div class="container-center mx-auto max-w-6xl text-white px-8 sm:px-0 mt-20 ">
	<div class="relative z-10 text-start" transition:fly={{ x: -50, duration: 500}}>
		{#if ready}
		<div class="text-start"> 
				<TreeView>					
					<TreeViewItem>
						<div class="flex items-center">
							<span class="mr-4">
								<UserRoundSearch />
							</span>
							<b class="text-lg">About Me</b>
						</div>
						<svelte:fragment slot="children">
							<TreeViewItem>
								<div class="container flex flex-col">
									<ul class="list-disc list-inside">
										<li class="text-base mt-3 hanging-indent">
											My passion for data analytics was ignited by my keen interest in investments.
										</li>
										<li class="text-base mt-3 hanging-indent">
											I developed my own hypotheses on the stocks I was interested in and explored it
											further in-depth.
										</li>
										<li class="text-base mt-3 hanging-indent">
											I enjoyed extracting data from various sources, tracking companies' financial
											performance, stock valuations, and creating personalised portfolio dashboards.
										</li>
										<li class="text-base mt-3 hanging-indent">
											I enjoy pitching my investment ideas to my close friends, telling them the insights
											that I have discovered.
										</li>
										<li class="text-base mt-3 hanging-indent">
											Through this process, I realised that I was essentially performing the role of a
											data analyst, which then fuel my desire to pursue this field professionally.
										</li>
									</ul>
								</div>
							</TreeViewItem>
						</svelte:fragment>
					</TreeViewItem>
				</TreeView>
				<!--  -->
				<TreeView>
					<TreeViewItem>
						<div class="flex items-center">
							<span class="mr-4">
								<GraduationCap />
							</span>
							<b class="text-lg">Nanyang Technological University (June 2024 - Graduate)</b>
						</div>
						<svelte:fragment slot="children">
							<TreeViewItem>
								<div class="flex items-center">
									<span class="mr-4">
										<BookOpenCheck />
									</span>
									<b class="text-lg"
										>Bachelor of Engineering, Electrical and Electronic Engineering, Honours</b
									>
								</div>
								<svelte:fragment slot="children">
									<TreeViewItem>
										<div class="container">
											<div class="label"><b class="text-lg">Specialisation:</b></div>
											<div class="label"><b>Info-communication Engineering: </b></div>
											<ul class="list-disc list-inside">
												<li class="text-base mt-3 hanging-indent">Data Intelligence & Processing</li>
												<li class="text-base mt-3">Computer Engineering</li>
											</ul>
										</div>
									</TreeViewItem>
									<TreeViewItem>
										<div class="container">
											<div class="label"><b class="text-lg">Relevant Modules:</b></div>
											<ul class="list-disc list-inside">
												<li class="text-base mt-3 hanging-indent">Database Systems</li>
												<li class="text-base mt-3 hanging-indent">Artificial Intelligence & Data Mining</li>
												<li class="text-base mt-3 hanging-indent">Pattern Recognition & Deep Learning</li>
												<li class="text-base mt-3 hanging-indent">Machine Learning Design & Application</li>
												<li class="text-base mt-3 hanging-indent">Introduction to Data Science & AI</li>
												<li class="text-base mt-3 hanging-indent">Computer Communication</li>
												<li class="text-base mt-3 hanging-indent">Digital Signal Processing</li>
											</ul>
										</div>
									</TreeViewItem>
								</svelte:fragment>
							</TreeViewItem>
						</svelte:fragment>
					</TreeViewItem>
				</TreeView>

				<TreeView>
					<TreeViewItem>
						<div class="flex items-center">
							<span class="mr-4">
								<FolderKanban />
							</span>
							<b class="text-lg">Academic Experiences</b>
						</div>
						<svelte:fragment slot="children">
							<TreeViewItem>
								<b class="text-lg">Projects</b>
								<svelte:fragment slot="children">
									<TreeViewItem>
										<div class="flex items-center">
											<span class="mr-1">
												<ArrowRight />
											</span>
											<b class="text-base cursor-pointer">
												Final Year Project, Enhancing portfolio’s performance with S-REIT Analysis
											</b>
										</div>
										<svelte:fragment slot="children">
											<TreeViewItem>
												<ul class="list-disc list-inside">
													<li class="text-base mt-2 cursor-pointer hanging-indent">
														Employed fundamental, technical, and news analysis techniques to evaluate
														S-REITs
													</li>

													<li class="text-base mt-2 cursor-pointer hanging-indent">
														Developed portfolio's weight optimisation with Pandas, NumPy, and Scipy
													</li>

													<li class="text-base mt-2 cursor-pointer hanging-indent">
														Utilised Python and Pandas to perform news analysis on S-REITs (Price action
														after dividends, FED meetings, earnings report, etc.)
													</li>

													<li class="text-base mt-2 cursor-pointer hanging-indent">
														Libraries Utilised: Pandas, NumPy, Matplotlib, Scipyy, yfinance
													</li>

													<li class="text-base mt-2 cursor-pointer hanging-indent">
														Financial Skills: DCF Valuation Models, Pinescript, Macroeconomics
													</li>

													<li class="text-base mt-2 cursor-pointer hanging-indent">
														Designing Skills: Design DCF Models dashboard on Google Sheet
													</li>
												</ul>
											</TreeViewItem>
										</svelte:fragment>
									</TreeViewItem>
									<!--  -->
									<TreeViewItem>
										<div class="flex items-center">
											<span class="mr-1">
												<ArrowRight />
											</span>
											<b class="text-base cursor-pointer"> Cardiovascular Disease Prediction </b>
										</div>
										<svelte:fragment slot="children">
											<TreeViewItem>
												<ul class="list-disc list-inside">
													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Utilised machine learning models to predict the likelihood of developing
														cardiovascular diseases by leveraging relevant variables such as blood
														pressure, cholesterol levels, age, and fitness indicators
													</li>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Employed data preprocessing techniques, feature engineering, and model
														selection strategies to optimise predictive performance
													</li>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Evaluated and compared the accuracy of various algorithms, including logistic
														regression, decision trees, and ensemble methods
													</li>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Implemented the models using Python and libraries like Pandas, Scikit-learn,
														and Matplotlib
													</li>
												</ul>
											</TreeViewItem>
										</svelte:fragment>
									</TreeViewItem>
									<TreeViewItem>
										<div class="flex items-center">
											<span class="mr-1">
												<ArrowRight />
											</span>
											<b class="text-base cursor-pointer"> Web Application Design </b>
										</div>
										<svelte:fragment slot="children">
											<TreeViewItem>
												<ul class="list-disc list-inside">
													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Developed an e-commerce platform specialising in the sale of fruit products,
														encompassing features
													</li>
													<p class="text-base pl-5">
														such as user authentication, input validation, product catalog, shopping cart,
														checkout process, and
													</p>
													<p class="text-base pl-5">an administrative control panel</p>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Spearheaded the entire backend development process, leveraging MySQL for
														robust database creation and
													</li>
													<p class="text-base pl-5">management.</p>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Implemented PHP scripts to facilitate seamless communication between the
														backend and the database,
													</li>
													<p class="text-base pl-5">ensuring efficient data retrieval and storage</p>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Utilised HTML/CSS for structuring and styling the user interface, JavaScript
														for enhancing
													</li>
													<p class="text-base pl-5">
														front-end interactivity, and PHP for server-side scripting
													</p>
												</ul>
											</TreeViewItem>
										</svelte:fragment>
									</TreeViewItem>
									<!--  -->
									<TreeViewItem>
										<div class="flex items-center">
											<span class="mr-1">
												<ArrowRight />
											</span>
											<b class="text-base cursor-pointer"> Stock Trading with Machine Learning </b>
										</div>
										<svelte:fragment slot="children">
											<TreeViewItem>
												<ul class="list-disc list-inside">
													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Utilise FinRL library and deploy DRL (DDPG,TD3) model to predict stock price.
													</li>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Prepared the data with Pandas for training and testing the model
													</li>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Visualised the cumulative returns data with Matplotlib
													</li>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Pitch on our understanding and findings to 5 professors in the field of AI.
													</li>
												</ul>
											</TreeViewItem>
										</svelte:fragment>
									</TreeViewItem>
								</svelte:fragment>
							</TreeViewItem>
							<!--  -->
							<TreeViewItem>
								<b class="text-lg">Hackathon</b>
								<svelte:fragment slot="children">
									<TreeViewItem>
										<div class="flex items-center">
											<span class="mr-1">
												<ArrowRight />
											</span>
											<b class="text-base cursor-pointer">
												Google-NTU Tech4Tomorrow Hackathon (Mar 2024)
											</b>
										</div>
										<svelte:fragment slot="children">
											<TreeViewItem>
												<ul class="list-disc list-inside">
													<li class="text-base mt-3 cursor-pointer hanging-indent">
														<b>Led a team of 5 members</b> in conducting research on the social impact of
														economic uncertainty and developing a product solution, advancing to the
														<b>finalist round</b>
														and securing a <b>second runner-up</b> among 24 teams.
													</li>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Orchestrated the development of a resume-job matching platform tailored for
														retrenched middle-aged professionals, overseeing the full project lifecycle
														from research to product delivery
													</li>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Implemented web scraping, data cleaning, job-matching algorithms, and prompt
														engineering to create a one-stop career portal web application as the product
														solution
													</li>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Leveraged AI technologies such as Vertex API, Natural Language Processing, and
														Classification to enhance the product's functionality
													</li>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Presented the final product to a judging panel comprising directors from
														Google and an AI-Researcher professor from Nanyang Technological University
													</li>

													<li class="text-base mt-3 cursor-pointer hanging-indent">
														Utilised Python libraries such as NumPy, Pandas, BeautifulSoup, Scikit-learn
														(Cosine similarity, TfidfVectorizer)
													</li>
													<li class="text-base mt-3 cursor-pointer hanging-indent">
														<div class="inline-flex items-center space-x-2">
															<span class="mr-2">For more info, visit:</span>
															<a
																href="https://github.com/tngrj/NTU-Google-Hackathon"
																target="_blank"
																class="mr-2"
															>
																<Github />
															</a>
															<a href="https://www.youtube.com/watch?v=qLfPS_FsDyc&feature=youtu.be" target="_blank">
																<Youtube />
															</a>
														</div>
													</li>
												</ul>
											</TreeViewItem>
										</svelte:fragment>
									</TreeViewItem>
								</svelte:fragment>
							</TreeViewItem>
						</svelte:fragment>
					</TreeViewItem>
				</TreeView>
				<!--  -->
				<TreeView>
					<TreeViewItem>
						<div class="flex items-center">
							<span class="mr-4">
								<Briefcase />
							</span>
							<b class="text-lg">Internship Experiences</b>
						</div>
						<svelte:fragment slot="children">
							<TreeViewItem>
								<div class="flex items-center">
									<span class="mr-1">
										<ArrowRight />
									</span>
									<b class="text-lg">Software Engineer, Robotics (Jun 2022 – Dec 2022)</b>
								</div>
								<svelte:fragment slot="children">
									<TreeViewItem>
										<ul class="list-disc list-inside">
											<li class="text-base mt-3 cursor-pointer hanging-indent">
												<b
													>Awarded with the “Intern@ST” award for outstanding performance and capability</b
												>
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Assisted engineers with the development of self-automated drone with the use of
												ROS library and C++ programming
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Implemented sensors for navigation and set-up the environment for software
												development usage
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Acquired softskills such as presenting project to the management and working in a
												fast-pace environment.
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Skills acquired: ROS, C++, Git, Linux
											</li>
										</ul>
									</TreeViewItem>
								</svelte:fragment>
							</TreeViewItem>
							<TreeViewItem>
								<div class="flex items-center">
									<span class="mr-1">
										<ArrowRight />
									</span>
									<b class="text-lg">Robotics Engineer (Sep 2018 – Feb 2019)</b>
								</div>
								<svelte:fragment slot="children">
									<TreeViewItem>
										<ul class="list-disc list-inside">
											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Chosen by the lecturer to participate in a collaborative internship project
												between ST Engineering and Ngee Ann Polytechnic, focused on developing a
												following-user feature and a self-balancing rover
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Constructed the self-balancing rover by applying C programming (Arduino IDE) with
												a PID algorithm and leveraging an IMU sensor for balance control
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Integrated and synchronised C++ code (Orbecc SDK) with a 3D camera to enable the
												following-user feature, allowing the rover to autonomously track and follow a
												designated user
											</li>
										</ul>
									</TreeViewItem>
								</svelte:fragment>
							</TreeViewItem>
						</svelte:fragment>
					</TreeViewItem>
				</TreeView>
				<!--  -->
				<TreeView>
					<TreeViewItem>
						<div class="flex items-center">
							<span class="mr-4">
								<BookPlus />
							</span>
							<b class="text-lg">Online Courses</b>
						</div>
						<svelte:fragment slot="children">
							<TreeViewItem>
								<div class="flex items-center">
									<span class="mr-1">
										<ArrowRight />
									</span>
									<b class="text-lg">Google Advanced Data Analytics Specialisation</b>
								</div>
								<svelte:fragment slot="children">
									<TreeViewItem>
										<ul class="list-disc list-inside">
											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Create data visualisations and apply statistical methods to investigate data
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Build regression and machine learning models to analyze and interpret data
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Communicate insights (STAR: Situation, Task, Action, and Result) from data
												analysis to stakeholders
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												<div class="inline-flex items-center space-x-2" style="padding-left: 1rem;">
													<span class="mr-3">For more info, visit:</span>
													<a
														href="https://github.com/tzjZhengJie/DataAnalyst_Project/tree/Python/Advanced_Google_Data_Analytics"
														target="_blank"
														class="mr-2"
													>
														<Github />
													</a>
												</div>
											</li>
										</ul>
									</TreeViewItem>
								</svelte:fragment>
							</TreeViewItem>
							<TreeViewItem>
								<div class="flex items-center">
									<span class="mr-1">
										<ArrowRight />
									</span>
									<b class="text-lg">Google Data Analytics Specialisation</b>
								</div>
								<svelte:fragment slot="children">
									<TreeViewItem>
										<ul class="list-disc list-inside">
											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Learn key analytical skills (data cleaning, analysis, & visualisation) and tools
												(spreadsheets, SQL, R programming, Tableau)
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Understand how to clean and organise data for analysis, and complete analysis and
												calculations using spreadsheets, SQL and R programming
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Learn how to visualize and present data findings in dashboards, presentations and
												commonly used visualization platforms
											</li>
										</ul>
									</TreeViewItem>
								</svelte:fragment>
							</TreeViewItem>
							<TreeViewItem>
								<div class="flex items-center">
									<span class="mr-1">
										<ArrowRight />
									</span>
									<b class="text-lg">Google Business Intelligence Professional Specialisation</b>
								</div>
								<svelte:fragment slot="children">
									<TreeViewItem>
										<ul class="list-disc list-inside">
											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Practice data modeling and extract, transform, load (ETL) processes that meet
												organisational goals
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Design data visualizations that answer business questions
											</li>

											<li class="text-base mt-3 cursor-pointer hanging-indent">
												Create dashboards that effectively communicate data insights to stakeholders
											</li>
										</ul>
									</TreeViewItem>
								</svelte:fragment>
							</TreeViewItem>
						</svelte:fragment>
					</TreeViewItem>
				</TreeView>
				<!--  -->
				<TreeView>
					<TreeViewItem>
						<div class="flex items-center">
							<span class="mr-4">
								<BarChart />
							</span>
							<b class="text-lg">Skills</b>
						</div>
						<svelte:fragment slot="children">
							<TreeViewItem>
								<ul class="list-disc list-inside mb-1">
									<li class="text-base mt-3 cursor-pointer hanging-indent">
										Languages: Fluent in English and Chinese (Mandarin)
									</li>

									<li class="text-base mt-3 cursor-pointer hanging-indent">
										Software Programming: Python, R, MySQL, C, C++, HTML/CSS, PHP, JS
									</li>

									<li class="text-base mt-3 cursor-pointer hanging-indent">
										Libraries: Pandas, PyTorch, NumPy, Scikit-learn, Matplotlib
									</li>

									<li class="text-base mt-3 cursor-pointer hanging-indent">
										Development Tools: Jupyter Notebook, VSCode, Anaconda, CodeBlock, Arduino IDE, LabVIEW
									</li>

									<li class="text-base mt-3 cursor-pointer hanging-indent">
										Software Application: Microsoft Excel, Words, Office, AutoCAD, Adobe Premiere Pro,
										Adobe Lightroom
									</li>

									<li class="text-base mt-3 cursor-pointer hanging-indent">OS: Windows, Linux3</li>
								</ul>
							</TreeViewItem>
						</svelte:fragment>
					</TreeViewItem>
				</TreeView>
				<!-- <p class="text-lg justify mt-2">Storytelling, Critical Thinking, Problem Solving</p>
				<h1 class="text-sm softskill mt-2">SQL, Python, Statistic, Machine Learning</h1> -->
				<div class="flex justify-left items-center mt-8">
					<a class="anchor" href={`${assets}/Tan Zheng Jie Resume.pdf`}>Download a copy of my CV</a>
				</div>
				<div class="my-16">&nbsp</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.hanging-indent {
		padding-left: 1em;
		text-indent: -1em;
	}
</style>
