import React from 'react';
import { Container } from './Styles'
import Header from './Components/Header'
import Vote from './Components/Vote'
import Results from './Components/Results'

function App() {
  return (
    <Container>
      <Header />
      <Vote />
      <Results />
    </Container>
  );
}

export default App;
