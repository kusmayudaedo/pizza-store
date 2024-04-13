import { Box, AppBar, Typography, Stack } from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

const NavBar = () => {
	return (
		<Box marginBottom={2}>
			<AppBar position='static'>
				<Stack direction='row' spacing={1} alignItems='center' paddingX={2}>
					<LocalPizzaIcon fontSize='large' />
					<Typography variant='h5' paddingY={2}>
						Yours Pizza
					</Typography>
				</Stack>
			</AppBar>
		</Box>
	);
};

export default NavBar;
