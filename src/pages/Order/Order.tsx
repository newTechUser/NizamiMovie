import React, { useEffect, useState } from "react";
import "./Order.scss";
import { Seat } from "@/shared/interfaces/Order";
import ModalSeat from "@/components/ModalSeat/ModalSeat";
import Navbar from "@/layout/Navbar/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
});

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const Order: React.FC = () => {
    const [theme] = useState(() => {
        const saved = localStorage.getItem("switch");
        return saved === "true";
    });

    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [seats, setSeats] = useState<Seat[]>(generateSeats());
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const arrDate = [17, 18, 19, 20, 21, 22, 23];
    const arrTime = ["13:15", "15:15", "18:15", "20:30", "22:30"];

    useEffect(() => {
        if (selectedDate && selectedTime && seats.some((seat) => seat.status === "selected")) {
            setModalOpen(true);
        } else {
            setModalOpen(false);
        }
    }, [selectedDate, selectedTime, seats]);

    function generateSeats(): Seat[] {
        const rows = ["G", "F", "E", "D", "C", "B", "A"];
        const seatCount = [6, 8, 10, 12, 12, 12, 12];
        const seats: Seat[] = [];

        for (let i = 0; i < rows.length; i++) {
            for (let number = 1; number <= seatCount[i]; number++) {
                const status: "available" | "booked" | "selected" = Math.random() > 0.7 ? "booked" : "available";
                seats.push({
                    row: rows[i],
                    number,
                    price: 24,
                    status,
                });
            }
        }
        return seats;
    }

    const handleDateClick = (date: number) => {
        setSelectedDate(date);
    };

    const handleTimeClick = (time: string) => {
        setSelectedTime(time);
    };

    const handleSeatClick = (clickedSeat: Seat) => {
        setSeats(
            seats.map((seat) => {
                if (seat.row === clickedSeat.row && seat.number === clickedSeat.number) {
                    if (seat.status === "available") {
                        return { ...seat, status: "selected" };
                    } else if (seat.status === "selected") {
                        return { ...seat, status: "available" };
                    }
                }
                return seat;
            }),
        );
    };

    const handleCancelSeat = (seatToCancel: Seat) => {
        setSeats(
            seats.map((seat) => {
                if (seat.row === seatToCancel.row && seat.number === seatToCancel.number) {
                    return { ...seat, status: "available" };
                }
                return seat;
            }),
        );
    };

    const selectedSeats = seats.filter((seat) => seat.status === "selected");

    const rows = ["G", "F", "E", "D", "C", "B", "A"];
    const seatCount = [6, 8, 10, 12, 12, 12, 12];

    return (
        <ThemeProvider theme={theme ? lightTheme : darkTheme}>
            <div className='order__container'>
                <Navbar />
                <div className='order'>
                    <div className='order__background'>
                        <div className='order__background__spirited'>
                            <div>Spirited away</div>
                            <div>1 h. 18 m.</div>
                        </div>
                    </div>

                    <div className='order__right'>
                        <div className='order__right__content'>
                            <div className='order__right__content--date'>
                                <div>Date</div>
                                <div className='order__right__content__selection--date'>
                                    {arrDate.map((date) => (
                                        <button
                                            key={date}
                                            onClick={() => handleDateClick(date)}
                                            className={`order__right__content__selection-button ${
                                                selectedDate == date ? "order__right__content__selection-button--selected" : ""
                                            }`}
                                        >
                                            {date}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className='order__right__content--time'>
                                <div>Time</div>
                                <div className='order__right__content__selection--time'>
                                    {arrTime.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => handleTimeClick(time)}
                                            className={`order__right__content__selection-button ${
                                                selectedTime === time ? "order__right__content__selection-button--selected" : ""
                                            }`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className='order__right__content-line'>
                                <img src='../../../src/assets/imgs/order/line.png' alt='line' />
                            </div>

                            <div className='order__right__content__seats'>
                                {rows.map((row, rowIndex) => {
                                    const seatRow = seats.filter((seat) => seat.row === row);
                                    const emptySeatsBefore = Math.floor((12 - seatCount[rowIndex]) / 2);
                                    const emptySeatsAfter = 12 - seatCount[rowIndex] - emptySeatsBefore;

                                    return (
                                        <React.Fragment key={row}>
                                            <div className='order__right__content__seats-row-label-left'>{row}</div>
                                            {Array.from({ length: emptySeatsBefore }).map((_, idx) => (
                                                <div key={`${row}-empty-before-${idx}`} className='order__right__content__seats-placeholder' />
                                            ))}
                                            {seatRow.map((seat) => (
                                                <div
                                                    key={`${seat.row}-${seat.number}`}
                                                    onClick={() => handleSeatClick(seat)}
                                                    className={`order__right__content__seats-seat order__right__content__seats-seat--${seat.status}`}
                                                />
                                            ))}
                                            {Array.from({ length: emptySeatsAfter }).map((_, idx) => (
                                                <div key={`${row}-empty-after-${idx}`} className='order__right__content__seats-placeholder' />
                                            ))}
                                            <div className='order__right__content__seats-row-label-right'>{row}</div>
                                        </React.Fragment>
                                    );
                                })}
                            </div>

                            <div className='order__right__content-status'>
                                <div className='order__right__content-status--available'>
                                    <span></span>
                                    <span> Available</span>
                                </div>
                                <div className='order__right__content-status--booked'>
                                    <span></span>
                                    <span> Booked</span>
                                </div>
                                <div className='order__right__content-status--selected'>
                                    <span></span>
                                    <span> Selected</span>
                                </div>
                            </div>

                            {modalOpen && <ModalSeat selectedSeats={selectedSeats} handleCancelSeat={handleCancelSeat} />}
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Order;
