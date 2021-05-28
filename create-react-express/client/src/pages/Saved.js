import React, {useEffect} from "react";
import Card from "../components/Card";
import CardContainer from "../components/CardContainer";
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Footer from "../components/Footer"




const Saved = props => {


    


    return(
        <div>
            <Nav/>
            <Hero/>
            <CardContainer>
                <Card
                //  id={book.id}
                //  key={book.id}
                //  link={book.volumeInfo.infoLink}
                //  title={book.volumeInfo.title}
                //  author={book.volumeInfo.authors[0]}
                //  image={book.volumeInfo.imageLinks.thumbnail}
                //  description={book.volumeInfo.description}
                />
            </CardContainer>
            <Footer/>




        </div>


    );


}

export default Saved;
