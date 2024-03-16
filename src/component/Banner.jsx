
const Banner = () => {
    return (
        <div>
            <div className="hero bg-cover rounded-3xl  min-h-screen" style={{backgroundImage: `url('./b.png')`}}>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        
                    <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                    <p className="mb-5">Cook spaghetti al dente. Fry pancetta until crispy. Mix eggs, Parmesan, and pepper. Toss spaghetti <br/> with egg mixture. Serve hot and garnish generously. Enjoy!</p>
                    <button className="btn bg-green-300 mr-8 rounded-full">Explore Now</button>
                    <button className="btn text-white rounded-full btn-outline">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;