import Schema from './Schema';
import { memo } from 'react';
function SchemaList({ selectedData, existingList, ...rest }) {
  return (
    <>
      {selectedData
        .filter((item) => !existingList.includes(item))
        .map((item, index) => (
          <Schema {...{ item, index, existingList, ...rest }} key={item.id} />
        ))}
    </>
  );
}

export default memo(SchemaList);
