import './App.css';
import { Button } from '@mui/material';
import { useState, lazy, Suspense } from 'react';

const SchemaApp = lazy(() => import('./SchemaApp'));
function App() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <div className="App">
      <Button onClick={handleModal}>Save Segment</Button>
      {openModal && (
        <Suspense fallback={<p>Loading...</p>}>
          <SchemaApp open={openModal} handleModal={handleModal} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
