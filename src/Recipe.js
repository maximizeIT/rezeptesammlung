import { useCallback } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';

// import CardMedia from '@mui/material/CardMedia';
// import CardActions from '@mui/material/CardActions';
// import ShareIcon from '@mui/icons-material/Share';

export default function Recipe(props) {

  const { recipeData, view, singleView } = props;

  const onClick = useCallback((event) => {
    event.preventDefault();
    props.onClick(recipeData)
  }, [recipeData, props]);

  const onClickClose = useCallback((event) => {
    event.preventDefault();
    props.onClickClose()
  }, [props]);

  return (
    <Card raised sx={{ maxWidth: view === 'masonry' ? 345 : 'auto', width: view === 'list' ? '100%' : 'auto' }}>
      <CardHeader 
        title={recipeData.post_title} 
        sx={{ background: '#f1ad1d' }} 
        onClick={singleView ? onClickClose : onClick}
        action={ singleView ?
          <IconButton aria-label="settings">
            <CloseIcon />
          </IconButton> 
          : 
          <IconButton>
            <ZoomOutMapIcon />
          </IconButton>
        }
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="https://source.unsplash.com/random"
        alt={title}
      /> */}
      <CardContent>
        <Typography variant="body" color="text.secondary" dangerouslySetInnerHTML={{__html: recipeData.post_content}} />
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}