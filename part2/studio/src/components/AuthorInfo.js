function AuthorInfo(props) {

  let { author, authorImage, website } = props.recipe;

  const RecipeAuthor = () => <div>{author}</div>;

  const RecipeAuthorImage = () => {
    return (
      <div>
        <img src={authorImage} alt={author} className="authorImage" />
      </div>
    )
  };

  const RecipeWebsite = () => {
    return <a href={website}>View Recipe on Website</a>;
  }

  return (
    <div>
      <RecipeAuthorImage />
      <RecipeAuthor />
      <RecipeWebsite />
    </div>
  );
}
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 