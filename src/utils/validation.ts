import * as yup from "yup"

export type ShippmentFormData = yup.InferType<typeof validateSchema>

const validateSchema = yup
  .object({
    origin: yup.object().shape({}).nullable().required("Origin is required"),
    destination: yup.object().shape({}).nullable().required("Destination is required"),
    volume: yup
      .number()
      .typeError("Volume must be a number")
      .moreThan(0, "Must be greater than 0")
      .required("Volume is required"),
    weight: yup
      .number()
      .typeError("Weight must be a number")
      .moreThan(0, "Must be greater than 0")
      .required("Weight is required"),
  })
  .nullable()
  .required()

  export default validateSchema