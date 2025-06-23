import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/slice/auth/cardSlice';

export default function DrawerComponent({ open, onClose }) {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // Garante que valor é tratado como número
  const total = cart.reduce((sum, item) => {
    const valor = typeof item.valor === 'number' ? item.valor : parseFloat(item.valor) || 0;
    return sum + valor;
  }, 0);

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 2 }} role="presentation">
        <Typography variant="h6" sx={{ mb: 2 }}>
          Carrinho de Compras
        </Typography>

        {cart.length === 0 ? (
          <Typography variant="body1">Seu carrinho está vazio.</Typography>
        ) : (
          <>
            <List>
              {cart.map((item, index) => {
                const valor = typeof item.valor === 'number' ? item.valor : parseFloat(item.valor) || 0;

                return (
                  <ListItem
                    key={item.id || index}
                    alignItems="flex-start"
                    secondaryAction={
                      <IconButton edge="end" onClick={() => dispatch(removeFromCart(item.id || item.volumeInfo.title))}>
                        <DeleteIcon />
                      </IconButton>
                    }
                    sx={{ alignItems: 'center' }}
                  >
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        variant="square"
                        src={item.volumeInfo?.imageLinks?.thumbnail || '/placeholder-book-cover.png'}
                        alt={item.volumeInfo?.title}
                        sx={{ width: 56, height: 80 }}
                      />
                      <Box>
                        <Typography variant="subtitle1">
                          {item.volumeInfo?.title || 'Título indisponível'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.volumeInfo?.authors?.join(', ') || 'Autor desconhecido'}
                        </Typography>
                        <Typography variant="body2">
                          Preço: R$ {valor.toFixed(2)}
                        </Typography>
                      </Box>
                    </Stack>
                  </ListItem>
                );
              })}
            </List>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              Total: R$ {total.toFixed(2)}
            </Typography>
          </>
        )}
      </Box>
    </Drawer>
  );
}
