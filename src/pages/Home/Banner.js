import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/photos/modern-high-tech-authentic-robot-arm-holding-contemporary-super-picture-id1173740436?k=20&m=1173740436&s=612x612&w=0&h=lfLuki63MqO3KGGHoCIV5pnArKn0rMq1mS18ZRi4gig=" className="w-screen h-96"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.unsplash.com/photo-1606206873764-fd15e242df52?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnVmYWN0dXJpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500" className="w-screen h-96"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/photos/circuit-board-with-electronic-components-picture-id1307839840?k=20&m=1307839840&s=612x612&w=0&h=YVJsOB-CyKhUsHkNfRO_X2XvF33dZYJfqDwxoQnl7z0=" className="w-screen h-96"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/photos/computer-education-training-class-picture-id1210738055?k=20&m=1210738055&s=612x612&w=0&h=xNYnBsQSBTq5RpeUYPvpnU3qhU0zuoJJKex7TIu4bZw=" className="w-screen h-96"/>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;