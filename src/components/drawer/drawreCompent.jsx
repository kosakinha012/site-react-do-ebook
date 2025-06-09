import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useDispatch,useSelector } from 'react-redux';
import { removeFromCart } from '../../redux/slice/auth/cardSlice';

export default function DrawerComponent({ open, onClose }) {
    const cart = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    // total baseado no rating como se fosse preço
    const total = cart.reduce((sum, item) => sum + item.price, 0);

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
                            {cart.map((item) => (
                                <ListItem
                                    key={item.id}
                                    alignItems="flex-start"
                                    secondaryAction={
                                        <IconButton edge="end" onClick={() => dispatch(removeFromCart(item.id))}>
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                    sx={{ alignItems: 'center' }}
                                >
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        <Avatar

                                        />
                                        <Box>
                                            <Typography variant="subtitle1">{item.name}</Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                
                                            </Typography>
                                            <Typography variant="body2">
                                                Preço: 
                                            </Typography>
                                            <Typography variant="body2">
                                                quantidade: {item.quantity}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </ListItem>
                            ))}
                        </List>

                        <Divider sx={{ my: 2 }} />

                        <Typography variant="subtitle1">
                            Total: R$ 
                        </Typography>
                    </>
                )}
            </Box>
        </Drawer>
    );
}
