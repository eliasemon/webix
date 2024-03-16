import React, { FC } from 'react';
import { LoginInfo } from '@root/types/logInInfo';
import {
    IconButton,
    Typography,
    Avatar,
    Tooltip,
    MenuItem,
    Box,
} from '@mui/material';
import Link from 'next/link';

export interface States {
    anchorElUser?: null | HTMLElement;
    logInInfo?: LoginInfo;
}
export interface Handlers {
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseUserMenu: () => void;
    getLogoutHandler: () => void;
}
export interface AccountNavigationItemsProps {
    states: States;
    handlers: Handlers;
}

const AccountNavigationItems: FC<AccountNavigationItemsProps> = ({
    states,
    handlers,
}) => {
    const { handleOpenUserMenu, handleCloseUserMenu, getLogoutHandler } =
        handlers;
    const { anchorElUser, logInInfo } = states;

    return (
        <>
            <Box position={'relative'}>
                <Tooltip title={logInInfo?.userName}>
                    <IconButton onClick={handleOpenUserMenu}>
                        <Avatar
                            alt={logInInfo?.userName}
                            src={logInInfo?.avatar}
                        />
                    </IconButton>
                </Tooltip>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        zIndex: '2000',
                        backgroundColor: 'backgroundColor.light',
                        boxShadow: 'none',
                        border: 0,
                        outline: 0,
                        display: `${anchorElUser ? 'block' : 'none'}`,
                    }}
                    onClick={handleCloseUserMenu}
                >
                    <Link href="/profile">
                        <MenuItem key="profile" onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">Profile</Typography>
                        </MenuItem>
                    </Link>
                    <Link href="/dashboard">
                        <MenuItem key="dashboard" onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                                Dashboard
                            </Typography>
                        </MenuItem>
                    </Link>
                    <MenuItem
                        key="logout"
                        onClick={() => {
                            handleCloseUserMenu();
                            getLogoutHandler();
                        }}
                    >
                        <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                </Box>
            </Box>
        </>
    );
};

export default AccountNavigationItems;
