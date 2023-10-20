import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go to the home page</Link>
    </div>
  )
}

export { PageNotFound }