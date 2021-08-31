import React from "react";
import AdminLayout from "../../../components/admin-layout/admin-layout.component";

import { Typography } from "@material-ui/core";

function Wishlist() {
  return (
    <AdminLayout heading="Wishlist" active={1}>
      <Typography variant="h2">We are working on it</Typography>
    </AdminLayout>
  );
}

export default Wishlist;
