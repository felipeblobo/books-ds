import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BooksButton, Thing } from '../.';

const App = () => {
  return (
    <div>
      <BooksButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
