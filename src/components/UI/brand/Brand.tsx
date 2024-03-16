import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Brand = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            <Link href="/">
                <Image
                    src="/Logo.svg"
                    style={{ margin: 0, padding: 0, textAlign: 'left' }}
                    alt="Webinex"
                    width={166}
                    height={36}
                />
            </Link>
        </Box>
    );
};

export default Brand;
