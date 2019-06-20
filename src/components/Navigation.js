import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

export default () => (
  <NavigationBar>
    <Link className="btn btn-primary" to="/">
      一覧
    </Link>
    <Link className="btn btn-secondary" to="/new-item">
      新規メモ登録
    </Link>
  </NavigationBar>
);
