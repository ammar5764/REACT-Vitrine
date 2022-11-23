// import React, { useEffect, useState } from 'react';
// import Buttons from '../component/Buttons';
// import Logo from '../component/Logo';
// import Mouse from '../component/Mouse';
// import Navigations from '../component/Navigations';
// import axios from 'axios';
// import Project from '../component/Project';


// const Project1 = () => {
//     const [data, setData] = useState({});
//     const getData = async () => {
//         const response = await axios.get('http://localhost:3004/projets');
//         console.log("response",response);
//         var res = response.data[0];
//         //console.log("res",res);
//         //var cloneData = [...data, res];
//         setData(res)
//     }
//     useEffect(() => {
//         getData()
//     }, [])

//     return (
//         <main>
//             <Mouse />
//             <div className="project">
//                 <Navigations />
//                 <Logo />
//                 <Project baseData={data} />
//                 <Buttons left={"/"} right={"/projet-2"} />

//             </div>

//         </main>
//     );
// };

// export default Project1;

//2eme facon --------------------------------------------------------------------
import Buttons from '../component/Buttons';
import Logo from '../component/Logo';
import Mouse from '../component/Mouse';
import Navigations from '../component/Navigations';
import Project from '../component/Project';


const Project1 = () => {
    

    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigations />
                <Logo />
                <Project number={0} />
                <Buttons left={"/"} right={"/projet-2"} />

            </div>

        </main>
    );
};

export default Project1;