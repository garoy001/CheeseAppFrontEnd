const URL = 'https://benevolent-blancmange-12965f.netlify.app';

export const cheesesLoader = async () => {
	const response = await fetch(URL + '/cheese');
	const cheeses = await response.json();
	return cheeses;
};
export const cheeseLoader = async ({ params }) => {
	const response = await fetch(URL + '/cheese/' + params.id);
	const cheese = await response.json();
	return cheese;
};
