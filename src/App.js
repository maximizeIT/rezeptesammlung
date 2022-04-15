import Container from '@mui/material/Container';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <Container maxWidth="lg">
      <Header title="Rezeptesammlung" />
      <Main />
      <Footer title="" />
    </Container>
  );
}

export default App;
