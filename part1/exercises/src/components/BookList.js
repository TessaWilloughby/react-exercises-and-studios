import React from 'react';
import classes from './BookList.module.css';

class BookList extends React.Component {
   render() {
      let pageTitle = "Lastest Book Releases";
      let book1 = "https://prodimage.images-bn.com/pimages/9780593438244_p0_v5_s192x300.jpg";
      let book2 = "https://prodimage.images-bn.com/pimages/9780063359567_p0_v3_s192x300.jpg";
      let book3 = "https://prodimage.images-bn.com/pimages/9781982188283_p0_v3_s192x300.jpg";

      return (
      <div>
         <h3 className= {classes.bookHeading}>{pageTitle}</h3>
         <img className= {classes.bookText} src={book1} alt="The Weaver and the Witch Queen by Genevieve Gornichec" />
         <img className= {classes.bookText} src={book2} alt="Tom Lake by Ann Patchett" />
         <img className= {classes.bookText} src={book3} alt="Blood Orange Night: A Memoir of Insomnia, Motherhood, and Benzos by Melissa Bond" />
      </div>      
      );
   }
}

export default BookList;