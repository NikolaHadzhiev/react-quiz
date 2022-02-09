import Typography from '@mui/material/Typography';
import styles from "./ExperienceHeader.module.scss";
import classNames from "classnames";

interface Props {
    experience: number
}

export const ExperienceHeader: React.FC<Props> = ({ experience }) => {
    return (
        <div className={classNames(styles['xp-wrapper'])}>
            <Typography variant="h2" className={classNames(styles['xp-count'])}>{experience}xp</Typography>
            <Typography variant="body2" className={classNames(styles['xp-text'])}>TOTAL XP</Typography>
        </div>
    );
};