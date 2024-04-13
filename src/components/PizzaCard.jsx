import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Radio,
} from '@mui/material';

const PizzaCard = ({ pizza, isSelected, onSelect }) => {
	const handleSelect = () => {
		onSelect(pizza.id);
	};

	return (
		<Card>
			<CardMedia
				sx={{ minHeight: 300 }}
				image={pizza.image}
				title='green iguana'
			/>
			<CardContent>
				<Typography gutterBottom variant='h5' component='div'>
					{pizza.name}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					$ {pizza.price}
				</Typography>
			</CardContent>
			<CardActions>
				<Radio checked={isSelected} onChange={handleSelect} />
			</CardActions>
		</Card>
	);
};

export default PizzaCard;
