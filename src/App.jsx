import React from 'react';
import { CategoryList } from './components/CategoryList';
import { GlobalStyle } from './styles/GlobalStyles/GlobalStyles';
import { PhotoCardList } from './components/PhotoCardsLIst';
import { Logo } from './components/Logo';


function App() {
  return(
    <>
      <GlobalStyle />
      <Logo />
      <CategoryList />
      <PhotoCardList />
    </>

  )
}

export default App;
