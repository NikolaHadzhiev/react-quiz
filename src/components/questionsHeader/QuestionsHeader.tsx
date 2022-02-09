import Typography from '@mui/material/Typography';
import styles from "./QuestionHeader.module.scss";
import classNames from "classnames";

interface Props {
    questionsDone: number,
    allQuestions: number
}

export const QuestionHeader: React.FC<Props> = ({ questionsDone, allQuestions }) => {
    return (
        <div className={classNames(styles['questions-wrapper'])}>
            <Typography variant="h2" className={classNames(styles['questions-count'])}>{questionsDone}/{allQuestions}</Typography>
            <Typography variant="body2" className={classNames(styles['questions-text'])}>QUESTIONS</Typography>
        </div>
    );
};