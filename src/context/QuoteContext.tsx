import { createContext } from "react"
import { ShippmentFormData } from "../utils/validation"

export type QuoteContextType = {
  shippmentQuote: ShippmentFormData | undefined
  setShippmentQuote: React.Dispatch<
    React.SetStateAction<ShippmentFormData | undefined>
  >
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined)

export default QuoteContext
