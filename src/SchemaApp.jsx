import { Button, TextField } from '@mui/material';
import SchemaList from './SchemaList';
import SchemaModal from './SchemaModal';
import { useState, useRef, useCallback } from 'react';
export default function SchemaApp({ open, handleModal }) {
  const counter = useRef(0);
  const [schemaName, setSchemaName] = useState('');
  const [selectedData, setSelectedData] = useState([]);
  const existingList = selectedData.map((item) => item.value);

  const listData = useRef([
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
  ]);
  const handleChangeText = (e) => {
    setSchemaName(e.target.value);
  };
  const handleAddSchema = () => {
    setSelectedData((prev) => [...prev, { id: ++counter.current, value: '' }]);
  };

  const handleChangeSchema = useCallback(
    (idx, value) => {
      const updatedItem = selectedData.map((list, index) =>
        index === idx ? { ...list, value } : list
      );

      setSelectedData(updatedItem);
    },
    [selectedData]
  );
  const removeSchema = useCallback((idx) => {
    setSelectedData((prev) => prev.filter((_, index) => index !== idx));
  }, []);
  const handleSubmit = (e) => {
    console.log({
      schemaName,
      schemaList: selectedData.map((item) => ({ value: item.value })),
    });
    handleModal();
    alert(
      JSON.stringify({
        schemaName,
        schemaList: selectedData.map((item) => ({ value: item.value })),
      })
    );
  };

  const handleCancel = () => {
    setSelectedData([]);
    handleModal();
  };
  return (
    <SchemaModal
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: '30vw',
        gap: 1,
        minHeight: '20vh',
      }}
      {...{
        open,
        handleClose: handleModal,
      }}
      ActionButton={
        <>
          {' '}
          <Button onClick={handleCancel} variant="contained" color="error">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disabled={
              selectedData.some((item) => item.value === '') ||
              schemaName === ''
            }
          >
            Submit
          </Button>
        </>
      }
    >
      <TextField
        placeholder="Create Segment"
        sx={{ p: 2 }}
        onChange={handleChangeText}
        value={schemaName}
      />
      <SchemaList
        {...{
          existingList,
          selectedData,
          removeSchema,
          handleChangeSchema,
          listData,
        }}
      ></SchemaList>{' '}
      <Button
        sx={{ alignSelf: 'start' }}
        onClick={handleAddSchema}
        disabled={selectedData.length === listData.current.length}
      >
        Add New Schema
      </Button>
    </SchemaModal>
  );
}
