'use client';

import { AppBar, Toolbar, Box, Container, Button } from '@mui/material';
import Link from 'next/link';
import { styleConfig } from '@root/styleConfig/styleConfig';
import useHandlers from './hooks/useHandlers';
import useGetLogInInfo from './hooks/useGetLogInInfo';
import Drawer from './Drawer';
import { AccountNavigationSection, PageNavigation } from './styleComponents';
import AccountNavigation from './AccountNavigation';
import Brand from '../UI/brand/Brand';
import AuthModal from '../authModal/AuthModal';

const pages = [
    { link: '/', title: 'Home' },
    { link: '/about', title: 'About' },
    { link: '/career', title: 'Career' },
    { link: '/webinar', title: 'Webinar' },
    { link: '/my-events', title: 'My Events' },
];

const Navbar = () => {
    const {
        anchorElNav,
        anchorElUser,
        handleOpenNavMenu,
        handleOpenUserMenu,
        handleCloseNavMenu,
        handleCloseUserMenu,
    } = useHandlers();
    const { loginInfo, getLogoutHandler } = useGetLogInInfo();
    const drawerStates = { pages, anchorElNav };
    const drawerHandlers = { handleOpenNavMenu, handleCloseNavMenu };
    const accountNavigationStates = { loginInfo, anchorElUser };
    const accountNavigationHandlers = {
        handleOpenUserMenu,
        handleCloseUserMenu,
        getLogoutHandler,
    };
    return (
        <AppBar
            sx={{ backgroundColor: 'rgba(0,0,0,0)', boxShadow: 'none' }}
            position="static"
        >
            <AuthModal />
            {(anchorElUser || anchorElNav) && (
                <Box
                    onClick={
                        anchorElUser ? handleCloseUserMenu : handleCloseNavMenu
                    }
                    sx={{
                        position: 'absolute',
                        zIndex: '1500',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'transparent',
                    }}
                ></Box>
            )}
            <Container>
                <Toolbar disableGutters>
                    {/* Drawer start  */}
                    {/* This Drawer for navigating multiple pages in under medium
                    width devices. it should display none in upper width of medium devices */}
                    <Drawer states={drawerStates} handlers={drawerHandlers} />
                    {/* Drawer End  */}
                    {/* Brand start */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex' },
                        }}
                    >
                        <Brand />
                    </Box>

                    {/* Brand End  */}
                    {/* Navigation link of pages start  */}
                    <PageNavigation
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                        aria-label="page navigation"
                    >
                        {pages.map((page) => (
                            <Link key={page.link} href={page.link}>
                                <Button
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        mx: styleConfig.responsiveMargin(1.5),
                                        color: 'white',
                                        display: 'block',
                                    }}
                                >
                                    {page.title}
                                </Button>
                            </Link>
                        ))}
                    </PageNavigation>
                    {/* Navigation link of pages End  */}
                    {/* account navigation start  */}
                    <AccountNavigationSection
                        aria-label="account-navigation"
                        sx={{ flexGrow: 0 }}
                    >
                        {loginInfo.isLogin ? (
                            <AccountNavigation
                                handlers={accountNavigationHandlers}
                                states={accountNavigationStates}
                            />
                        ) : (
                            <Link href="/login">
                                <Button variant="contained">Login</Button>
                            </Link>
                        )}
                    </AccountNavigationSection>
                    {/* account navigation end  */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
