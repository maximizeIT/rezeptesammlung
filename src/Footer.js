import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary' align='center'>
			{'Copyright © Max Scholz - '}
			{new Date().getFullYear()}
		</Typography>
	);
}

function Footer(props) {
	const {title} = props;

	return (
		<Box
			component='footer'
			sx={{py: 3, borderTop: 1, borderColor: 'divider', marginTop: '40px'}}
		>
			<Container maxWidth='lg'>
				<Typography variant='h6' align='center' gutterBottom>
					{title}
				</Typography>
				<Typography
					variant='subtitle1'
					align='center'
					color='text.secondary'
					component='p'
				>
					{'Built with '}
					<Link
						color='inherit'
						href='https://mui.com/'
						target='_blank'
						rel='noreferrer'
					>
						Material UI
					</Link>
				</Typography>
				<Copyright />
			</Container>
		</Box>
	);
}

export default Footer;
