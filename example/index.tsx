import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BooksButton, BooksCard, BooksCardProps } from '../.';
import './index.css';

const App = () => {
  const bookExample: BooksCardProps = {
    title: 'Liderança em Design',
    abstract: 'Habilidades de gestão para alavancar sua carreira',
    author: 'Vitor Zanini',
    price: '29.90',
  };

  return (
    <div>
      <BooksCard {...bookExample} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
