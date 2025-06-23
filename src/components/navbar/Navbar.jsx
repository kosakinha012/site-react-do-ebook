import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import DrawerComponent from "../drawer/drawreCompent";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
const pages = ['Home', 'Products', 'Blog'];
const settings = ['Cart', 'logout'];

function Navbar() {
  const dispatch = useDispatch();

  // Menu de navegação
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleSettingClick = (setting) => {
    switch (setting) {
      case "Cart":
        setOpenDrawer(true);
        break;
      case "Logout":
        console.log("Sai do sistema");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            <Box className="links" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button><Link to="/">Home</Link></Button>
              <Button><Link to="/produtos">ebooks</Link></Button>
              <Button><Link to="/notes">FeedBack</Link></Button>
              <Button><Link to="/login">Login</Link></Button>
              <Button><Link to="/profile">Perfil</Link></Button>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* Carrinho - agora com ícone do MUI no mesmo tamanho do avatar */}
              <Tooltip title="Carrinho">
                <IconButton 
                  onClick={() => setOpenDrawer(true)}
                  sx={{ 
                    p: 0,
                    color: 'inherit',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                >
                  <ShoppingCartIcon 
                    sx={{ 
                      width: 30, 
                      height: 30,
                      borderRadius: '50%',
                      padding: 1,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }} 
                  />
                </IconButton>
              </Tooltip>

              
              
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => {
                      handleCloseUserMenu();
                      handleSettingClick(setting);
                    }}
                  >
                    <Typography>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <DrawerComponent open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </>
  );
}

export default Navbar;