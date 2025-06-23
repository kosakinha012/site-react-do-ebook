import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ p: 3, maxWidth: 800, margin: 'auto', color: '#eee' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#00BFFF', fontWeight: 'bold' }}>
        Trabalho de Conclusão de Curso (TCC)
      </Typography>

      <Typography variant="body1" paragraph>
        Projeto desenvolvido como parte da formação em Desenvolvimento Full-Stack pela Mynds Tech School. 
        A aplicação é uma plataforma web moderna para busca, visualização e gerenciamento de e-books, utilizando:
      </Typography>

      <List sx={{ mb: 3 }}>
        <ListItem>
          <ListItemText primary="React.js: Para construção da interface dinâmica e componentes reutilizáveis." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Redux: Para gerenciamento centralizado do estado global (como carrinho de compras, dados dos livros e autenticação)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Material-UI: Para design system consistente e responsivo." />
        </ListItem>
        <ListItem>
          <ListItemText primary="API Externa: Integração com a Google Books API para busca de livros em tempo real." />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom sx={{ color: '#00FF7F' }}>
        Principais Funcionalidades:
      </Typography>
      <List sx={{ mb: 3 }}>
        <ListItem>
          <ListItemText primary="✔ Catálogo de E-books: Busca e exibição de livros com descrições e capas." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✔ Carrinho de Compras: Adição/remoção de itens com persistência via Redux." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✔ Responsividade: Layout adaptável para mobile e desktop." />
        </ListItem>
        <ListItem>
          <ListItemText primary="✔ Notificações: Sistema de popups para feedback de ações (sucesso/erro)." />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom sx={{ color: '#00BFFF' }}>
        Diferenciais:
      </Typography>
      <List sx={{ mb: 3 }}>
        <ListItem>
          <ListItemText primary="Arquitetura Escalável: Organização modular (components, reducers, actions)." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Boas Práticas: Clean Code, hooks customizados e middlewares no Redux." />
        </ListItem>
        <ListItem>
          <ListItemText primary='Futurista: UI com tema "tech" (cores escuras, tons neon e efeitos modernos).' />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom sx={{ color: '#00FF7F' }}>
        Aprendizados:
      </Typography>
      <Typography variant="body1" paragraph>
        O projeto consolidou conhecimentos em:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Gerenciamento de estado complexo com Redux Toolkit." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Consumo de APIs REST." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Padrões de componentização no React." />
        </ListItem>
      </List>
    </Box>
  );
}
