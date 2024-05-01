import { Box, CircularProgress, ListItemIcon, MenuItem } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import React, { useMemo } from "react";
import useGetServicesRequest from "../../apis/useGetServicesRequest";
import {
  CancelOutlined,
  DoneOutlined,
  PendingOutlined,
  WorkOutlined,
} from "@mui/icons-material";
import useChangeStatusOfService from "../../apis/useChangeStatusOfService";

const Home = () => {
  const services = useGetServicesRequest();
  const { mutateAsync, isPending } = useChangeStatusOfService();

  const changeStatusHandeler = async (status, serviceID) => {
    await mutateAsync({ status, serviceID });
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "services_name",
        header: "Service Name",
        size: 150,
      },
      {
        accessorKey: "customer_type",
        header: "Customer Type",
        size: 150,
      },
      {
        accessorKey: "location",
        header: "Location",
        size: 200,
      },
      {
        accessorKey: "message",
        header: "Message",
        size: 150,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: services?.data?.data?.data || [],
    enableRowActions: true,
    renderRowActionMenuItems: ({ closeMenu, row }) => [
      <MenuItem
        key={0}
        onClick={async () => {
          await changeStatusHandeler("pending", row.original.id);
          closeMenu();
        }}
        sx={{ m: 0 }}
        disabled={isPending}
      >
        <ListItemIcon>
          {isPending ? (
            <CircularProgress size={"15px"} color="inherit" />
          ) : (
            <PendingOutlined color="warning" />
          )}
        </ListItemIcon>
        Pending
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={async () => {
          await changeStatusHandeler("processing", row.original.id);
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          {isPending ? (
            <CircularProgress size={"15px"} color="inherit" />
          ) : (
            <WorkOutlined color="success" />
          )}
        </ListItemIcon>
        Processing
      </MenuItem>,
      <MenuItem
        key={2}
        onClick={async () => {
          await changeStatusHandeler("done", row.original.id);
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          {isPending ? (
            <CircularProgress size={"15px"} color="inherit" />
          ) : (
            <DoneOutlined color="primary" />
          )}
        </ListItemIcon>
        Done
      </MenuItem>,
      <MenuItem
        key={3}
        onClick={async () => {
          await changeStatusHandeler("rejected", row.original.id);
          closeMenu();
        }}
        sx={{ m: 0 }}
      >
        <ListItemIcon>
          {isPending ? (
            <CircularProgress size={"15px"} color="inherit" />
          ) : (
            <CancelOutlined color="error" />
          )}
        </ListItemIcon>
        Rejected
      </MenuItem>,
    ],
  });

  return (
    <Box
      sx={{
        maxWidth: "100%",
      }}
    >
      <MaterialReactTable table={table} />
    </Box>
  );
};

export default Home;
