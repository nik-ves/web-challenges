const projects = [
	{
		name: 'four-card-feature-section'
	},
	{
		name: 'clipboard-landing-page'
	},
	{
		name: 'project-tracking-intro'
	},
	{
		name: 'fylo-landing-page'
	},
	{
		name: 'intro-component-with-sign-up-form'
	},
	{
		name: 'insure-landing-page'
	},
	{
		name: 'huddle-landing-page'
	},
	{
		name: '3-column-preview-card-component'
	},
	{
		name: 'loopstudios-landing-page'
	}
];

const list = document.getElementById('list');

projects.forEach(({ name }) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="/${name}/index.html" target="_blank">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="https://github.com/nik-ves/${name}" class="black">
				<i class="fab fa-github"></i>
			</a>

			<a href="/${name}/index.html" class="black">
				<i class="fas fa-eye"></i>
			</a>
		</div>
	`;

	list.appendChild(listItem);
});

function formatProjectName(name) {
	return name
		.split('-')
		.map(word => word[0].toUpperCase() + word
		.slice(1)).join(' ');
};
