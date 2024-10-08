import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

export default function Schema({ item, index, ...rest }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        width: '100%',
        justifyContent: 'space-between',
      }}
      key={item.id}
    >
      <FormControl sx={{ width: '100%' }}>
        <InputLabel>Segment</InputLabel>
        <Select
          id={`label_${index}`}
          onChange={(e) => rest.handleChangeSchema(index, e.target.value)}
          sx={{ width: '100%' }}
          defaultValue={''}
        >
          {rest.listData.current
            .filter(
              (listItem) =>
                !rest.existingList.includes(listItem.value) ||
                listItem.value === item.value
            )
            .map((list) => (
              <MenuItem value={list.value} key={list.value}>
                {list.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <Button onClick={() => rest.removeSchema(index)}> - </Button>
    </Box>
  );
}
