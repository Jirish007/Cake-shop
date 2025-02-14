// filepath: /c:/Users/giris/Documents/Coding projects/Frontend developer/Easy bake/src/components/BankingDetails.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './stylings/banking.css';

function BankingDetails() {
    const location = useLocation();
    const { totalPrice } = location.state || { totalPrice: 0 }; // Receive total price from state

    const [formData, setFormData] = useState({
        accountName: '',
        bankName: '',
        accountNumber: '',
        branchCode: '',
        swiftCode: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/banking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...formData, totalPrice })
            });
            if (response.ok) {
                alert("Banking details submitted successfully!");
            } else {
                alert("Failed to submit banking details.");
            }
        } catch (error) {
            console.error("Error submitting banking details:", error);
            alert("Error submitting banking details.");
        }
    };

    return (
        <div className='banking_body'>
            <div className="banking-form-container">
                <h2>Checkout</h2>
                <h3>Total Price: R{totalPrice}</h3> {/* Display the total price */}
                <div className="banking-form">
                    <h3>Enter Your Banking Details</h3>
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            Account Name:
                            <input type="text" name="accountName" value={formData.accountName} onChange={handleInputChange} required />
                        </label>
                        <br />
                        <label>
                            Bank Name:
                            <input type="text" name="bankName" value={formData.bankName} onChange={handleInputChange} required />
                        </label>
                        <br />
                        <label>
                            Account Number:
                            <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange} required />
                        </label>
                        <br />
                        <label>
                            Branch Code:
                            <input type="text" name="branchCode" value={formData.branchCode} onChange={handleInputChange} required />
                        </label>
                        <br />
                        <label>
                            SWIFT Code:
                            <input type="text" name="swiftCode" value={formData.swiftCode} onChange={handleInputChange} required />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default BankingDetails;
