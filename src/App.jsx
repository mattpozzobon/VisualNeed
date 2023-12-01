import React from 'react';
import { InventoryProvider } from './Database/Inventory';
import Game from './Components/Game';
import TopBar from '../src/Components/TopBar';

function App() {
  return (
    <InventoryProvider>
      <TopBar/>
      <Game/>
    </InventoryProvider>
  );
};

export default App;
