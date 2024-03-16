import React, { useState } from 'react';
import { Button, Collapse, Typography } from '@mui/material';

const ExpandableText = ({ text, maxHeight = 50 }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <span style={{ display: 'inline' }}>
                <Collapse in={expanded} collapsedSize={maxHeight}>
                    <Typography variant="body1">{text}</Typography>
                </Collapse>
                <Button
                    sx={{ display: 'inline-block', p: 0, m: 0 }}
                    onClick={toggleExpand}
                >
                    {expanded ? 'Show Less' : 'Show More'}
                </Button>
            </span>
        </>
    );
};

export default ExpandableText;
