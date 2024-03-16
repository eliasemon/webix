'use client';

import React from 'react';
import { Typography, Container, Box, Grid, Button } from '@mui/material';
import Link from 'next/link';
import { styleConfig } from '@root/styleConfig/styleConfig';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import {
    Main,
    Contact,
    Company,
    CompanyMessage,
    CopyRight,
} from './styleComponents';
import Brand from '../UI/brand/Brand';
import ContactModule from './contactModule/ContactModule';

const footerStyles = {
    backgroundColor: 'backgroundColor.light',
    marginTop: 'auto',
};

const sectionStyles = {
    py: styleConfig.responsivePadding(2.5),
};
const commonBodysx = {
    fontSize: 15,
    color: 'secondary.light',
};
export const links = [
    { tittle: 'About', link: '/about' },
    { tittle: 'Contact', link: '/contact' },
    { tittle: 'Best Events', link: '/best-events' },
    { tittle: 'Terms & Conditions', link: '/terms' },
    { tittle: 'Privacy Policy', link: '/policy' },
    { tittle: 'Help & Support', link: '/help' },
    { tittle: 'Buying Policy', link: '/policy' },
];
const Footer = () => {
    return (
        <Box sx={footerStyles}>
            <Container>
                <Main
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        py: styleConfig.responsivePadding(6.5),
                    }}
                >
                    <CompanyMessage sx={{ ...sectionStyles, flexBasis: '40%' }}>
                        <Brand />
                        <Typography
                            variant="body1"
                            sx={{ ...commonBodysx }}
                            mt={styleConfig.responsiveMargin(2)}
                        >
                            A webinar is an online interactive seminar or
                            presentation conducted over the internet. It allows
                            participants from different locations to connect and
                            engage in real-time discussions, learning, and
                            knowledge sharingTypically hosted by subject matter
                            experts or professionals, webinars cover a wide
                            range of topics and can be educational, informative,
                            or promotional in nature
                        </Typography>
                    </CompanyMessage>
                    <Company sx={{ ...sectionStyles, flexBasis: '30%' }}>
                        <Typography variant="h5">Company</Typography>
                        <Grid
                            mt={styleConfig.responsiveMargin(2)}
                            container
                            spacing={1}
                        >
                            {links.map((item) => (
                                <Grid key={item.tittle} item xs={12} sm={6}>
                                    <Link
                                        key={item.tittle}
                                        href={item.link}
                                        style={{
                                            textDecoration: 'none',
                                            padding: 0,
                                        }}
                                        color="inherit"
                                    >
                                        <Button
                                            variant="text"
                                            sx={{
                                                minWidth: 'auto',
                                                ...commonBodysx,
                                                p: 0,
                                                '&:hover': {
                                                    color: 'primary.main',
                                                },
                                                textTransform: 'none',
                                            }}
                                        >
                                            {item.tittle}
                                        </Button>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Company>
                    <Contact
                        sx={{
                            ...sectionStyles,
                            display: 'grid',
                            gridTemplateColumns: { sm: '1fr 1fr', md: '1fr' },
                        }}
                    >
                        <Box>
                            <Typography variant="h5">Contact</Typography>
                            <Typography
                                mt={styleConfig.responsiveMargin(2)}
                                variant="body1"
                                sx={{ ...commonBodysx }}
                            >
                                Plot # 125/A Sector#3,
                                <br /> Uttara, Dhaka-1230
                            </Typography>
                        </Box>
                        <Box>
                            <ContactModule
                                title="+8801601658511"
                                subheader="Support Hotline"
                                icon={<PhoneInTalkIcon />}
                            />
                            <ContactModule
                                title="Alex@website.com"
                                subheader="Support Email"
                                icon={<MarkEmailReadIcon />}
                            />
                        </Box>
                    </Contact>
                </Main>
            </Container>
            <CopyRight
                aria-label="copy-right"
                textAlign="center"
                py={styleConfig.responsivePadding(2)}
                borderTop={0.5}
                borderColor="secondary.thin"
            >
                <Typography variant="body1" color="textSecondary">
                    &copy; 2023 Webinex Powered By Webinex
                </Typography>
            </CopyRight>
        </Box>
    );
};

export default Footer;
