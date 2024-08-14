
import Content from './Content';
import ImageSlider from './ImageSlider';

function Product() {
    return (
        <div className="flex w-full h-screen">
            <div className="w-1/2 h-full p-4">
                <ImageSlider />
            </div>
            <div className="w-1/2 h-full p-4">
                <Content />
            </div>
        </div>
    );
}

export default Product;

