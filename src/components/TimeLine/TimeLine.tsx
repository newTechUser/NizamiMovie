import { useState } from "react";
import "./timeLine.scss";
import { users } from "@/db/timeLine";

const years = [1940, 1950, 1970, 1980, 1990, 2000, 2010];

const Timeline = () => {
    const [selectedYear, setSelectedYear] = useState<number | null>(null);

    const sortedYears = users[0].years.sort((a, b) => a - b);
 
    const handleYearClick = (year: number) => {
        setSelectedYear(year);
    };

    const getLeftPosition = (index: number) => {
        return `${(index / (years.length - 1)) * 90}%`;
    };

    return (
        <div className='timeline'>
            <div className='timeline__line' />
            <div className='timeline__years'>
                {sortedYears.map((year, index) => (
                    <div
                        key={year}
                        className={`year-mark ${year === selectedYear ? "selected" : ""}`}
                        style={{ left: getLeftPosition(index) }}
                        onClick={() => handleYearClick(year)}
                    >
                        {year}
                    </div>
                ))}
                {selectedYear !== null && (
                    <div className='timeline__years__circle' style={{ left: getLeftPosition(users[0].years.indexOf(selectedYear)) }} />
                )}
            </div>
        </div>
    );
};

export default Timeline;
