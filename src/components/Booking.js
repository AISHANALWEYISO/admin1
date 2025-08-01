// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const backendBaseURL = "http://127.0.0.1:5000"; // Your Flask backend URL

// const servicesList = [
//   "Crop Management",
//   "Soil Analysis and Management",
//   "Precision Agriculture",
//   "Sustainability Consulting",
//   "Farm Management",
//   "Irrigation Management",
//   "Pest and Disease Management",
//   "Farmer training workshop",
//   "Market Analysis and Access",
//   "Capacity Building and Training"
// ];

// const BookingForm = () => {
//   const [form, setForm] = useState({
//     name: "",
//     contact: "",
//     service: "",
//     date: ""
//   });
//   const [showCodeInput, setShowCodeInput] = useState(false);
//   const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
//   const [bookingId, setBookingId] = useState(null);
//   const [success, setSuccess] = useState("");
//   const [error, setError] = useState("");
//   const [countdown, setCountdown] = useState(60);
//   const [codeSentTo,  ] = useState("");

//   useEffect(() => {
//     if (showCodeInput && countdown > 0) {
//       const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [showCodeInput, countdown]);

//   const handleInputChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleCodeChange = (index, value) => {
//     if (value.length > 1) return;
//     const newCode = [...verificationCode];
//     newCode[index] = value;
//     setVerificationCode(newCode);

//     if (value && index < 5) {
//       const nextInput = document.getElementById(`code-${index + 1}`);
//       if (nextInput) nextInput.focus();
//     }
//   };

//  const handleBookNow = async () => {
//   setError("");
//   setSuccess("");
//   if (!form.service || !form.date) {
//     setError("Please select a service and date.");
//     return;
//   }

// //   try {
// //     const token = localStorage.getItem("token");
// //     const res = await axios.post(
// //       `${backendBaseURL}/api/v1/bookings/create`,
// //       {
// //         service_name: form.service,
// //         booking_date: form.date,
// //       },
// //       {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     );

// //     setSuccess("Booking created successfully!");
// //     setForm({ name: "", contact: "", service: "", date: "" }); // reset form
// //   } catch (err) {
// //     setError(err?.response?.data?.error || "Booking failed.");
// //   }
// // };

//     try {
//       const token = localStorage.getItem("token");

//       await axios.post(
//         `${backendBaseURL}/api/v1/bookings/create`,
//         {
//           service_name: form.service,
//           booking_date: form.date,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       setSuccess("Booking created successfully!");
//       setForm({ name: "", contact: "", service: "", date: "" }); // Reset form
//     } catch (err) {
//       setError(err?.response?.data?.error || "Booking failed.");
//     }



//   const handleConfirmBooking = async () => {
//     setError("");
//     setSuccess("");
//     const code = verificationCode.join("");
//     if (code.length < 6) {
//       setError("Please enter the 6-digit verification code.");
//       return;
//     }

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("You must be logged in to verify booking.");
//         return;
//       }

//       const res = await axios.post(
//         `${backendBaseURL}/api/v1/bookings/verify/${bookingId}`,
//         { verification_code: code },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json"
//           }
//         }
//       );

//       if (res.data.message === "Booking verified successfully") {
//         setSuccess("✅ Booking confirmed successfully!");
//         setShowCodeInput(false);
//         setVerificationCode(["", "", "", "", "", ""]);
//         setBookingId(null);
//         setForm({ name: "", contact: "", service: "", date: "" });
//       }
//     } catch (error) {
//       setError(error?.response?.data?.error || "❌ Failed to confirm booking.");
//     }
//   };

//   const handleResend = () => {
//     setCountdown(60);
//     handleBookNow();
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: "auto", padding: 20, background: "#E7F0D6", borderRadius: 8 }}>
//       <h2 style={{ color: "#366000", textAlign: "center" }}>Book a Service</h2>

//       {success && <div style={{ color: "green", marginBottom: 16, textAlign: "center" }}>{success}</div>}
//       {error && <div style={{ color: "red", marginBottom: 16, textAlign: "center" }}>{error}</div>}

//       {!showCodeInput ? (
//         <>
//           <label style={{ color: "#366000" }}>Full Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleInputChange}
//             placeholder="Enter your full name"
//             style={{ width: "100%", padding: 8, marginBottom: 12 }}
//           />
//           <label style={{ color: "#366000" }}>Email or Phone</label>
//           <input
//             type="text"
//             name="contact"
//             value={form.contact}
//             onChange={handleInputChange}
//             placeholder="Enter your email or phone"
//             style={{ width: "100%", padding: 8, marginBottom: 12 }}
//           />
//           <label style={{ color: "#366000" }}>Select Service</label>
//           <select
//             name="service"
//             value={form.service}
//             onChange={handleInputChange}
//             style={{ width: "100%", padding: 8, marginBottom: 12 }}
//           >
//             <option value="">-- Choose a service --</option>
//             {servicesList.map((service, i) => (
//               <option key={i} value={service}>
//                 {service}
//               </option>
//             ))}
//           </select>
//           <label style={{ color: "#366000" }}>Preferred Date</label>
//           <input
//             type="date"
//             name="date"
//             value={form.date}
//             onChange={handleInputChange}
//             style={{ width: "100%", padding: 8, marginBottom: 16 }}
//           />
//           <button
//             onClick={handleBookNow}
//             style={{ width: "100%", padding: 12, backgroundColor: "#366000", color: "white", border: "none", borderRadius: 6 }}
//           >
//             Book Now
//           </button>
//         </>
//       ) : (
//         <div style={{ textAlign: "center", backgroundColor: "#f9fff0", padding: 20, borderRadius: 8 }}>
//           <h3 style={{ color: "#366000" }}>Enter Verification Code</h3>
//           <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 12 }}>
//             {verificationCode.map((digit, i) => (
//               <input
//                 key={i}
//                 id={`code-${i}`}
//                 type="text"
//                 maxLength={1}
//                 value={digit}
//                 onChange={(e) => handleCodeChange(i, e.target.value)}
//                 style={{ width: 40, height: 40, fontSize: 24, textAlign: "center", borderRadius: 6, border: "1px solid #366000" }}
//               />
//             ))}
//           </div>
//           <p style={{ color: "#366000", marginBottom: 12 }}>
//             Code sent via <strong>{codeSentTo}</strong>.{" "}
//             {countdown > 0 ? (
//               <>Expires in {countdown} seconds</>
//             ) : (
//               <button
//                 onClick={handleResend}
//                 style={{ background: "none", border: "none", color: "#366000", cursor: "pointer", textDecoration: "underline" }}
//               >
//                 Resend Code
//               </button>
//             )}
//           </p>
//           <button
//             onClick={handleConfirmBooking}
//             style={{ width: "100%", padding: 12, backgroundColor: "#274800", color: "white", border: "none", borderRadius: 6 }}
//           >
//             Confirm Booking
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingForm;

