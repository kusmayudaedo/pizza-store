import {
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	Grid,
	Typography,
} from '@mui/material';

const TopingList = ({
	toppingList,
	selectedPizza,
	onToppingSelect,
	selectedTopping,
}) => {
	return (
		<>
			<Typography variant='h6' marginTop={4}>
				Choose your pizza toppings
			</Typography>

			<FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
				<FormGroup>
					<Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
						{toppingList.map((topping) => {
							const isDisable = !selectedPizza[0]?.toppingOptions.includes(
								topping.name
							);
							return (
								<Grid item xs={4} key={topping.name}>
									<FormControlLabel
										control={
											<Checkbox
												name={topping.name}
												disabled={isDisable}
												onChange={onToppingSelect}
												checked={selectedTopping.includes(topping.name)}
											/>
										}
										label={
											<Typography sx={{ textTransform: 'capitalize' }}>
												{topping.name} (+${topping.price})
											</Typography>
										}
									/>
								</Grid>
							);
						})}
					</Grid>
				</FormGroup>
			</FormControl>
		</>
	);
};

export default TopingList;
