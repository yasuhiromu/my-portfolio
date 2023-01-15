import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Image01 from './ap.jpg';

export default function MenuAppBar() {
    const [auth] = React.useState(true);

    return (
        <Box sx={{ flexGrow: 1 }}>
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Hiromu Yasukaga | 日本工学院八王子専門学校
            </Typography>
            {auth && (
                <div>
                <IconButton>
                    <Avatar src={Image01}/> {/*直接画像のパスを入れるとだめ。一回importしてから*/}
                </IconButton>
                </div>
            )}
            </Toolbar>
        </AppBar>
        </Box>
    );
}