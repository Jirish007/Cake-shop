// BankingDetails.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './stylings/banking.css'
function BankingDetails() {
    const location = useLocation();
    const { totalPrice } = location.state || { totalPrice: 0 }; // Receive total price from state

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        alert("Banking details submitted successfully!");
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
                        <input type="text" name="accountName" required />
                    </label>
                    <br />
                    <label>
                        Bank Name:
                        <input type="text" name="bankName" required />
                    </label>
                    <br />
                    <label>
                        Account Number:
                        <input type="text" name="accountNumber" required />
                    </label>
                    <br />
                    <label>
                        Branch Code:
                        <input type="text" name="branchCode" required />
                    </label>
                    <br />
                    <label>
                        SWIFT Code:
                        <input type="text" name="swiftCode" required />
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
