import React, { useState } from "react";
import AdminLayout from "../../../components/admin-layout/admin-layout.component";
import PricingTable from "../../../components/pricing-table/pricing-table.component";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

function Wishlist() {
  return (
    <AdminLayout heading="Wishlist" active={1}>
      <Grid container spacing={5}>
        <Grid item lg={6}>
          <PricingTable />
        </Grid>
        <Grid item lg={6}>
          <PricingTable />
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

export default Wishlist;
