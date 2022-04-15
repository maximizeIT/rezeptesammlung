import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header(props) {
  const { title } = props;

  return (
    <Box component="header">
      <Toolbar sx={{ py: 3 }}>
        <Typography
          component="h1"
          variant="h4"
          color="inherit"
          align="center"
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
    </Box>
  );
}

export default Header;