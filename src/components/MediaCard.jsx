import * as React from 'react';
import '../App.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RecipeModal from './RecipeModal';
// import Modal from '@mui/material/Modal';
// import { Box } from '@mui/material';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

export default function MediaCard({label, image, healthLabels, cuisineType, dishType, ingredientLines}) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {label}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Cuisine Type: {cuisineType}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Dish Type: {dishType}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Health labels: {healthLabels}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleOpen} >See recipe</Button>
      </CardActions>

      <RecipeModal open={open} handleClose={handleClose} ingredientLines={ingredientLines} label={label} />

      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Full Recipe
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ingridients: 
            <ul>{ingredientLines.map(line => {
              return <li>{line}</li>
            })}
            </ul>
          </Typography>
        </Box>
      </Modal> */}

    </Card>
  );
}