import { Avatar, CardHeader } from '@mui/material';
import { styleConfig } from '@root/styleConfig/styleConfig';
import { ReactNode } from 'react';

interface ContactsProps {
    icon?: ReactNode;
    title?: string;
    subheader?: string;
}

const ContactModule: React.FC<ContactsProps> = ({ icon, title, subheader }) => (
    <>
        <CardHeader
            sx={{ pt: 2, px: 0 }}
            avatar={
                <Avatar
                    sx={{
                        backgroundColor: 'backgroundColor.thin',
                        width: styleConfig.responsiveWidth(32),
                        height: styleConfig.responsiveHeight(32),
                    }}
                >
                    {icon}
                </Avatar>
            }
            title={title}
            subheader={subheader}
            subheaderTypographyProps={{
                // color: paletteTheme.root.light,
                fontSize: 12,
                fontWeight: 300,
            }}
            titleTypographyProps={{
                fontWeight: 400,
                fontSize: 16,
            }}
        />
    </>
);

export default ContactModule;
