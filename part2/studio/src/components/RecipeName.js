function RecipeName(props) {
  let { name } = props.recipe;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}


export default RecipeName;

//import return the name of the recipe as a level 1 header