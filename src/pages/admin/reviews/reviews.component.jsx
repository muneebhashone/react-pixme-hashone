import React, { useState } from "react";
import AdminLayout from "../../../components/admin-layout/admin-layout.component";
import PricingTable from "../../../components/pricing-table/pricing-table.component";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

function Reviews() {
  return (
    <AdminLayout heading="Reviews" active={2}>
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

export default Reviews;
