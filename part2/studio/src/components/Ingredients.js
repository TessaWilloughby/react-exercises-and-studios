function IngredientList(props) {

  let { ingredients } = props.recipe;
  const ingredientsListItems = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });

   return (
    <div>
      {ingredientsListItems}
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 