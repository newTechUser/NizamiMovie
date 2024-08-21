import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./ModalOrder.scss";

interface CloseProps {
    handleCloseFormModal: () => void;
    priceOfSeats: number;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
        padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
        padding: theme.spacing(1),
    },
}));

const ModalOrder = ({ handleCloseFormModal, priceOfSeats }: CloseProps) => {
    return (
        <div className='order'>
            <BootstrapDialog aria-labelledby='customized-dialog-title' className='DIALOG' open={true}>
                <div className='Dialogcontainer'>
                    <DialogTitle sx={{ m: 0, p: 2 }} id='customized-dialog-title'></DialogTitle>
                    <IconButton
                        aria-label='close'
                        onClick={handleCloseFormModal}
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
                        <p className='Dialoghead'>Order</p>
                        <div className='form'>
                            <div className='formitem'>
                                <p className='inputTitle'>Name and surname</p>
                                <input type='text' className='name' />
                            </div>
                            <div className='formitem'>
                                <p className='inputTitle'>Email</p>
                                <input type='email' className='name' />
                            </div>
                            <div className='formitem'>
                                <p className='inputTitle'>Promo</p>
                                <div className='formitemContainer'>
                                    <input type='text' className='number' />
                                    <button className='promoBtn'>Apply</button>
                                </div>
                            </div>
                            <div className='formitem'>
                                <p className='inputTitle'>Cell phone</p>
                                <div className='formitemcontainer'>
                                    <input type='text' className='prefiks' value='+994' readOnly />
                                    <select className='prefiks'>
                                        <option value='010'>010</option>
                                        <option value='050'>050</option>
                                        <option value='055'>055</option>
                                        <option value='070'>070</option>
                                        <option value='077'>077</option>
                                        <option value='051'>051</option>
                                    </select>
                                    <input type='text' className='number' />
                                </div>
                            </div>
                            <div className='formitem'>
                                <p className='inputTitle'>Payment</p>
                                <select className='paymentcard'>
                                    <option value='Visa bank card'>Visa bank card</option>
                                </select>
                                <div className='paymenticon'>
                                    <input type='text' className='payment' />
                                </div>
                            </div>
                        </div>
                        <div className='textContainer'>
                            <input type='checkbox' />
                            <span>Remember card information</span>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <div className='btnDialog'>
                            <button className='orderbtn'>Purchase ${priceOfSeats} </button>
                        </div>
                    </DialogActions>
                </div>
            </BootstrapDialog>
        </div>
    );
};

export default ModalOrder;
