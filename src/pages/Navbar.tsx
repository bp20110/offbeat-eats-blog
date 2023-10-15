import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';

const Navbar = () => {
    return ( 
        <Box sx={{ flexGrow: 1 , marginBottom: 3}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                        variant="h5" 
                        component="div" 
                        sx={{ 
                            flexGrow: 1,
                            fontFamily: 'cursive',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
                        }}
                    >
                        Offbeat Eats
                    </Typography>                    
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/"
                            style={{ 
                                marginRight: '10px',
                                fontFamily: 'cursive',
                                backgroundColor: '#ffedcc'
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/create"
                            style={{ 
                                marginRight: '10px',
                                fontFamily: 'cursive',
                                backgroundColor: '#ffedcc'
                            }}
                        >
                            Create Blog
                        </Button>
                </Toolbar>
            </AppBar>
        </Box>
     );
}

export default Navbar;