import React from "react"
import {
  Badge,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"

type CourierCardContentProps = {
  logo: string
  name: string
  price: number
  tax: number
  deliveryTime: string
  isCheapest?: boolean
  isFastest?: boolean
}

const CourierCardContent: React.FC<CourierCardContentProps> = ({
  logo,
  name,
  price,
  tax,
  deliveryTime,
  isCheapest = false,
  isFastest = false,
}) => {
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
      <CardMedia
        component="img"
        height="160"
        image={logo}
        alt={name}
        sx={{ backgroundColor: name }}
      />
      <CardContent>
        <Box
          display="flex"
          flexDirection="column"
          gap={1}
          sx={{
            width: "100%",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            <strong>Name:</strong>{" "}
            <Typography
              component="span"
              variant="h6"
              fontWeight="bold"
              sx={{ textTransform: "uppercase" }}
            >
              {name}
            </Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <strong>Price:</strong>{" "}
            <Typography component="span" color="primary" fontWeight="bold">
              <Badge
                color={"error"}
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: 12,
                    height: 15,
                    minWidth: 15,
                    right: "-20px",
                    transform: "rotate(15deg)",
                  },
                }}
                badgeContent="Cheapest"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                invisible={!isCheapest}
              >
                ${price.toFixed(2)}
              </Badge>
            </Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <strong>TAX:</strong>{" "}
            <Typography component="span" color="primary" fontWeight="bold">
              %{tax.toFixed()}
            </Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <strong>Expected Delivery:</strong>{" "}
            <Badge
              color={"error"}
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: 12,
                  height: 15,
                  minWidth: 15,
                  right: "-20px",
                  transform: "rotate(15deg)",
                },
              }}
              badgeContent="Fastest"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              invisible={!isFastest}
            >
              {deliveryTime}
            </Badge>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default CourierCardContent
