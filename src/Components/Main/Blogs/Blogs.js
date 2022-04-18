import React from 'react';
import "./Blogs.css"
import firebasepic from '../../../Images/logo-logomark.png'
const Blogs = () => {
    return (

        <div className='blogs mx-auto'>
            <div className='eachBlog'>
                <h2>
                    Difference between authorization and authentication
                </h2>
                <p>
                    Authorization give the access to do something individual and authentication identify the user.In Firebase, Authorization gives access to various action to the familiar or unknown user, just like fishes in the net.where authentication indentify a user like a fishes when we bring up the net from pond & wonder which type of , how many fishes got trapped
                </p>
            </div>
            <hr />

            <div className='eachBlog'>
                <h2>
                    Why are you using firebase? What other options do you have to implement authentication?
                </h2>
                <p>
                    Google Firebase have many features it for backend development tool for web and mobile apps. Firebase is simple, lightweight, It saves development time and complexity.One of the greatest features in Firebase is its authentication service. To save time, i can use its built-in login UI to sign users into my site. I use it for make easier the authentication system is besides save users info due to better experience of users. <br />
                    JSON Web Token(JWT) is a other type of option to implement authentication
                </p>
            </div>
            <hr />

            <div className='eachBlog'>
                <h2>
                    What other services does firebase provide other than authentication
                </h2>
                <p>
                    Google Firebase have many features aside authentication.It have hosting capability.it has tools for reporting and fixing app crashes, web analytics,performance issue,Web Testing.Also it provide the tools and service for cloud messaging
                </p>
            </div>
        </div>


    );
};

export default Blogs;