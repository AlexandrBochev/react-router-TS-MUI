import { Link, useParams } from "react-router-dom"
import { useGetData } from "../../hooks/useGetData"
import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material"

interface UserType {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
}

const FiELDS = [
  { label: 'Name', value: 'name' },
  { label: 'Username', value: 'username' },
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'Website', value: 'website' },
]

const UserDetails = () => {
  const { userId } = useParams()
  const { data, isLoading } = useGetData(`users/${ userId }`)
  const user = data as UserType

  return (
    <>
      <Typography variant='h4' gutterBottom>User</Typography>
      { isLoading && <Typography variant='h6' gutterBottom>Loading...</Typography> }
      {user && (
        <Card>
          <CardContent>
            <List>
              {FiELDS.map(field => (
                <ListItem key={ field.value }>
                  <ListItemText primary={ field.label } secondary={ user[field.value as keyof UserType] } />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: 2 }}>
        <Button component={Link} variant='contained' color='primary' to='/users'>Back to users</Button>
      </Box>
    </>
  )
}

export { UserDetails }