import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';

import SchemaApp from './SchemaApp';
function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="App">
      <Button onClick={handleModal}>Save Segment</Button>
      <SchemaApp open={openModal} handleModal={handleModal} />
    </div>
  );
}

export default App;
