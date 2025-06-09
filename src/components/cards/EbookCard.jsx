import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/slice/auth/cardSlice';

const TechCard = styled(Card)({
  maxWidth: 345,
  backgroundColor: '#0A0A0A',
  color: '#FFFFFF',
  border: '1px solid #00BFFF',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 191, 255, 0.3)'
  }
});

const TechCardHeader = styled(CardHeader)({
  color: '#00BFFF',
  '& .MuiCardHeader-title': {
    fontSize: '1.2rem',
    fontWeight: 'bold'
  }
});

const TechCardMedia = styled(CardMedia)({
  height: '194px',
  objectFit: 'contain',
  backgroundColor: '#121212'
});

const TechCardContent = styled(CardContent)({
  '& .MuiTypography-body2': {
    color: '#CCCCCC',
    lineHeight: '1.5',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }
});

const TechButton = styled(Button)({
  backgroundColor: '#00BFFF',
  color: '#000000',
  fontWeight: 'bold',
  marginTop: '16px',
  '&:hover': {
    backgroundColor: '#0080FF',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 191, 255, 0.3)'
  },
  '&:active': {
    transform: 'translateY(0)'
  }
});

export default function EbookCard(props) {
  const dispatch = useDispatch();

  return (
    <TechCard>
      <TechCardHeader
        title={props.volumeInfo.title}
      />
      <TechCardMedia
        component="img"
        image={props.volumeInfo.imageLinks?.thumbnail || '/placeholder-book-cover.png'}  
        alt={props.volumeInfo.title}
        onError={(e) => {
          e.target.src = '/placeholder-book-cover.png';
        }}
      />
      <TechCardContent>
        <Typography variant="body2">
          {props.volumeInfo.description || 'No description available.'}
        </Typography>
      </TechCardContent>
      
      <TechButton
        variant="contained"
        fullWidth
        onClick={() => dispatch(addToCart(props))}
      >
        Adicionar ao Carrinho
      </TechButton>
    </TechCard>
  );
}