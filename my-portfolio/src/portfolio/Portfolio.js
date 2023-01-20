import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

const data = [
    {
        url: 'https://www.google.com/', //自分の作品のURLをここに
        src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',//画像
        title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',//タイトル
        channel: 'Don Diablo',
        views: '396k views',
        createdAt: 'a week ago',
    },
    {
        url: 'https://magazine.techacademy.jp/magazine/48764',
        src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Queen - Greatest Hits',
        channel: 'Queen Official',
        views: '40M views',
        createdAt: '3 years ago',
    },
    {
        url: 'https://mui.com/material-ui/react-skeleton/',
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130M views',
        createdAt: '10 months ago',
    },
    {
        url: 'https://www.google.com/',
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130M views',
        createdAt: '10 months ago',
    },
    {
        url: 'https://www.google.com/',
        src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
        channel: 'Calvin Harris',
        views: '130M views',
        createdAt: '10 months ago',
    },
    
];

function Media(props) {
    const { loading = false } = props;

    return (
        <Grid container wrap="nowrap">
        {(loading ? Array.from(new Array(0)) : data).map((item, index) => (
            <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
            {item ? (
                <a href={item.url}>
                    <img
                    style={{ width: 210, height: 118 }}
                    alt={item.title}
                    src={item.src}
                    />
                </a>
            ) : (
                <Skeleton variant="rectangular" width={210} height={118} />
            )}

            {item ? (
                <Box sx={{ pr: 2 }}>
                <Typography gutterBottom variant="body2">
                    {item.title}
                </Typography>
                <Typography display="block" variant="caption" color="text.secondary">
                    {item.channel}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    {`${item.views} • ${item.createdAt}`}
                </Typography>
                </Box>
            ) : (
                <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="60%" />
                </Box>
            )}
            </Box>
        ))}
        </Grid>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};

export default function YouTube() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
        <Media loading />
        <Media />
        </Box>
    );
}