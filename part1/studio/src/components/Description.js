import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink = "https://feastandfarm.com/southern-cornbread-recipe/";
    let authorPhoto = "https://feastandfarm.com/wp-content/uploads/LR-Branding-Shots-1.jpg";
    let authorName = "Rachel Ballard";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "author photo" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>The Country Contessa</a> 
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render () {
      return (
        <div> 
            <div>
                <h1>Southern Cornbread Recipe</h1>
                <p>Southern cornbread is crispy outside, tender inside and ready for all of your favorite cold weather dishes.</p>
            </div>
            <RecipeAuthor />
        </div>
      );
    }
}

export default RecipeDescription;