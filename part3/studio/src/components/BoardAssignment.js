import { useState } from 'react';

export default function BoardAssignment () {

   const [boardName, setBoardName] = useState('no boards yet');

   const boards = [
      {
         label: "End of Unit Ideas",
         value: "unitIdeas"
      },

      { 
         label: "End of Summer Party",
         value: "summerParty"
      }, 

      {
         label: "Cold Drinks",
         value: "coldDrinks"
      }
   ];

   let boardOptions = boards.map((board, index) => {
      return <option key={index} value={board.value}>{board.label}</option>
   });



   const handleChange = (event) => {
      setBoardName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boardOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}