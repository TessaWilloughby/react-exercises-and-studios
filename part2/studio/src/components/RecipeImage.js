function RecipeImage(props) {

  let { name, recipeImage } = props.recipe;
   return <img src={recipeImage} alt={name} className="recipeImage" />;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 