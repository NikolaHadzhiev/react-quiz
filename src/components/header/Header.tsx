import React from 'react';
import styles from "./Header.module.scss";
import Grid from "@mui/material/Grid";
import classNames from "classnames";

interface Props {
    questionsHeader: React.ReactNode,
    timeHeader: React.ReactNode,
    experienceHeader: React.ReactNode
}

export const Header: React.FC<Props> = ({ questionsHeader, timeHeader, experienceHeader }) => {
    return (
        <div className={classNames(styles.header)}>
            <div className={classNames(styles.wrapper)}>
                <Grid container className={classNames(styles.container)}>
                    <Grid item>
                        {questionsHeader}
                    </Grid>
                    <Grid item>
                        {timeHeader}
                    </Grid>
                    <Grid item>
                        {experienceHeader}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};
