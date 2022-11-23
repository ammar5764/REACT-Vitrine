
import Buttons from '../component/Buttons';
import Logo from '../component/Logo';
import Mouse from '../component/Mouse';
import Navigations from '../component/Navigations';
import Project from '../component/Project';


const Project2 = () => {


    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigations />
                <Logo />
                <Project number={1} />
                <Buttons left={"/projet-1"} right={"/projet-3"} />

            </div>

        </main>
    );
};

export default Project2;