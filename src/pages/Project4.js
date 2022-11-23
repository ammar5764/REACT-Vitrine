import Buttons from '../component/Buttons';
import Logo from '../component/Logo';
import Mouse from '../component/Mouse';
import Navigations from '../component/Navigations';
import Project from '../component/Project';


const Project4 = () => {


    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigations />
                <Logo />
                <Project number={3} />
                <Buttons left={"/projet-2"} right={"/contact"} />

            </div>

        </main>
    );
};

export default Project4;