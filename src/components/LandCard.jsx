import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';

export default function ActionAreaCard({product}) {
  const {title,price,image,address:{street,city,state},bhk:{bedrooms,bathrooms,area}} = product;
  return (
    <Card sx={{ minWidth:300,maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography fontWeight="800" color="purple" variant="body2" >
            ${price} <span className='month'>/ month</span>
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
             {street + city + state} 
          </Typography>
          <hr/>
          <Stack>
            <Typography></Typography>
            <Typography></Typography>
            <Typography></Typography>

          </Stack>
         
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
