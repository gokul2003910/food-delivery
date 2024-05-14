import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    const handleItemClick = (itemId) => {
        // Handle item click logic here
        console.log(`Item clicked: ${itemId}`);
    };

    return (
        <div>
            <div className="food-display" id='food-display'>
                <h2>Top dishes near you</h2>
                <div className="food-display-list">
                    {food_list.map((item) => (
                        <FoodItem
                            key={item._id} // Add a unique key prop
                            id={item._id} // Assuming _id is the unique identifier for items
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            handleItemClick={handleItemClick} // Pass handleItemClick as a prop
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FoodDisplay;
