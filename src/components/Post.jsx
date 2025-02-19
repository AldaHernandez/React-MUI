import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
// En caso de necesitar utilizar íconos dependiendo su estado, es posible importarlos solid y outline, pero diferenciándolos con un alias, como se puede observar con HeartIcon
import { EllipsisVerticalIcon, ShareIcon as ShareSolid, HeartIcon as HeartSolid } from '@heroicons/react/24/solid'
import { HeartIcon as HeartOutline, ShareIcon as ShareOutline } from '@heroicons/react/24/outline'

const Post = () => {
  return (
    <div>
        <Card sx={{margin:5}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <EllipsisVerticalIcon style={{ width: "24px", height: "24px" }} />
                </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://www.nestleprofessional-latam.com/sites/default/files/styles/np_recipe_detail/public/2024-12/paella-elaborada-productos-maggi-negocios.png?itok=YCmnM_xe"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<HeartOutline style={{width: "24px", height: "24px"}}/>} checkedIcon={<HeartSolid style={{width: "24px", height: "24px", color:'red'}} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <Checkbox icon={<ShareOutline style={{width: "24px", height: "24px"}}/>} checkedIcon={<ShareSolid style={{width: "24px", height: "24px", color:'primary'}} />} />
                </IconButton>
            </CardActions>
        </Card>
    </div>
  )
}

export default Post