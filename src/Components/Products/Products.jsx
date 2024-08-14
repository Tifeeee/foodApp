import React from 'react';
import salad from './Images/pexels-polina-tankilevitch-3872373.jpg'; 
import sandwich from './Images/pexels-erin-wang-385309-1647163.jpg'; 
import dessert from './Images/pexels-abhinavcoca-291528.jpg';
import smoothie from './Images/pexels-i-brahim-hakki-ucman-174353-3342301.jpg';
import burger from './Images/pexels-valeriya-1199958.jpg';
import pasta from './Images/pexels-enginakyurt-2347311.jpg';
import soup from './Images/pexels-pixabay-209540.jpg';
import roll from './Images/pexels-klaus-nielsen-6294366.jpg';



const Products = () => {
  const nairaSign = "\u20A6";
  const allFoods = [
    {
      foodImage: salad,
      foodName: "Salad",
      price: 30000
    },
    {
      foodImage: sandwich,
      foodName: "Sandwich",
      price: 15000
    },
    {
      foodImage: dessert,
      foodName: "Desserts",
      price: 25000
    },
    {
      foodImage: smoothie,
      foodName: "Smoothie",
      price: 20000
    },
    {
      foodImage: burger,
      foodName: "Veggie Burger",
      price: 12000
    },
    {
      foodImage: pasta,
      foodName: "Veggie Pasta",
      price: 18000
    },
    {
      foodImage: soup,
      foodName: "Vegetable Soup",
      price: 10000
    },
    {
      foodImage: roll,
      foodName: "Spring Roll",
      price: 8000
    },
  ];

  return (
    <>
    <h1 className='topC'>Top Categories</h1>
    <div className='cardContainer'>
      {allFoods.map((eachFood, index) => (
        <div key={index} className='card'>
          
            <div className='imgCard'>
              <img src={eachFood.foodImage} alt={eachFood.foodName} />
            </div>
          
          <h3 className='cardText'>{eachFood.foodName}</h3>
          <p className='priceName'>{nairaSign}{eachFood.price}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Products;
