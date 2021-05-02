import React from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export const WindowAdd: React.FC<any> = ({ open, handleClose }) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );
  return (
    <Dialog
      fullWidth={true}
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <h3>Добавить</h3>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            fullWidth={true}
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDate}
            onChange={() => console.log(1)}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
        <Button variant="contained" color="secondary" fullWidth={true}>
          Добавить
        </Button>
      </DialogContent>
    </Dialog>
  );
};
