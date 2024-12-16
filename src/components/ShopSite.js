import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import shop1 from './shopping cakes/cake 12.jpg';
import shop2 from './shopping cakes/cake 15.jpg';
import shop3 from './shopping cakes/cake 19.jpg';
import shop4 from './shopping cakes/cake 7.jpg';

import Shoplink from "./Homelink";
import './stylings/shopping.css';

function ShopSite() {
    let [increment, setIncrement] = useState(0);
    let [quantity, setQuantity] = useState({});
    let [toggle, setToggle] = useState(false);
    let [cartItems, setCartItems] = useState([]);
    let [ProductDetails1, setProductDetails1] = useState([
        {id: 1, photo: shop1, details: "Strawberry cake", price: 200},
        {id: 2, photo: shop2, details: "Chocolate cake", price: 250},
        {id: 3, photo: shop3, details: "Black forest cake", price: 100},
        {id: 4, photo: shop4, details: "Lemon cake", price: 87}
    ]);

    const navigate = useNavigate();

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const savedQuantity = JSON.parse(localStorage.getItem("quantity")) || {};
        const savedIncrement = parseInt(localStorage.getItem("increment"), 10) || 0;

        setCartItems(savedCartItems);
        setQuantity(savedQuantity);
        setIncrement(savedIncrement);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        localStorage.setItem("quantity", JSON.stringify(quantity));
        localStorage.setItem("increment", increment);
    }, [cartItems, quantity, increment]);

    const addToCart = (id, photo, details, price) => {
        setCartItems(prevItems => {
            if (prevItems.some(item => item.id === id)) {
                alert("This item is already in the cart");
                return prevItems;
            }
            const newItems = [...prevItems, { id, photo, details, price }];
            setIncrement(newItems.length);
            return newItems;
        });

        setQuantity(prevQuantity => ({
            ...prevQuantity,
            [id]: (prevQuantity[id] || 0) + 1
        }));
    };

    const increaseNumberOfItems = id => {
        setQuantity(prevQuantity => ({
            ...prevQuantity,
            [id]: (prevQuantity[id] || 0) + 1
        }));
    };

    const decreaseNumberOfItems = id => {
        if (quantity[id] > 0) {
            setQuantity(prevQuantity => ({
                ...prevQuantity,
                [id]: prevQuantity[id] - 1
            }));
        }
    };

    const clickToggle = () => {
        if (increment === 0) {
            setToggle(false);
            alert("CART EMPTY, please add to cart first");
        } else {
            setToggle(!toggle);
        }
    };

    const removeItem = id => {
        setIncrement(prevIncrement => prevIncrement - 1);
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
        setQuantity(prevQuantity => ({
            ...prevQuantity,
            [id]: 0
        }));
    };

    const handleCheckout = event => {
        event.preventDefault();
        const totalPrice = calculateTotalPrice();
        navigate("/checkout", { state: { totalPrice } });
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.price * (quantity[item.id] || 0));
        }, 0);
    };

    const mapped = cartItems.map(item => (
        <div className="em" key={item.id}>
            <section>
                <p onClick={() => removeItem(item.id)}><font color="red" className="remove_p">Remove</font></p>
            </section>
            <section>
                <p><img src={item.photo} alt={item.details} /></p>
                <p>{item.details}</p>
                <p>R{item.price}</p>
                <button onClick={() => decreaseNumberOfItems(item.id)}>-</button>
                {quantity[item.id]}
                <button onClick={() => increaseNumberOfItems(item.id)}>+</button>
            </section>
        </div>
    ));

    const subvalue = "CHECKOUT";
    const buttonExtra = <form onSubmit={handleCheckout}><input type="submit" value={subvalue} /></form>;

    return (
        <div className="shop_cover">
            <div className="navigation">

                <Shoplink />
                <h3>
                    <span className="material-symbols-outlined gradient-icon" id="shopping_bag" onClick={clickToggle}>
                        shopping_bag
                    </span><font color="white">{increment}</font>
                </h3>
            </div>
            <div className={`insideCart ${toggle ? 'gradient-background' : ''}`}>
                <div className="outcast">
                    {toggle ? mapped : <></>}
                    <div className={toggle ? "em" : "remove_button"}>
                        {increment === 0 ? "" : buttonExtra}
                        <h3 style={{ color: "chocolate" }}>Total Price: R{calculateTotalPrice()}</h3>
                    </div>
                </div>
            </div>
            <div className="product_cover">
                <div className="product_container">
                    {ProductDetails1.map(product1 => (
                        <div className="product_card1" key={product1.id}>
                            <img src={product1.photo} alt={product1.details} />
                            <p>{product1.details}</p>
                            <p>R{product1.price}</p>
                            <button
                                onClick={() => addToCart(product1.id, product1.photo, product1.details, product1.price)}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    ))}
                </div>
                <h2>More cakes coming soon...</h2>
            </div>
        </div>
    );
}

export default ShopSite;
