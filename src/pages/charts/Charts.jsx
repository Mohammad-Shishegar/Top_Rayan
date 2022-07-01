import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import PieChartComponent from "../../components/chart/PieChartComponent";
import TinyBarChart from "../../components/chart/TinyBarChart";
import SimpleLeLineChart from "../../components/chart/SimpleLineChart"
import { Farm, LinedataWater, LinedataWaterandPesticides, Pidata } from "../../fakeData";
import "./chartsstyle.scss"
import SimpleBarChart from "../../components/chart/SimpleBarCharts";
import { SizeContext } from "../../services/context/WindowSize";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeContext } from "../../services/context/DarkTheme";




const Charts = () => {

    const [showpop, setShowPop] = useState(true)

    const size = useContext(SizeContext)

    useEffect(() => {
        if (size.size < 425)
            setShowPop(true)
        else
            setShowPop(false)
    }, [size])

    const closePopup = () => {
        setShowPop(false)
    }

    const Theme = useContext(ThemeContext)


    return (
        <>
            <div className={Theme.dark === true ? "charts charts-dark" : "charts"}>
                <h3>نمودار ها</h3>
                <Grid container >
                    <Grid md={6} item xs={12}>
                        <SimpleBarChart data={LinedataWaterandPesticides} title={"میزان استفاده از اب و افت کش ها در ماه های قبل"} />
                    </Grid>
                    <Grid md={6} item xs={12}>
                        <TinyBarChart data={Farm} title={"برداشت محصول در سال های قبل"} />

                    </Grid>
                    <Grid md={6} item xs={12}>
                        <SimpleLeLineChart data={LinedataWater} title={"میزان اب مصرف شده در ماه های قبل"} />
                    </Grid>
                    <Grid md={6} item xs={12}>
                        <PieChartComponent data={Pidata} title={"تنوع کاشت محصول"} />
                    </Grid>
                </Grid>
            </div>

            {/* popup */}

            <div>
                <Dialog
                    open={showpop}
                    onClose={closePopup}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" sx={{fontFamily:"sans" , textAlign:"right"}}>
                        {"توجه"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" sx={{fontFamily:"sans" , textAlign:"right"}}>
                          .لطفا برای اینکه نمودار ها را به شکل مطلوب مشاهده فرمایید گوشی رو به حالت افقی نگه دارید   
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => closePopup()} autoFocus sx={{fontFamily:"sans" , textAlign:"right"}}>
                            متوجه شدم
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}
export default Charts