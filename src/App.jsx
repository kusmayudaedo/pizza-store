import { Grid, Typography, Box, Container, CssBaseline } from '@mui/material';
import { pizzaList, toppingList } from './data';
import PizzaCard from './components/PizzaCard';
import { useEffect, useState } from 'react';
import TopingList from './components/TopingList';
import SizeList from './components/SizeList';
import NavBar from './components/NavBar';

const App = () => {
	const [pizzas, setPizzas] = useState(pizzaList);
	const [selectedPizza, setSelectedPizza] = useState([]);
	const [selectedPizzaId, setSelectedPizzaId] = useState(null);
	const [selectedSize, setSelectedSize] = useState('medium');
	const [selectedTopping, setSelectedTopping] = useState([]);
	const [toppingPrices, setToppingPrice] = useState(0);
	const [totalPizzaPrice, setTotalPizzaPrice] = useState(0);

	const handlePizzaSelection = (id) => {
		setSelectedPizzaId(id);

		//@reset the pizza size to default size which is medium
		setSelectedSize('medium');

		//@reset the topping selection when chose other pizza
		setSelectedTopping([]);
	};

	const handleSelectedSize = (event) => {
		setSelectedSize(event.target.value);
	};

	const handleToppingSelection = (event) => {
		const { name, checked } = event.target;
		if (checked) {
			setSelectedTopping((prevSelectedTopping) => [
				...prevSelectedTopping,
				name,
			]);
		} else {
			setSelectedTopping((prevSelectedTopping) =>
				prevSelectedTopping.filter((topping) => topping !== name)
			);
		}
	};

	//@filter pizza based on selected pizza Id in pizza card
	useEffect(() => {
		setSelectedPizza(pizzas.filter((pizza) => pizza.id === selectedPizzaId));
	}, [selectedPizzaId, pizzas]);

	//@adjustment the pizza price based on selected pizza size
	useEffect(() => {
		if (selectedPizza[0]) {
			let price = selectedPizza[0].price;
			if (selectedSize === 'large') {
				price += 2;
			} else if (selectedSize === 'small') {
				price -= 1;
			}
			setTotalPizzaPrice(price);
		}
	}, [selectedSize, selectedPizza]);

	//@determine total topping price based on selected topping
	useEffect(() => {
		let toppingPrice = 0;
		selectedTopping.forEach((selectedToppingName) => {
			const topping = toppingList.find(
				(topping) => topping.name === selectedToppingName
			);
			if (topping) {
				toppingPrice += topping.price;
			}
		});

		setToppingPrice(toppingPrice);
	}, [selectedTopping]);

	//@total price after selected pizza, size, and topping
	const totalPrice = totalPizzaPrice + toppingPrices;

	return (
		<>
			<CssBaseline />
			<NavBar />
			<main>
				<Container>
					<Typography variant='h6'>Choose your pizza</Typography>
					<Grid
						container
						spacing={2}
						padding={2}
						columns={{ xs: 4, sm: 8, md: 12 }}
					>
						{pizzas.map((item) => {
							return (
								<Grid item xs={4} key={item.id}>
									<PizzaCard
										pizza={item}
										isSelected={item.id === selectedPizzaId}
										onSelect={handlePizzaSelection}
									/>
								</Grid>
							);
						})}
					</Grid>

					<SizeList
						selectedSize={selectedSize}
						handleSelectedSize={handleSelectedSize}
					/>

					<TopingList
						toppingList={toppingList}
						selectedPizza={selectedPizza}
						onToppingSelect={handleToppingSelection}
						selectedTopping={selectedTopping}
					/>

					<Box paddingY={4}>
						<Typography variant='h6'>Price</Typography>
						<Typography variant='h5' color='red'>
							$ {totalPrice}
						</Typography>
					</Box>
				</Container>
			</main>
		</>
	);
};

export default App;
