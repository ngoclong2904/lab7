import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Main = () => {
  // Sample data for the cards
  const cards = [
    { title: 'Card 1', content: 'This is the content for Card 1.' },
    { title: 'Card 2', content: 'This is the content for Card 2.' },
    { title: 'Card 3', content: 'This is the content for Card 3.' },
  ];

  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" sx={{ mt: 4 }}>
        Welcome to Our Website
      </Typography>

      {cards.map((card, index) => (
        <Card key={index} sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body1">
              {card.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Main;
