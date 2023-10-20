import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { useGetData } from "../../hooks/useGetData"
import { Link } from "react-router-dom"

interface PostsType {
  isLoading: boolean,
  data: {
    id: number
    title: string
  }[]
}

const Posts = () => {
  const { data, isLoading } = useGetData("posts?_limit=20") as PostsType
  const posts = data

  return (
    <>
      <Typography variant='h4' gutterBottom>Posts</Typography>
      {isLoading ? ('Loading...') : (
        <List>
          {posts.map(post => (
            <ListItem key={ post.id } component={Link} to={`/posts/${post.id}`}>
              <ListItemText primary={ post.title } />
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}

export { Posts }