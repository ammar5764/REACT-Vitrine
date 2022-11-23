// import React from 'react';

// const Project = (props) => {
//     console.log("props : ", props);
//     return (
//         <div className='project-main'>
//             <div className="project-content">
//                 <h1>{props.baseData.title}</h1>
//                 <p>{props.baseData.date}</p>
//                 {/* <ul className='languages'>
//                 {props.baseData.languages[0].map((item)=>(
//                      <li key={item}>{item}</li>
//                      )) }
//                 </ul> */}
//             </div>
//         </div>
//     );
// };
// //lorsque on fait un map il y a trois possibilitees: 1) evec des accolades dans ce cas  il faut mettre un return .2) on ne met pas d'accolades dans ce cas on ecrit sur la meme ligne     .map((item)=><li></li> sans le return) .3)  on va a la ligne sans accolade il faut des parentheses qui font office de return
// export default Project;

//------------------------------------------------------------------------------------------------------//
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Project = (props) => {
    const [left,setLeft]=useState();
    const [top,setTop]=useState();
    const [size,setSize]=useState();
    const [data, setData] = useState({});
    const getData = async () => {
        const response = await axios.get('http://localhost:3004/projets');//rend un array avec 4 objets a l'interieur
        console.log("response", response)
        var res = response.data[props.number]; //rend le premier objet
        console.log("res", res);
        //  var cloneData = [...data, res];//rend un array avec l'objet a l'interieur [{}]
        // console.log("clonedata", cloneData);
        setData(res)
    }
    useEffect(() => {
        setLeft(Math.floor(Math.random()*200 +700)+"px");
        setTop(Math.floor(Math.random()*200 +150)+"px");
        setSize("scale("+(Math.random()+0.7)+")")
        getData()
    }, [])
    return (
        <div className='project-main'>
            <div className="project-content">
                <h1>{data.title}</h1>
                <p>{data.date}</p>
                {/* <ul className='languages'>
                    {data.languages.map((item) => (
                    <li key={item}>{item}</li>))}
                </ul> */}
            </div>
            <div className="img-content">
              <div className="img-container hover">
                <span>
                    <h3>{data.title}</h3>
                    <p>{data.infos}</p>
                    </span>
                    <img src={data.img} alt={data.title} className="img" />
               
              </div>
              <div className="button-container">
                <a href={data.link} target="_blank" rel="noopener noreferrer" className='hover'>
                <span className="button">voir le site</span>
                </a>
              </div>
            </div>
            <span className="random-circle" style={{left:left,top:top,transform:size}}></span>
        </div>
    );
};
//lorsque on fait un map il y a trois possibilitees: 1) evec des accolades dans ce cas  il faut mettre un return .2) on ne met pas d'accolades dans ce cas on ecrit sur la meme ligne     .map((item)=><li></li> sans le return) .3)  on va a la ligne sans accolade il faut des parentheses qui font office de return
export default Project;