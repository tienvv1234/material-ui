import { createMuiTheme } from '@material-ui/core/styles';

const arcBule = '#0B72B9';
const arcOrange = '#FFBA60';

export default createMuiTheme({
	palette: {
		// common: {
		// 	blue: `${arcBule}`,
		// 	orange: `${arcOrange}`
		// },
		primary: {
			main: `${arcBule}`,
		},
		secondary: {
			main: `${arcOrange}`,
		},
	},
	typography: {
		tab: {
			fontFamily: 'Raleway',
			textTransform: 'none',
			fontWeight: 700,
			fontSize: '1rem',
		},
		estimate: {
			fontFamily: 'Pacifico',
			fontSize: '1rem',
			textTransform: 'none',
			color: 'white'
		},
	},
});
