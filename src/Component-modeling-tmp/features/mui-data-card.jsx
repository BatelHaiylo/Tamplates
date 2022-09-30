import "./card.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
  
export default function someCard({obj-passed-as-props}) {
  const {author,country,language,link,pages,title,year} = obj-passed-as-props//destruction the obj keys
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia  //const settings can be changed here
        component="img"
        height="140"
        image="https://"
        alt="book"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title} - {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          country: {country}
          language: {language}
          pages: {pages}
          year: {year}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >
          <a href={link} target="_blank" rel="noopener noreferrer" className="link-card">read</a>
        </Button>
      </CardActions>
    </Card>
  );
};