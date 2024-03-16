import React, { FC } from 'react';
import { Box, IconButton, Typography, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export interface States {
    anchorElNav: null | HTMLElement;
    pages: any[];
}
export interface Handlers {
    handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseNavMenu: () => void;
}
export interface DrawerProps {
    states: States;
    handlers: Handlers;
}

const Drawer: FC<DrawerProps> = ({ states, handlers }) => {
    const { handleOpenNavMenu, handleCloseNavMenu } = handlers;
    const { anchorElNav, pages } = states;
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: { md: 'none', xs: 'flex' },
            }}
            aria-label="Nav Drawer"
        >
            <IconButton
                size="large"
                aria-label="Drawer Icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Box
                sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    zIndex: '2000',
                    backgroundColor: 'backgroundColor.light',
                    boxShadow: 'none',
                    border: 0,
                    outline: 0,
                    display: `${anchorElNav ? 'block' : 'none'}`,
                }}
                onClick={handleCloseNavMenu}
            >
                {pages.map((page) => (
                    <Link key={page.title} href={page.link}>
                        <MenuItem onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">
                                {page.title}
                            </Typography>
                        </MenuItem>
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

export default Drawer;
