import {Container, Grid} from '@mui/material';
import {NewsCard} from '../components/newsCard.jsx';

export const MainPage = () => {
    return (
        <>
        <Container sx={{height: '100px' , maxWidth: '1200px'}}>
            <Grid container spacing={2}>
                <NewsCard></NewsCard>
                <NewsCard large></NewsCard>
                <NewsCard></NewsCard>
                <NewsCard></NewsCard>
                <NewsCard></NewsCard>
            </Grid>
        </Container>
        </>
    )
}