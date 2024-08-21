import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./ModalCongrats.scss";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const ModalCongrats = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className='congrats'>
            <button onClick={handleClickOpen} className='congratsModal'>
                Purchase(10$)
            </button>
            <BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
                <div className='dialogcontainer'>
                    <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'></DialogTitle>
                    <IconButton
                        aria-label='close'
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent>
                        <p className='dialoghead'>Congratulations!</p>
                        <p className='dialogcontent'>
                            Your’ve bought two tickets. Please, save it on your device and show before the entering to the theatre
                        </p>
                    </DialogContent>
                    <DialogActions>
                        <div className='btndialog'>
                            <button className='congratsbtn'>Save tickets</button>
                        </div>
                    </DialogActions>
                </div>
            </BootstrapDialog>
        </div>
    );
};

export default ModalCongrats;
