import React from 'react';
import { CategoryList } from './components/CategoryList';
import { GlobalStyle } from './components/GlobalStyles/GlobalStyles';
import { PhotoCardList } from './components/PhotoCardsLIst';


function App() {
  return(
    <>
      <GlobalStyle />
      <CategoryList />
      <PhotoCardList />
    </>

  )
}

export default App;
