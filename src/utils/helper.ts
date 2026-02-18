import { CountryType } from "../constants/contries"
import { ShippmentFormData } from "./validation"

export const hasCountryCode = (
   data: ShippmentFormData | undefined,
   code: string
 ): boolean => {
   const { origin, destination } = data || {}
   return (
     (origin as CountryType)?.code === code ||
     (destination as CountryType)?.code === code
   )
 }

 export const getMinDeliveryDays = (deliveryTime: string): number => {
   return parseInt(deliveryTime.split("-")[0])
 }