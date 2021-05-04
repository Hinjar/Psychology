import React, { useContext } from "react";
import { SnackContext } from "../../context/snackbar/snackbar-context";
import { PsyTableWindowList } from "../../components/smart/psy-table-window-list/PsyTableWindowList";

export const PsyTableWindowListContainer: React.FC<any> = ({ items }) => {
  const snack: any = useContext(SnackContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (active: boolean) => {
    active ? setOpen(true) : snack?.open("Время уже занято", "error");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PsyTableWindowList
      open={open}
      items={items}
      handleClickOpen={handleClickOpen}
      handleCLose={handleClose}
    />
  );
};
