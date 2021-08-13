import React, { useState } from "react";
import AdminLayout from "../../../components/admin-layout/admin-kayout.component";
import PricingTable from "../../../components/pricing-table/pricing-table.component";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

function Subscription() {
  return (
    <AdminLayout heading="Subscription" active={3}>
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

export default Subscription;
