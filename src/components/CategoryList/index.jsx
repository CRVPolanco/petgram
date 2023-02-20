import React from 'react';
import { Category } from '../Category';
import { List, Item } from './CategoryListStyle';

const CategoryList = () => {
  return(
    <List>
      {
        (new Array(5).fill(0).map((c, i) => (
          <Item key={i}>
            <Category />
          </Item>
        )))
      }
    </List>
  )
};

export { CategoryList };
