import React from "react";
import AdminLayout from "../../../components/admin-layout/admin-layout.component";
import { Typography } from "@material-ui/core";

function Reviews() {
  return (
    <AdminLayout heading="Reviews" active={2}>
      <Typography variant="h2">We are working on it</Typography>
    </AdminLayout>
  );
}

export default Reviews;
