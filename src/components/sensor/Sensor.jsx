import React, { useContext, useState } from "react"
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Repeat, Report } from "@mui/icons-material"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import "./sensorstyle.scss"
import { ThemeContext } from "../../services/context/DarkTheme";



const Sensor = (props) => {
    const { title, status, report } = props

    const [power, setPower] = useState(props.power)
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const Theme = useContext(ThemeContext)

    const handleToastMessage = () => {
        if (power !== "on") {
            toast.success('سنسور با موفقیت روشن شد', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            
        }
        else {
            toast.warn("!سنسور خاموش شد", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }


    return (
        <>
            <ToastContainer />
            <div className={status === "خطرناک" ? "sensor danger" : "sensor normal"}>
                <div className="title">
                    <p>{title}</p><h3>:  عنوان</h3>
                </div>
                <div className="status-power">
                    <div className="status">
                        <p>{power === "on" ? "روشن" : "خاموش"}</p><h4>: وضعیت</h4>
                    </div>
                    <div className="power">
                        <Stack direction="row" spacing={1} alignItems="center" sx={{ width: "100%", height: "100%" }}>
                            <Typography sx={{ fontFamily: "sans" }}>خاموش</Typography>
                            <Switch defaultChecked={power === "on" ? true : false} size="big" 
                            className="switch"
                            onChange={() => {
                                power === "on" ? setPower("off") : setPower("on")
                                handleToastMessage()
                            }} />
                            <Typography sx={{ fontFamily: "sans" }}>روشن</Typography>
                        </Stack>
                    </div>
                </div>
                <div className="report">
                    <div className="message">
                        <p className={status === "خطرناک" ? "sensor-text sensor-text-danger" : "sensor-text sensor-text-normal"}>{status}</p><h4>: وضعیت</h4>
                    </div>
                    <div className="report-icon" onClick={handleClickOpen} >
                        <Report className="icon" /> <p>گزارش</p>
                    </div>
                </div>
            </div>
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title" sx={{ fontFamily: "sans", textAlign: "right" }}>
                        {title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText sx={{ fontFamily: "sans" ,textAlign:"right" }}>
                            {report}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} autoFocus sx={{ fontFamily: "sans",textAlign:"right" }}>
                            متوجه شدم
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}

export default Sensor