import React from 'react';
import App from '../App';

const Card = () => {
  let obj = [
    {
      id: 1,
      name: 'hasnain',
      age:18,
      institute: "Adam Jee",
      isApproved: true,
      category: "medium"
    },
    {
      id: 2,
      name: 'Adnan',
      age:18,
      institute: "Adam Jee",
      isApproved: true,
      category: "high"
    },
    {
      id: 3,
      name: 'Zeeshan',
      age:18,
      institute: "Adam Jee",
      isApproved: true,
      category: "best"
    },
    {
      id: 4,
      name: 'Ali',
      age:20,
      institute: "Zaffar",
      isApproved: true,
      category: "medium"
    },
    {
      id: 5,
      name: 'Umar',
      age:24,
      institute: "Aptech",
      isApproved: true,
      category: "best"
    },
    {
      id: 6,
      name: 'Talha',
      age:26,
      institute: "Adam Jee",
      isApproved: true,
      category: "low"
    },
  ]

  return (
    <div>
        <App object={obj.map((x,i) => {
            return (
                <div key={x.id}>
                    <p>{x.name}</p>
                </div>
            )
        })} />
    </div>
  )
}

export default Card;
