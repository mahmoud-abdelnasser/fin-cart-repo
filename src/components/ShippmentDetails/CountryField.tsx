import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { countries, CountryType } from "../../constants/contries"

type CountrySelectPropsType = {
  value: CountryType | null
  handleChange: (val: CountryType | null) => void
  label: string
  error: boolean
  helperText?: string
}
export default function CountrySelect(props: CountrySelectPropsType) {
  return (
    <Autocomplete
      id={`country-select-${props.label}`}
      options={countries}
      autoHighlight
      value={props.value}
      onChange={(event, newValue) => props.handleChange(newValue)}
      getOptionLabel={(option) => option?.label ?? ""}
      renderOption={(prop, option) => {
        const { key, ...optionProps } = prop
        return (
          <Box
            key={key}
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...optionProps}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={`https://flagcdn.com/w40/${option?.code?.toLowerCase()}.png 2x`}
              src={`https://flagcdn.com/w20/${option?.code?.toLowerCase()}.png`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={props.label}
          error={props.error}
          helperText={props.helperText}
          slotProps={{
            htmlInput: {
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            },
          }}
        />
      )}
    />
  )
}
