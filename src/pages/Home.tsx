import { Typography } from "@mui/material"
import { useMemo, useState } from "react"
import CourierList from "../components/CourierList"
import ShippmentDetails from "../components/ShippmentDetails/ShippmentDetails"
import QuoteContext from "../context/QuoteContext"
import { ShippmentFormData } from "../utils/validation"

interface HomeProps {
  title: string
}

const Home: React.FC<HomeProps> = ({ title }) => {
  const [shippmentQuote, setShippmentQuote] = useState<
    ShippmentFormData | undefined
  >(undefined)

  const value = useMemo(() => {
    return { shippmentQuote, setShippmentQuote }
  }, [shippmentQuote]) // Only changes when shippmentQuote changes

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <QuoteContext.Provider value={value}>
        <ShippmentDetails />
        <CourierList />
      </QuoteContext.Provider>
    </div>
  )
}

export default Home
