import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ScannerImage from "../assets/payment.jpg";
import '../styles/buy.css';
import Swal from 'sweetalert2';

const Contact = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        mobile: "",
        yearOfStudy: "",
        college: "",
        branch: "",
        upiId: "",
        transactionId: "",
        transactionDate: new Date(),
        transactionTime: "",
    });

    let name, value;

    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    const handleDateChange = (date) => {
        setUserData({ ...userData, transactionDate: date });
    };

    const submitData = async (event) => {
        event.preventDefault();
        const { name, email, mobile, yearOfStudy, college, branch, upiId, transactionId, transactionDate, transactionTime } = userData;

        if (name && email && mobile && yearOfStudy && college && branch && upiId && transactionId && transactionDate && transactionTime) {
            const res = await fetch(
                "https://stdsajunction-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        mobile,
                        yearOfStudy,
                        college,
                        branch,
                        upiId,
                        transactionId,
                        transactionDate,
                        transactionTime,
                    }),
                }
            );

            if (res) {
                setUserData({
                    name: "",
                    email: "",
                    mobile: "",
                    yearOfStudy: "",
                    college: "",
                    branch: "",
                    upiId: "",
                    transactionId: "",
                    transactionDate: new Date(),
                    transactionTime: "",
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Data Stored',
                    text: 'Your data is sent successfully. For further verification, please send a screenshot or payment details of your transaction to our WhatsApp.',
                    showConfirmButton: true,
                    // timer: 5000, // Close after 5 seconds
                }).then(() => {
                    // Redirect to WhatsApp when the alert is closed
                    window.location.href = 'https://api.whatsapp.com/send?phone=8112263958';
                });

            }
            else {
                // Use SweetAlert2 for a custom and designful alert
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill all the data!',
                });
            }
        } else {
            // Use SweetAlert2 for a custom and designful alert
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the data!',
            });
        }
    };

    return (
        <>
            <div className="buy-course-container">
                <div className="payment-details">
                    <h2>Payment Details</h2>
                    <p>Account Name: Kapil Vaishnav</p>
                    <p>UPI ID: kapilvaishnav160@oksbi</p>
                    <p>Transaction Amount: ₹ 2000</p>
                    <img src={ScannerImage} alt="Payment Scanner" />
                </div>
                <h2>Buy Course</h2>
                <div className="payment-instructions">
                    <p>
                        To enroll in the course, make the payment of ₹ 2000 as the course fees using the QR code or UPI ID mentioned above.
                        After completing the payment, fill in the form below with accurate details.
                        Additionally, submit the payment screenshot or details on WhatsApp for verification.
                    </p>
                </div>
                <form method="POST">
                    <label>
                        Name:
                        <input type="text" name="name" value={userData.name} placeholder="Enter Your Name" onChange={postUserData} required />
                    </label>
                    <label>
                        Mobile Number:
                        <input type="number" name="mobile" value={userData.mobile} placeholder="Enter Your WhatsApp Number" onChange={postUserData} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={userData.email} placeholder="Enter Your Email" onChange={postUserData} required />
                    </label>
                    <label>
                        Year of Study:
                        <input type="number" name="yearOfStudy" value={userData.yearOfStudy} placeholder="Enter Your Year of Study" onChange={postUserData} required />
                    </label>
                    <label>
                        College:
                        <input type="text" name="college" value={userData.college} placeholder="Enter Your College Name" onChange={postUserData} required />
                    </label>
                    <label>
                        Branch:
                        <input type="text" name="branch" value={userData.branch} placeholder="Enter Your Branch Name" onChange={postUserData} required />
                    </label>
                    <label>
                        UPI ID:
                        <input type="text" name="upiId" value={userData.upiId} placeholder="Enter Your UPI ID" onChange={postUserData} required />
                    </label>
                    <label>
                        Transaction ID:
                        <input type="text" name="transactionId" value={userData.transactionId} placeholder="Enter Your Transaction ID" onChange={postUserData} required />
                    </label>
                    <label>
                        Date of Transaction:
                        <DatePicker
                            selected={userData.transactionDate}
                            onChange={handleDateChange}
                            placeholderText="Select Date"
                        />
                    </label>
                    <label>
                        Time of Transaction:
                        <input type="time" name="transactionTime" value={userData.transactionTime} placeholder="Enter Your Transaction Time : 14:00" onChange={postUserData} required />
                    </label>
                    <button
                        type="submit"
                        className="btn btn-style w-100"
                        onClick={submitData}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );

};
export default Contact;