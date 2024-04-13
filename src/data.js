import pizza1 from '../src/assets/pizza-1.jpg';
import pizza2 from '../src/assets/pizza-2.jpg';
import pizza3 from '../src/assets/pizza-3.jpg';

export const pizzaList = [
	{
		id: 1,
		name: 'Pizza 1',
		price: 8,
		image: pizza1,
		toppingOptions: [
			'avocado',
			'broccoli',
			'onions',
			'zucchini',
			'tuna',
			'ham',
		],
	},

	{
		id: 2,
		name: 'Pizza 2',
		price: 10,
		image: pizza2,
		toppingOptions: [
			'broccoli',
			'onions',
			'zucchini',
			'lobster',
			'oyster',
			'salmon',
			'bacon',
			'ham',
		],
	},

	{
		id: 3,
		name: 'Pizza 3',
		price: 12,
		image: pizza3,
		toppingOptions: [
			'broccoli',
			'onions',
			'zucchini',
			'tuna',
			'bacon',
			'duck',
			'ham',
			'sausage',
		],
	},
];

export const toppingList = [
	{ name: 'avocado', price: 1 },
	{ name: 'broccoli', price: 1 },
	{ name: 'onions', price: 1 },
	{ name: 'zucchini', price: 1 },
	{ name: 'lobster', price: 1 },
	{ name: 'oyster', price: 2 },
	{ name: 'salmon', price: 2 },
	{ name: 'tuna', price: 2 },
	{ name: 'bacon', price: 3 },
	{ name: 'duck', price: 3 },
	{ name: 'ham', price: 3 },
	{ name: 'sausage', price: 3 },
];
