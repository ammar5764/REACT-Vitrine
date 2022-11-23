import React from 'react';
import Buttons from '../component/Buttons';
import { ContactForms } from '../component/contactForms';
import Logo from '../component/Logo';
import Mouse from '../component/Mouse';
import Navigations from '../component/Navigations';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SocialNetwork from '../component/SocialNetwork';

const Contact = () => {
    return (
        <main>
            <Mouse />
            <div className="contact">
                <Navigations />
                <Logo />
                <ContactForms />
                <Buttons left={"/projet-4"} right={"/blog"} />
                <div className="contact-infos">
                    <div className="adress">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>rehov Ben-Yehuda</p>
                            <p>79818 Jerusalem</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>telephone</h4>
                            <CopyToClipboard text="02640000" className="hover">
                                <p style={{cursor:"pointer"}} className="clipboard" onClick={()=>alert("téléphone copié")}>02640000</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text="web-agency@gmail.com" className="hover">
                                <p style={{cursor:"pointer"}} className="clipboard" onClick={()=>alert("email copié")}>web-agency@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork/>
                    <div className="credits">
                        WebAG 2022
                    </div>
                </div>
            </div>

        </main>
    );
};

export default Contact;