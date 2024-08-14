import SneakerItem from "../shared/SneakerItem"

const dummySneakers = [
    {
        id: 57,
        name: 'Asics Gel-Kayano',
        price: 130,
        description: 'Supportive running shoe with advanced cushioning technology.',
        image: 'https://www.generatormix.com/images/sneaker/asics-gel-kayano.jpg'
    },
    {
        id: 58,
        name: 'New Balance 574',
         price: 130,
        description: 'Classic sneaker with a retro design and durable build.',
        image: 'https://www.generatormix.com/images/sneaker/new-balance-574.jpg'
    },
    {
        id: 59,
        name: 'Nike Air Max 95',
        price: 130,
        description: 'Iconic sneaker with a distinctive design and premium cushioning.',
        image: 'https://www.generatormix.com/images/sneaker/nike-air-max-95.jpg'
    },
    {
        id: 50,
        name: 'Adidas NMD R1',
        price: 130,
        description: 'Stylish sneaker with Boost cushioning and a modern design.',
        image: 'https://www.generatormix.com/images/sneaker/asics-gel-exalt.jpg'
    },
    {
        id: 51,
        name: 'Brooks Launch 5',
        price: 130,
        description: 'Lightweight running shoe with responsive cushioning.',
        image: 'https://www.generatormix.com/images/sneaker/asics-gel-kayano-25.jpg'
    },
    {
        id: 52,
        name: 'Asics Gel-Kayano',
        price: 130,
        description: 'Supportive running shoe with advanced cushioning technology.',
        image: 'https://www.generatormix.com/images/sneaker/brooks-adrenaline-gts.jpg'
    },
    {
        id: 53,
        name: 'New Balance 574',
         price: 130,
        description: 'Classic sneaker with a retro design and durable build.',
        image: 'https://www.generatormix.com/images/sneaker/new-balance-574.jpg'
    },
    {
        id: 54,
        name: 'Nike Air Max 95',
        price: 130,
        description: 'Iconic sneaker with a distinctive design and premium cushioning.',
        image: 'https://www.generatormix.com/images/sneaker/nike-air-max-95.jpg'
    },
    {
        id: 55,
        name: 'Adidas NMD R1',
        price: 130,
        description: 'Stylish sneaker with Boost cushioning and a modern design.',
        image: 'https://www.generatormix.com/images/sneaker/adidas-nmd_r1.jpg'
    },
    {
        id: 56,
        name: 'Brooks Launch 5',
        price: 130,
        description: 'Lightweight running shoe with responsive cushioning.',
        image: 'https://www.generatormix.com/images/sneaker/brooks-launch-5.jpg'
    },
    {
        id: 60,
        name: 'Adidas NMD R1',
        price: 130,
        description: 'Stylish sneaker with Boost cushioning and a modern design.',
        image: 'https://www.generatormix.com/images/sneaker/adidas-nmd_r1.jpg'
    },
    {
        id: 61,
        name: 'Brooks Launch 5',
        price: 130,
        description: 'Lightweight running shoe with responsive cushioning.',
        image: 'https://www.generatormix.com/images/sneaker/brooks-launch-5.jpg'
    },
    {
        id: 62,
        name: 'Asics Gel-Kayano',
        price: 130,
        description: 'Supportive running shoe with advanced cushioning technology.',
        image: 'https://www.generatormix.com/images/sneaker/brooks-launch-5.jpg'
    }
];



function WomenProducts() {
    return (
      <div className="p-6  min-h-screen">
            <h2 className="text-3xl font-bold mb-8 text-orange-500 text-center">Summer 2024 Collection</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {dummySneakers.map((sneaker) => (
                    <SneakerItem key={sneaker.id} sneaker={sneaker} />
                ))}
            </div>
        </div>
    )
}

export default WomenProducts
