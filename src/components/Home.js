import React,{useEffect,useState} from "react";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import Axios from 'axios';
import "../styles/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import home from '../styles/home.png'
import fav from '../styles/fav.png'
import login from '../styles/login.png'
function Home(){
    const [movieData,setMovieData] = useState([]);
    //const [home,setHome]  = useState("flex");
    const [temp,setTemp] = useState(0);
    const [query,setQuery] = useState("");
    const [check,setCheck] = useState("");
    const [favrt,setFav] = useState([]);
    useEffect(()=>{
        const fetchdata = async() =>{
            Axios.get('http://localhost:3001/').then(async (response)=>{
                response.data.map((movie)=>{
                    movieData.push(movie)
                })
                console.log(movieData);
                setTemp(1);
            }).catch(
                function(error){console.log("error");}
            )
        }
        fetchdata();
    },[])
    const like = (nm)=>{
        favrt.push(nm);
        console.log(favrt);
    }
    const switchFav =()=>{
        //setHome("none");
    }
    return(
        <>
        <div id="header">
            <span>MOVIES</span>
            
            <a id="login"><img src={login}/></a>
            <div id="nav">
                <a><img src={home}/></a>
                <a onClick={like}><img src={fav}/></a>
                
            </div>
        </div>
        <div id="body">
        
         <Container fluid >
            <Row>
                {movieData.map((movieData, k) => (
                    
                    <Col>
                        <Card className="card">
                        <Card.Img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} />

                            <Card.Body>
                                
                                <Card.Title>{movieData.name}</Card.Title>
                                <Card.Text>id : {movieData.id}</Card.Text>
                                <Card.Text>{movieData.overview}</Card.Text>
                                <Card.Text>Releade date : {movieData.release_date}</Card.Text>
                                <Card.Text>Rating : {movieData.vote_average}</Card.Text>
                                <Button onClick={()=>like(movieData.name)}>Like</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container> 

        </div>
        </>
    );
}
export default Home;