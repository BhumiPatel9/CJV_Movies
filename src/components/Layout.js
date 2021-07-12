import React,{useState,useEffect} from 'react'
import Display from './Display';
import {Container,Row,Col} from 'react-bootstrap'

function Layout(props) {
    const [list, setList] = useState([]);
    useEffect(() => {
        const url= `http://localhost:3000/${props.url}`;
        const fetchData= async () =>{
            try{
                const response= await fetch(url);
                const json=await response.json();
                setList(json);
            }
            catch(err){
                console.log("Error");
            }
        }
        fetchData();
    }, [])


    return (
        <Container >
            <Row>
            <h2>{props.title}</h2>
        
            {list.map(media => <Col><Display  id={media.id} 
            title={media.title}
            poster={media.poster}
            route={props.route} /></Col>)}
        
            </Row>
        </Container>
    )
}

export default Layout
