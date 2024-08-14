

import SneakerItem from '../shared/SneakerItem';



const dummySneakers = [
    {
        id: 0,
        name: 'Adidas NMD R1',
        price: 149,
        description: 'Stylish sneaker with Boost cushioning and a modern design.',
        image: 'https://www.generatormix.com/images/sneaker/adidas-nmd_r1.jpg'
    },
    {
        id: 2,
        name: 'Brooks Launch 5',
        price: 150,
        description: 'Lightweight running shoe with responsive cushioning.',
        image: 'https://www.generatormix.com/images/sneaker/brooks-launch-5.jpg'
    },
    {
        id: 3,
        name: 'Asics Gel-Kayano',
        price: 100,
        description: 'Supportive running shoe with advanced cushioning technology.',
        image: 'https://www.generatormix.com/images/sneaker/asics-gel-kayano.jpg'
    },
    {
        id: 4,
        name: 'New Balance 574',
        price: 90,
        description: 'Classic sneaker with a retro design and durable build.',
        image: 'https://www.generatormix.com/images/sneaker/new-balance-574.jpg'
    },
    {
        id: 5,
        name: 'Nike Air Max 95',
        price: 99,
        description: 'Iconic sneaker with a distinctive design and premium cushioning.',
        image: 'https://www.generatormix.com/images/sneaker/nike-air-max-95.jpg'
    },
    {
        id: 6,
        name: 'Adidas NMD R1',
        price: 150,
        description: 'Stylish sneaker with Boost cushioning and a modern design.',
        image: 'https://www.generatormix.com/images/sneaker/adidas-nmd_r1.jpg'
    },
    {
        id: 7,
        name: 'Brooks Launch 5',
        price: 120,
        description: 'Lightweight running shoe with responsive cushioning.',
        image: 'https://www.generatormix.com/images/sneaker/brooks-launch-5.jpg'
    },
    {
        id: 8,
        name: 'Asics Gel-Kayano',
        price: 90,
        description: 'Supportive running shoe with advanced cushioning technology.',
        image: 'https://www.generatormix.com/images/sneaker/asics-gel-kayano.jpg'
    },
    {
        id: 9,
        name: 'New Balance 574',
        price: 90,
        description: 'Classic sneaker with a retro design and durable build.',
        image: 'https://www.generatormix.com/images/sneaker/new-balance-574.jpg'
    },
    {
        id: 10,
        name: 'Nike Air Max 95',
        price: 140,
        description: 'Iconic sneaker with a distinctive design and premium cushioning.',
        image: 'https://www.generatormix.com/images/sneaker/nike-air-max-95.jpg'
    },
    {
        id: 11,
        name: 'Adidas NMD R1',
        price: 100,
        description: 'Stylish sneaker with Boost cushioning and a modern design.',
        image: 'https://www.generatormix.com/images/sneaker/adidas-nmd_r1.jpg'
    },
    {
        id: 12,
        name: 'Brooks Launch 5',
        price: 99,
        description: 'Lightweight running shoe with responsive cushioning.',
        image: 'https://www.generatormix.com/images/sneaker/brooks-launch-5.jpg'
    },
    {
        id: 13,
        name: 'Asics Gel-Kayano',
        price: 130,
        description: 'Supportive running shoe with advanced cushioning technology.',
        image: 'https://www.generatormix.com/images/sneaker/brooks-launch-5.jpg'
    }]

function Collections() {
 


    
    return (
        <div className="p-6 min-h-screen">
            <h2 className="text-3xl font-bold mb-8 text-orange-500 text-center">Summer 2024 Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {dummySneakers.map((sneaker) => (
                    <SneakerItem  key={sneaker.id} sneaker={sneaker}  />
                ))}
            </div>
        </div>
    );
}

export default Collections;

