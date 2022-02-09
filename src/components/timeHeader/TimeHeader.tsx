import Typography from '@mui/material/Typography';
import styles from "./TimeHeader.module.scss";
import Countdown from 'react-countdown';
import classNames from "classnames";

export const TimeHeader = () => {
    return (
        <div className={classNames(styles['time-wrapper'])}>
            <Typography variant="h2" className={classNames(styles['time-left'])}><Countdown date={Date.now() + 600000} renderer={({minutes, seconds}) => {return <span>{minutes}:{seconds}</span>}} /></Typography>
            <Typography variant="body2" className={classNames(styles['time-text'])}>TIME REMAINING</Typography>
        </div>
    );
};