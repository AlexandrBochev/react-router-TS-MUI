import { List, ListItem, ListItemText, Typography } from "@mui/material"
import { useGetData } from "../../hooks/useGetData"
import { Link } from "react-router-dom"

interface CommentsType {
  isLoading: boolean,
  data: {
    id: number
    name: string
  }[]
}

const Comments = () => {
  const { data, isLoading } = useGetData("comments?_limit=20") as CommentsType
  const comments = data

  return (
    <>
      <Typography variant='h4' gutterBottom>Comments</Typography>
      {isLoading ? ('Loading...') : (
        <List>
          {comments.map(comment => (
            <ListItem key={ comment.id } component={Link} to={`/comments/${comment.id}`}>
              <ListItemText primary={ comment.name } />
            </ListItem>
          ))}
        </List>
      )}
    </>
  )
}

export { Comments }