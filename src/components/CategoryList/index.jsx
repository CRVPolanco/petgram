import React from 'react';
import { Category } from '../Category';
import { List, Item } from './CategoryListStyle';
import { categories } from '../../api/db.json';

const CategoryList = () => {
  return(
    <List>
      {
        categories.map((c) => (
          <Item key={c.id}>
            <Category { ...c } />
          </Item>
        ))
      }
    </List>
  )
};

export { CategoryList };
