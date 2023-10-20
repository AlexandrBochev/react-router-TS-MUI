import { Link, useParams } from "react-router-dom"
import { useGetData } from "../../hooks/useGetData"
import { Box, Button, Card, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material"

interface PostType {
  title: string
  body: string
}

const FiELDS = [
  { title: 'title', body: 'body' },
]

const PostDetails = () => {
  const { postId } = useParams()
  const { data, isLoading } = useGetData(`posts/${ postId }`)
  const post = data as PostType

  return (
    <>
      <Typography variant='h4' gutterBottom>Post</Typography>
      { isLoading && <Typography variant='h6' gutterBottom>Loading...</Typography> }
      {post && (
        <Card>
          <CardContent>
            <List>
              {FiELDS.map(field => (
                <ListItem key={ field.title }>
                  <ListItemText primary={ post[field.title as keyof PostType] } secondary={ post[field.body as keyof PostType] } />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: 2 }}>
        <Button component={Link} variant='contained' color='primary' to='/posts'>Back to posts</Button>
      </Box>
    </>
  )
}

export { PostDetails }