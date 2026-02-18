import React from "react"
import { Card, CardContent, Skeleton } from "@mui/material"

const CardLoader: React.FC = () => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        height: "100%",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <Skeleton variant="rectangular" height={160} />
      <CardContent>
        <Skeleton width="80%" height={25} />
        <Skeleton width="60%" />
        <Skeleton width="60%" />
        <Skeleton width="70%" />
      </CardContent>
    </Card>
  )
}

export default CardLoader
