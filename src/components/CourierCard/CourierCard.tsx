import React from "react"
import { Typography } from "@mui/material"
import CardLoader from "./CardLoader"
import CourierCardContent from "./CourierCardContent"
import { couriorType } from "../../constants/couries"

type CourierCardProps = {
  couriorData: couriorType
  hasResult: boolean
  isCheapest?: boolean
  isFastest?: boolean
  loading?: boolean
}

const CourierCard: React.FC<CourierCardProps> = ({
  couriorData,
  isCheapest = false,
  isFastest = false,
  loading = false,
  hasResult,
}) => {
  return (
    <>
      {loading ? (
        <CardLoader />
      ) : hasResult ? (
        <CourierCardContent
          {...couriorData}
          isCheapest={isCheapest}
          isFastest={isFastest}
        />
      ) : (
        <Typography sx={{ fontSize: 12, color: "#575757" }} gutterBottom>
          There are no couriercan serve this sheppment!!!
        </Typography>
      )}
    </>
  )
}

export default CourierCard
