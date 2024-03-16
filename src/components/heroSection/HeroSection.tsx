import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { styleConfig } from '@root/styleConfig/styleConfig';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import { Left, Media, Right, Action } from './styleComponents';
// import './style.css';

export interface Button {
    title?: string;
    link?: string;
}
export interface HeroSectionProps {
    title?: string;
    summary?: string;
    imageSrc?: string;
    button?: Button;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    summary,
    imageSrc,
    button,
}) => {
    const theme = useTheme();
    return (
        <Box
            aria-label="hero-section"
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column-reverse', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                py: styleConfig.responsivePadding(4),
            }}
        >
            {/* Left Section */}
            <Left
                sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    width: '100%',
                    mt: { xs: 0 },
                }}
            >
                <Typography
                    variant="h3"
                    component="h3"
                    mb={3}
                    sx={{ typography: 'inherit' }}
                >
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                </Typography>
                <style>
                    {`
                    mark {
                    font-weight: 700;
                    color: ${theme.palette.primary.main};
                    background-color: rgba(255, 255, 255, 0);
                `}
                </style>
                <Typography
                    color="secondary.light"
                    lineHeight={1.5}
                    variant="body1"
                    paragraph
                >
                    {summary}
                </Typography>
                <Action
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                    }}
                    mt={2}
                >
                    <Button
                        sx={{ borderRadius: 40, px: 5, py: 1.3 }}
                        variant="contained"
                        color="primary"
                    >
                        <Link href={button?.link}>{button?.title}</Link>
                    </Button>
                </Action>
            </Left>
            {/* Right Section */}
            <Right mb={{ xs: 2, sm: 0 }} ml={{ xs: 0, sm: 2 }}>
                <Media
                    sx={{
                        height: styleConfig.responsiveHeight(480),
                        width: styleConfig.responsiveWidth(613),
                        position: 'relative',
                    }}
                >
                    <Image src={imageSrc} alt={title} fill={true} />
                </Media>
            </Right>
        </Box>
    );
};

export default HeroSection;
