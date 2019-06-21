import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

const NavigationBar = styled.div`
  margin-bottom: 15px;
`;

export default () => (
  <NavigationBar>
    <Form>
      <Form.Group controlId="md_cdcstm">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="読者番号を入力してください"
            ref={node => {}}
          />
          <InputGroup.Append>
            <Button type="submit">検索する</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
    <Link className="btn btn-primary" to="/">
      メモ一覧
    </Link>
    <Link className="btn btn-success" to="/new-item">
      新規メモ登録
    </Link>
  </NavigationBar>
);
