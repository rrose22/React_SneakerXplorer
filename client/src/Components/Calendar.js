import React, { useState } from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';


function Calendar() {
  const [date, setDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    setDate(date.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setDate(date.clone().add(1, 'month'));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const renderDays = () => {
    const startOfMonth = date.clone().startOf('month');
    const endOfMonth = date.clone().endOf('month');
    const days = [];

    let currentDay = startOfMonth.clone().subtract(1, 'day');

    while (currentDay.isBefore(endOfMonth, 'day')) {
      const day = currentDay.add(1, 'day').clone();
      days.push(
        <div
          onClick={() => handleDateClick(day)}
          key={day.format('YYYY-MM-DD')}
          className={`day ${selectedDate && selectedDate.isSame(day, 'day') ? 'selected' : ''}`}
        >
          {day.format('D')}
        </div>
      );
    }

    return days;
  };

  return (
    <div>
      <NavBar/>
      <div style={styles.calendar}>
        <div style={styles.header}>
          <button onClick={handlePrevMonth}>Prev</button>
          <h1>{date.format('MMMM YYYY')}</h1>
          <button onClick={handleNextMonth}>Next</button>
        </div>
        <div style={styles.days}>{renderDays()}</div>
        {selectedDate && (
          <DayEvents date={selectedDate} />
        )}
      </div>
    </div>
  );
}

function DayEvents({ date }) {
  const formattedDate = date.format('MMMM D, YYYY');

  // Mocked events data for demonstration
  const events = [
    { shoeName: 'Nike Air Max', imageURL: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bfc04b0f-32d9-48a9-b4b7-7acb7fbcb54b/air-max-90-shoes-cSlczl.png" },
    { shoeName: 'Adidas Ultra Boost', imageURL: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dfeaac2e2d8f46558e76af7f010bafe5_9366/Ultraboost_Light_Shoes_Black_HQ6339_01_standard.jpg" },
    { shoeName: 'New Balance 574', imageURL: "https://i.ebayimg.com/images/g/kmoAAOSwpFxkmaBm/s-l1200.webp" },
  ];

  return (
    <div style={styles.dayEvents}>
      <h2>Shoes Releasing on {formattedDate}</h2>
      {events.map((event, index) => (
        <div key={index}>
          <img src={event.imageURL} alt={event.shoeName} style={{ width: '50px', height: '50px' }} />
          <p>{event.shoeName}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  app: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  calendar: {
    width: '300px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  days: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '5px',
  },
  day: {
    padding: '10px',
    border: '1px solid #ccc',
    textAlign: 'center',
    cursor: 'pointer',
  },
  selected: {
    backgroundColor: 'lightblue',
  },
  dayEvents: {
    marginTop: '20px',
  },
};

export default Calendar