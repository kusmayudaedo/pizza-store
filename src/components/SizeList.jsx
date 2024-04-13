import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import React from 'react';

const SizeList = ({ selectedSize, handleSelectedSize }) => {
	return (
		<>
			<Typography variant='h6' marginTop={4}>
				Choose your pizza size
			</Typography>

			<FormControl>
				<RadioGroup
					row
					aria-labelledby='demo-row-radio-buttons-group-label'
					name='row-radio-buttons-group'
					value={selectedSize}
					onChange={handleSelectedSize}
				>
					<FormControlLabel value='small' control={<Radio />} label='Small' />
					<FormControlLabel value='medium' control={<Radio />} label='Medium' />
					<FormControlLabel value='large' control={<Radio />} label='Large' />
				</RadioGroup>
			</FormControl>
		</>
	);
};

export default SizeList;
