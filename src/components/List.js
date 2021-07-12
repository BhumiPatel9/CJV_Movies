import React,{useState,useEffect} from 'react'
import Display from './Display';

function List(props) {
    const [list, setList] = useState([]);
    useEffect(() => {
        const url= `http://localhost:3000/${props.url}?_page=1&_limit=7`;
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
        <div style={{margin:'20px'}}>
            <h4>{props.title}</h4>
        <div style={{display:"flex",margin:'5px'}}>
            {list.map(media => <Display id={media.id} route={props.url} title={media.title} poster={media.poster} />)}
        </div>
        </div>
    )
}

export default List
