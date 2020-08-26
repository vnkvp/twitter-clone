import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './assets/App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      {/* feed */}
      <Feed />
      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
