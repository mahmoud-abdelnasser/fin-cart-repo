import React from "react"
import { Box, Typography } from "@mui/material"
import ShippmentDetailsForm from "./ShippmentDetailsForm"

export default function ShippmentDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #bbbbbb",
        borderRadius: 3,
        p: 2,
      }}
    >
      <Typography sx={{ fontSize: 12, mb: 2 }} gutterBottom>
        Please set your shippment details..
      </Typography>
      <ShippmentDetailsForm />
    </Box>
  )
}
