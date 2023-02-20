import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: scroll;
  gap: 12px;
`;

const Item = styled.li`
  padding: 8px 0;
`;

export { List, Item };
