const projects = [
	{
		name: 'four-card-feature-section',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: 'clipboard-landing-page',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: 'project-tracking-intro',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: 'fylo-landing-page',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: 'intro-component-with-sign-up-form',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: 'insure-landing-page',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: 'huddle-landing-page',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: '3-column-preview-card-component',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: 'loopstudios-landing-page',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: 'fylo-dark-theme-landing-page',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: 'ping-coming-soon-page',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: 'huddle-with-curved-sections',
		challenge: 'frontend-mentor-challenges'
	},
	{
		name: 'indiebrew',
		challenge: 'codewell-challenges'
	}
];

const list = document.getElementById('list');

projects.forEach(({ name, challenge }) => {
	const listItem = document.createElement('li');

	listItem.innerHTML = `
		<a href="${challenge}/${name}/index.html" target="_blank">
			<img src="${challenge}/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${formatProjectName(name)}</p>
		</a>

		<div class="links-container">
			<a href="https://github.com/nik-ves/${name}" class="black" target="_blank">
				<i class="fab fa-github"></i>
			</a>

			<a href="${challenge}/${name}/index.html" class="black" target="_blank">
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
