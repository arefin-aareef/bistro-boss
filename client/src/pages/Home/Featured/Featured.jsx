import SectionTitle from "../../../compoents/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20 bg-opacity-50">
            <SectionTitle
                heading='Featured Item'
                subHeading='Check It Out'
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2023</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem alias velit doloremque ad illo, perferendis accusantium accusamus architecto veritatis veniam officia ullam aperiam cum repellendus, debitis odio atque possimus quis magni. Sunt possimus esse quasi quae consequatur iure, corrupti facilis.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;