import './newsCard.css';
import {Grid} from '@mui/material';

export const NewsCard = (props) => {
    return (
        <>
        <Grid item xs={props.hasOwnProperty('large') ? 8 : 4}>
            <div className="content-container">
                <div className="text-and-ui">
                    <div className="tags"></div>
                    <div className="text">
                        <h2 className='caption'>Александр Овечкин побил рекорд Уэйна Гретцки</h2>
                        <p className="preview-text">Для достижения рекорда самому успешному россиянию в истории НХЛ понадобилось 23 года. Всего-то...</p>
                    </div>
                    <div className="card-footer"></div>
                </div>
                <div className="image-container">
                    <img className='image' src="https://img.championat.com/news/big/g/t/trener-baffalo-rezultativnost-gretcki-byla-sumasshestviem-a-potom-poyavilsya-ovechkin_1648233259875061724.jpg" alt="" />
                </div>
            </div>
        </Grid>
        </>
    )
}