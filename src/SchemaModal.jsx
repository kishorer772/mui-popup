import { Dialog, DialogActions, DialogContent } from '@mui/material';

export default function SchemaModal(props) {
  const { children, open, ActionButton, sx, buttonStyle } = props;

  return (
    <Dialog open={open}>
      <DialogContent sx={{ ...sx }}>{children}</DialogContent>
      <DialogActions sx={{ ...buttonStyle }}>{ActionButton}</DialogActions>
    </Dialog>
  );
}
