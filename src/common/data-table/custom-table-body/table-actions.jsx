/* eslint-disable react/prop-types */
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";
import { useState } from "react";
import { useUserActions } from "../../../hooks/use-user-actions";
import { useNavigate } from "react-router-dom";

const TableActions = (item) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const navigate = useNavigate();

  const { deleteUser } = useUserActions();

  const accept = () => {
    deleteUser(item.id);
    window.location.reload();
  };

  const reject = () => {
    setOpenDeleteDialog(false);
  };

  return (
    <>
      <ConfirmDialog
        group="declarative"
        visible={openDeleteDialog}
        onHide={() => setOpenDeleteDialog(false)}
        message="Are you deleted user?"
        header="Confirmation"
        icon="pi pi-exclamation-triangle"
        accept={accept}
        reject={reject}
      />
      <Button onClick={() => navigate(`/arm/user-list/${item.id}`)}>
        Edit
      </Button>
      <Button onClick={() => setOpenDeleteDialog(true)}>Delete</Button>
    </>
  );
};

export { TableActions };
