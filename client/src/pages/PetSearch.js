// ================THIS PAGE DISPLAYS USER'S SAVED ALBUMS, SHOULD REDIRECT HERE AFTER LOGGING IN=========
import {React} from 'react';
import { Container } from 'react-bootstrap';
import { Formik, Field, Form } from "formik";
// import { getMe, deleteAlbum } from '../utils/API';
// import Auth from '../utils/auth';
// import loading from '../loading.gif'
// import Gallery from 'react-photo-gallery';
// import { removeImageId } from '../utils/localStorage';

import '../App.css';

function PetSearch() {

 
//  const [searchedPets, searchedPets] = useState([]);

//  const [searchInput, setSearchInput] = useState('');
  return (
    <div className = 'mainContainer'>
    <Container> 
    <div className="Form">
      <h1>Next Stop a new best friend!</h1>
      <Formik
        initialValues={{ 
        type: "",
        breed: "",
        gender: "",
        size: "",
        zipcode: "",
        childSafe: "",
        dogSafe: "",
        catSafe: "",
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {/* request params, animal type, breed, zip code distance from, good_children checkbox, good cat checkbox, good dog checkbox, gender checkbox, size check, limit */}
        <Form>
        <h1>Please select the trait for your new best friend!</h1>
        <h1>    </h1>
        <label>Please input the type of animal you are interested in, leave blank to search all fuzzy and scaly friends!<Field name="type" type="text" /></label>
        <h1>    </h1>
        <label>Please input a prefered breed of pet(if applicable)<Field name="breed" type="text" /></label>
        <h1>    </h1>
        <label>Please input a prefered pet gender(if applicable)<Field name="gender" type="text" /></label>
        <h1>    </h1>
        <label>Please enter your zip code so we can see who is in your neighborhood!<Field name="zipCode" type="text" placeholder="required" /></label>
        <h1>    </h1>

          <div id="checkbox-group">Please check below for other members of your family so we can select the best pal for everyone.</div>
          <div role="group" aria-labelledby="checkbox-group">
           <label><Field name="dogSafe" type="checkbox" />Dogs</label>
            <label><Field name="catSafe" type="checkbox" />Cats</label>
            <label><Field name="childSafe" type="checkbox" />Small Children</label>
    
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
      </Container>
    </div>
  );
}
// ReactDOM.render(<PetSearch />, document.getElementById('body'))
export default PetSearch;