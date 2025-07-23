import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Booking = () => {
  const [startDate, setStartDate] = useState(null);
  const [name, setName] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate && name) {
      setSubmittedData({
        date: startDate.toLocaleDateString(),
        month: startDate.toLocaleString('default', { month: 'long' }),
        year: startDate.getFullYear(),
        name: name
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Booking Details</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Date Picker */}
            <div className="mb-3">
              <label className="form-label">Select Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                className="form-control"
                placeholderText="Click to show calendar"
                dateFormat="MMMM d, yyyy"
                showPopperArrow={false}
                isClearable
              />
            </div>

            {/* Name Field */}
            <div className="mb-4">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="btn btn-primary w-100"
              disabled={!startDate || !name}
            >
              Confirm Booking
            </button>
          </form>

          {/* Display Submitted Data */}
          {submittedData && (
            <div className="mt-4 p-3 bg-light rounded">
              <h4>Booking Confirmed!</h4>
              <p><strong>Name:</strong> {submittedData.name}</p>
              <p><strong>Date:</strong> {submittedData.date}</p>
              <p><strong>Month:</strong> {submittedData.month}</p>
              <p><strong>Year:</strong> {submittedData.year}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;



