import { Seat } from "@/shared/interfaces/Order";
import "./ModalSeat.scss";
import { useState } from "react";
import ModalOrder from "../ModalOrder/ModalOrder";

interface ModalPorps {
    selectedSeats: Seat[];
    handleCancelSeat: (seat: Seat) => void;
}

const ModalSeat = ({ selectedSeats, handleCancelSeat }: ModalPorps) => {
    const [isFormModalOpen, setFormModalOpen] = useState(false);

    console.log(selectedSeats);

    const handlePurchaseClick = () => {
        setFormModalOpen(true);
    };

    const handleCloseFormModal = () => {
        setFormModalOpen(false);
    };

    let priceOfSeats = selectedSeats.reduce((total, seat) => total + seat.price, 0);

    console.log(priceOfSeats);

    return (
        <div className='modal'>
            <h2 className='modal__header'>SELECTED SEATS</h2>
            <ul className='modal__list'>
                {selectedSeats.map((seat) => (
                    <li key={`${seat.row}-${seat.number}`} className='modal__list-item'>
                        <p>
                            <span className='modal__list-circle'></span>
                            {seat.row} row / {seat.number} seat
                        </p>
                        <p>$ {seat.price}</p>
                        <button className='modal__list__button-cancel' onClick={() => handleCancelSeat(seat)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
            <button className='modal__purchase__button' onClick={handlePurchaseClick}>
                Purchase (${priceOfSeats})
            </button>
            <p className='modal__purchase__time'>Time left to purchase: 10:15</p>

            {isFormModalOpen && <ModalOrder handleCloseFormModal={handleCloseFormModal} priceOfSeats={priceOfSeats} />}
        </div>
    );
};

export default ModalSeat;
