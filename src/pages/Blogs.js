import React from 'react';
import Footer from '../components/Footer';

const Blogs = () => {
    return (
        <>
            <div className='mt-16 lg:mx-20'>
                <h1 className='text-4xl text-center text-purple-600'>Blogs Where You Can Learn Something </h1>
                <div className='my-10'>
                    <div className=''>
                        <h2 className='text-2xl text-red-400 my-4'>How will you improve the performance of a React Application?</h2>
                        <p>
                            1. Keeping component state local where necessary. <br />
                            2. An optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. React components to prevent unnecessary re-renders. <br />
                            3. Code-splitting in React using dynamic import. By default, when a React application renders in a browser, a “bundle” file containing the entire application code loads and serves to users at once. This file generates by merging all the code files needed to make a web application work. <br />
                            4. To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time. With lazy loading, we can wait until each of the images is about to appear in the viewport before we render them in the DOM.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-2xl text-red-400 my-4'>What are the different ways to manage a state in a React application</h2>
                        <p>
                            1. Local state < br / >
                            2. Global state <br />
                            3. Server state <br />
                            4. URL state <br />
                            5. Location State
                        </p>
                    </div>
                    <div>
                        <h2 className='text-2xl text-red-400 my-4'>How does prototypical inheritance work?</h2>
                        <p>
                            Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-2xl text-red-400 my-4'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p>
                            If you update it directly, calling the setState() afterward may just replace the update you made.
                            When you directly update the state, it does not change this.state immediately.Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.
                        </p>
                    </div>
                    <div>
                        <h2 className='text-2xl text-red-400 my-4'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p className='text-xl text-bold'>
                            {`const obj = a.find(o => o['string']);`}
                        </p>
                    </div>
                    <div>
                        <h2 className='text-2xl text-red-400 my-4'>What is a unit test? Why should write unit tests?</h2>
                        <p>
                            Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers.The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                        </p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blogs;