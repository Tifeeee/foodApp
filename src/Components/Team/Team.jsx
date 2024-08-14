import React from 'react';
import Gates from './Images/pexels-godisable-jacob-226636-718978.jpg'
import Ruth from './Images/pexels-italo-melo-881954-2379004.jpg'
import Maya from './Images/pexels-kebs-visuals-742415-3992656.jpg'

const Team = () => {
  const allTeam = [
    { id:  "Micheal Gates",
      img: Ruth
    },
    { id: "Ruth Taylor" ,
      img: Gates

    },
    { id: "Maya Angelou" ,
      img: Maya

    }
  ];

  return (
    <>
        <h1 className='teamText'>TEAM</h1>
      <div className='teamContainer'>
        {allTeam.map((eachId) => (
          <div className="teamCard">
           <img src={eachId.img} alt="" />
            <p>{eachId.id}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
