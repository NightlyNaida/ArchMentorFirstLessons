import styles from './newsCard.module.css';

import {Grid} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';


export const NewsCard = (props) => {
    return (
        <>
        <Grid item xs={props.hasOwnProperty('large') ? 8 : 4}>
            <div className={styles.contentСontainer}>
                <div className={styles.textAndUi}>
                    <div className={styles.tags}></div>
                    <div className={styles.text}>
                        <h2 className={styles.caption}>Александр Овечкин побил рекорд Уэйна Гретцки</h2>
                        <p className={styles.previewText}>Для достижения рекорда самому успешному россиянию в истории НХЛ понадобилось 23 года. Всего-то...</p>
                    </div>
                    <div className={styles.cardFooter}>
                    <div className={styles.likesContainer}>
                        <FavoriteIcon sx={{color:'#7D7D7D'}}></FavoriteIcon>
                        <p className={styles.likesCounter}>12</p>
                    </div>
                    <p className={styles.date}>12.03 14:00</p>
                    </div>
                </div>
                <div className={styles.imageСontainer}>
                    <img className={styles.image} src="https://img.championat.com/news/big/g/t/trener-baffalo-rezultativnost-gretcki-byla-sumasshestviem-a-potom-poyavilsya-ovechkin_1648233259875061724.jpg" alt="" />
                </div>
            </div>
        </Grid>
        </>
    )
}