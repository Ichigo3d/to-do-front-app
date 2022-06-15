import React from 'react';

const CardList = (props) => {
    return (
        <div>
           <ul>{props.cardList.map(item =>
               <li key={item._id}>
                   {item.title}
               <button >Edite</button>
               <button onClick={() => props.updateCardStatus(item._id, item.status === false)} >Done</button>
               <button onClick={() => props.deleteCardById(item._id)}>Delete</button>
               </li>)}
           </ul>
        </div>
    );
};

export default CardList;