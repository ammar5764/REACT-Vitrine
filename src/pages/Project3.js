import Buttons from '../component/Buttons';
import Logo from '../component/Logo';
import Mouse from '../component/Mouse';
import Navigations from '../component/Navigations';
import Project from '../component/Project';


const Project3 = () => {


    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigations />
                <Logo />
                <Project number={2} />
                <Buttons left={"/projet-2"} right={"/projet-4"} />

            </div>

        </main>
    );
};

export default Project3;