const RecipeAuthor = () => {
   let authorLink = "https://www.allrecipes.com/cook/foodwisheswithchefjohn";
   let authorPhoto = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcam-image-store.accountservices.meredithcorp.io%2F3e37d7022004230dbf6ec4b925dc181b5dcf1bfd&w=320&h=320&c=sc&poi=face&q=60&orient=true";
   let authorName = "Chef John";

   return (
      <div>
         <img src={authorPhoto} alt = "Chef John" style={{objectFit: "contain", borderRadius: "50%"}} width="200px" />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["tequila", "triple sec", "lime", "salt", "ice"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>The Perfect Margarita</h1>
            <p>This margarita recipe is created with the perfect ratio of white tequila, high-quality triple sec, and freshly squeezed lime juice for the best-tasting margarita every time.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.allrecipes.com/thmb/UU6G_Ols8yOG5NjRoVJuouhn2FQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/264606-the-perfect-margarita-DDMFS-4x3-cc94f83d87ff4ba0843056396da3ab00.jpg" alt="Margarita with a salty rim" className="imageUpdates" height="450px"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}