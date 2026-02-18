import React, { useContext } from "react"
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextField, Button, Box, Typography, Grid } from "@mui/material"
import CountrySelect from "./CountryField"
import validateSchema, { ShippmentFormData } from "../../utils/validation"
import QuoteContext from "../../context/QuoteContext"

const ShippmentDetailsForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippmentFormData>({
    resolver: yupResolver(validateSchema),
    defaultValues: {
      origin: undefined,
      destination: undefined,
      volume: undefined,
      weight: undefined,
    },
  })

  const shippmentContext = useContext(QuoteContext)

  const onSubmit: SubmitHandler<ShippmentFormData> = (data) => {
    shippmentContext?.setShippmentQuote({ ...data })
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          mb: 2,
        }}
      >
        <Grid
          container
          spacing={1}
          size={{ xs: 12, md: 6 }}
          sx={{
            border: "1px solid #ccc",
            borderRadius: 3,
            p: 2,
          }}
        >
          <Grid size={{ xs: 12, md: 12 }}>
            <Typography sx={{ fontSize: 12, color: "#575757" }} gutterBottom>
              Package Details
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="origin"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <CountrySelect
                    value={value ?? null}
                    handleChange={onChange}
                    label="Origin Details"
                    error={!!errors.origin}
                    helperText={errors.origin?.message}
                  />
                )
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="destination"
              control={control}
              render={({ field: { onChange, value } }) => {
                return (
                  <CountrySelect
                    value={value ?? null}
                    handleChange={onChange}
                    label="Destination Details"
                    error={!!errors.destination}
                    helperText={errors.destination?.message}
                  />
                )
              }}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          size={{ xs: 12, md: 6 }}
          sx={{
            border: "1px solid #ccc",
            borderRadius: 3,
            p: 2,
          }}
        >
          <Grid size={{ xs: 12, md: 12 }}>
            <Typography sx={{ fontSize: 12, color: "#575757" }} gutterBottom>
              Package Dimensions
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="volume"
              control={control}
              render={({ field }) => (
                <TextField
                  sx={{ width: "100%" }}
                  {...field}
                  label="Volume"
                  type="number"
                  variant="outlined"
                  error={!!errors.volume}
                  helperText={errors.volume?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Controller
              name="weight"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  sx={{ width: "100%" }}
                  label="Weight"
                  type="number"
                  variant="outlined"
                  error={!!errors.weight}
                  helperText={errors.weight?.message}
                />
              )}
            />
          </Grid>
        </Grid>

        <Grid container size={12} justifyContent="flex-end">
          <Grid size={{ xs: 12, md: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, alignSelf: "flex-end" }}
            >
              Find courier
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
export default ShippmentDetailsForm