import React, { useState, useEffect } from "react";
import axios from "axios";

const backendBaseURL = "http://127.0.0.1:5000"; // Your Flask backend URL

const servicesList = [
  "Crop Management",
  "Soil Analysis and Management",
  "Precision Agriculture",
  "Sustainability Consulting",
  "Farm Management",
  "Irrigation Management",
  "Pest and Disease Management",
  "Farmer training workshop",
  "Market Analysis and Access",
  "Capacity Building and Training"
];

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "",
    date: ""
  });
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
  const [bookingId, setBookingId] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    if (showCodeInput && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [showCodeInput, countdown]);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCodeChange = (index, value) => {
    if (value.length > 1) return;
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleBookNow = async () => {
  setError("");
  setSuccess("");

  if (!form.service || !form.date || !form.name || !form.contact) {
    setError("Please fill in all fields.");
    return;
  }

  try {
    const token = localStorage.getItem("token");

    await axios.post(
      `${backendBaseURL}/api/v1/bookings/create`,
      {
        name: form.name,
        contact: form.contact,
        service_name: form.service,
        booking_date: form.date,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    setSuccess("Booking created successfully!");
    setForm({ name: "", contact: "", service: "", date: "" }); // Reset form
  } catch (err) {
    setError(err?.response?.data?.error || "Booking failed.");
  }
};


  const handleConfirmBooking = async () => {
    setError("");
    setSuccess("");

    const code = verificationCode.join("");
    if (code.length < 6) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${backendBaseURL}/api/v1/bookings/verify/${bookingId}`,
        { verification_code: code },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      );

      if (response.data.message === "Booking verified successfully") {
        setSuccess("✅ Booking confirmed successfully!");
        setShowCodeInput(false);
        setVerificationCode(["", "", "", "", "", ""]);
        setBookingId(null);
        setForm({ name: "", contact: "", service: "", date: "" });
      }
    } catch (error) {
      setError(error?.response?.data?.error || "❌ Failed to confirm booking.");
    }
  };

  const handleResend = () => {
    setCountdown(60);
    handleBookNow();
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20, background: "#E7F0D6", borderRadius: 8 }}>
      <h2 style={{ color: "#366000", textAlign: "center" }}>Book a Service</h2>

      {success && <div style={{ color: "green", marginBottom: 16, textAlign: "center" }}>{success}</div>}
      {error && <div style={{ color: "red", marginBottom: 16, textAlign: "center" }}>{error}</div>}

      {!showCodeInput ? (
        <>
          <label style={{ color: "#366000" }}>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
          />
          <label style={{ color: "#366000" }}>Email or Phone</label>
          <input
            type="text"
            name="contact"
            value={form.contact}
            onChange={handleInputChange}
            placeholder="Enter your email or phone"
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
          />
          <label style={{ color: "#366000" }}>Select Service</label>
          <select
            name="service"
            value={form.service}
            onChange={handleInputChange}
            style={{ width: "100%", padding: 8, marginBottom: 12 }}
          >
            <option value="">-- Choose a service --</option>
            {servicesList.map((service, i) => (
              <option key={i} value={service}>
                {service}
              </option>
            ))}
          </select>
          <label style={{ color: "#366000" }}>Preferred Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleInputChange}
            style={{ width: "100%", padding: 8, marginBottom: 16 }}
          />
          <button
            onClick={handleBookNow}
            style={{ width: "100%", padding: 12, backgroundColor: "#366000", color: "white", border: "none", borderRadius: 6 }}
          >
            Book Now
          </button>
        </>
      ) : (
        <div style={{ textAlign: "center", backgroundColor: "#f9fff0", padding: 20, borderRadius: 8 }}>
          <h3 style={{ color: "#366000" }}>Enter Verification Code</h3>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 12 }}>
            {verificationCode.map((digit, i) => (
              <input
                key={i}
                id={`code-${i}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(i, e.target.value)}
                style={{ width: 40, height: 40, fontSize: 24, textAlign: "center", borderRadius: 6, border: "1px solid #366000" }}
              />
            ))}
          </div>
          <p style={{ color: "#366000", marginBottom: 12 }}>
            {countdown > 0 ? (
              <>Code expires in {countdown} seconds</>
            ) : (
              <button
                onClick={handleResend}
                style={{ background: "none", border: "none", color: "#366000", cursor: "pointer", textDecoration: "underline" }}
              >
                Resend Code
              </button>
            )}
          </p>
          <button
            onClick={handleConfirmBooking}
            style={{ width: "100%", padding: 12, backgroundColor: "#274800", color: "white", border: "none", borderRadius: 6 }}
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
