import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

type RecipeReviewCardProps = {
  blog: {
    titleTop: string;
    bodyTop: string;
    imageTop: File | null;
    shopInfo: string;
    author: string;
    id: number;
  };
};

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard: React.FC<RecipeReviewCardProps> = ({blog}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let imageUrlTop = '/images/cheese.jpg';

  if (blog.imageTop && blog.imageTop instanceof File) {
    imageUrlTop = URL.createObjectURL(blog.imageTop);
  }

  console.log("imageTop:", blog.imageTop);

  return (
    <Card sx={{ maxWidth: 800, margin: '0 auto 0 0', backgroundColor: 'white' }}>
      <Link to={`/blogs/${blog.id}`} >
        <CardMedia
          component="img"
          height="380"
          image={imageUrlTop}
          alt="Paella dish"
        />
      </Link>
      <CardContent 
        sx={{ 
            backgroundColor: '#fff6e6',
            height: '50px',
            overflow: 'auto',
          }}
      >
        <Typography variant="body2" color="text.secondary">
          {blog.titleTop}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Written by{' '}
          {blog.author}
        </Typography>
        <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
          <Typography variant="body2" color="text.secondary">{blog.bodyTop}</Typography>
        </div>
      </CardContent>
      <CardActions 
        disableSpacing 
        sx={{ 
          backgroundColor: '#ffedcc',
          height: '10px'
        }}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} unmountOnExit>
      <CardContent sx={{ backgroundColor: '#fff6e6', overflow: 'auto' }}>
        <Typography paragraph>shop Info:</Typography>
        <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
          <Typography paragraph>{blog.shopInfo}</Typography>
        </div>
      </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeReviewCard;