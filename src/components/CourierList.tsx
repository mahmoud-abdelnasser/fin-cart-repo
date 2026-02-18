import React, { useContext, useEffect, useMemo, useState } from "react"
import { Typography, Container, Grid } from "@mui/material"
import couriorList from "../constants/couries"
import CourierCard from "./CourierCard/CourierCard"
import QuoteContext from "../context/QuoteContext"
import { getMinDeliveryDays, hasCountryCode } from "../utils/helper"

const CourierList: React.FC = () => {
  const shippmentContext = useContext(QuoteContext)

  const shippmentQuote = shippmentContext?.shippmentQuote
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (shippmentQuote) {
      setTimeout(() => setLoading(false), 2000)
    }
  }, [shippmentQuote])

  const showOnlyEgyptCode = hasCountryCode(shippmentQuote, "EG")

  const { cheapestID, fastestID } = useMemo(() => {
    let lowest = Infinity
    let fastest = Infinity
    let lowestId = 0
    let fastestCourierId = 0

    couriorList.forEach((c) => {
      if (c.price < lowest) {
        lowest = c.price
        lowestId = c.id
      }

      const days = getMinDeliveryDays(c.deliveryTime)
      if (days < fastest) {
        fastest = days
        fastestCourierId = c.id
      }
    })

    return {
      cheapestID: lowestId,
      fastestID: fastestCourierId,
    }
  }, [couriorList])

  const renderContent = () => {
    if (showOnlyEgyptCode) {
      return couriorList.map((courior) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={courior.id}>
          <CourierCard
            couriorData={courior}
            {...courior}
            loading={loading}
            hasResult={showOnlyEgyptCode}
            isCheapest={courior.id === cheapestID}
            isFastest={courior.id === fastestID}
          />
        </Grid>
      ))
    }
    return (
      <Typography sx={{ fontSize: 12, color: "AccentColor" }} gutterBottom>
        No couriers available!!!
        <Typography
          component="span"
          sx={{ fontSize: 14, px: 1 }}
          color={"info"}
          gutterBottom
        >
          Please choose <strong>Egypt</strong> as the origin or destination.
        </Typography>
      </Typography>
    )
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {shippmentQuote ? (
          renderContent()
        ) : (
          <Typography sx={{ fontSize: 12, color: "AccentColor" }} gutterBottom>
            Please put your sheppment details to find the suitable courior ...
          </Typography>
        )}
      </Grid>
    </Container>
  )
}

export default CourierList
