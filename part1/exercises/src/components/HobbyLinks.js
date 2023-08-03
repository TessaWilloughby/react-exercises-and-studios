import React from 'react';
import classes from './HobbyLinks.module.css';

class HobbyLinks extends React.Component {
   render() {
      const hobbyLinks = ["https://www.orangetheory.com/en-us", "https://www.goodreads.com/user/show/131814157-tessa"];
      return (
      <div>
          <h3 className= {classes.hobbyHeading}>My Hobbies</h3>
          <p><a className= {classes.hobbyText} href= {hobbyLinks[0]}>OrangeTheory</a></p>
          <p><a className= {classes.hobbyText} href = {hobbyLinks[1]}>GoodReads</a></p>
      </div>
      );
   }
}

export default HobbyLinks;