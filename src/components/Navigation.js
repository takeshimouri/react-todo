import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Link className="btn btn-primary" to="/">
      一覧
    </Link>
    <Link className="btn btn-secondary" to="/new-item">
      新規メモ登録
    </Link>
  </div>
);
