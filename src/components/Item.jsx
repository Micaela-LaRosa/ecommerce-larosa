import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Item({producto}) {
    const {title, description, price, pictureUrl} = producto
    return (
            <Card style={{ width: '25rem', margin: 20 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="300"
                    src={pictureUrl}
                    alt={description}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>    
                        <Typography variant="body2" color="text.secondary">    
                            PRECIO: ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="medium" color="secondary">
                        VER DETALLE
                    </Button>
                </CardActions>
            </Card>
    )
}
