class Product {
    constructor( id, image, name, description, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
const products = [{
    id: "1",
    image: "https://cdn.rossmann.com.tr/mnresize/1400/1400/media/catalog/product/3/6/3600542433341_RS_6177904148692.jpg",
    name: "Garnier C Vitamin",
    description: "30ml Garnier's Vitamin C is powered by Green Science to pair super citrus extracts with Vitamin C, a powerful    anti-oxidant, and other complementary dermatological actives for clear, even-looking skin that's luminous.",
    price: "21.99",
    
},
{
    id: "2",
    image: "https://www.laroche-posay.com.tr/-/media/project/loreal/brand-sites/lrp/emea/tr/products/redermic/c10/la-roche-posay-productpage-anti-aging-pure-vitamin-c10-30ml-3337875660570-open.jpg?rev=2e5a35b400d84b9db33e8ca3496e19ca",
    name: "La Roche-Posay C Vitamin",
    description: "30ml La Roche Posay C10 Pure Vitamin C Serum, an effective antioxidant, has wonderful properties such as vitamin C, removing the loss of radiance in the skin, reducing the appearance of fine lines and wrinkles, and removing roughness on the skin.",
    price: "39.99",
},
{
    id: "3",
    image: "https://cdn11.bigcommerce.com/s-1c2f2/images/stencil/1280x1280/products/352/2092/Vitamin_C_Serum__12176.1580851371.JPG?c=2",
    name: "Mia Wish C Vitamin",
    description: "30ml Mia Wish C Vitamin is a multifunctional serum which performs as an anti-oxidant and skin brightening agent with anti-aging properties. Made with hyaluronic acid, niacinamide (Vitamin B3) and fruit acids known as necessary elements to maintain youthful skin, improve collagen production, help uneven skin tone and improve elasticity.",
    price: "28.99",
},
{
    id: "4",
    image: "https://productimages.hepsiburada.net/s/43/1500/10756765122610.jpg",
    name: "The Ordinary AHA 30% + BHA2% Peeling Solution",
    description: "30ml The Ordinary AHA 30% + BHA2% Peeling Solution; combined 30% AHA and 2% BHA solution offers deeper exfoliation to help fight visible blemishes and for improved skin radiance. The formula also improves the appearance of skin texture and reduces the look of fine lines with continued use.",
    price: "8.00",
},
{
    id: "5",
    image: "https://cdn.suslusozluk.com/content/images/original/11940_1550409777.jpg",
    name: "The Ordinary Buffet",
    description: "30ml The Ordinary Buffet; a multi-peptide, lightweight, water-based serum that targets multiple signs of visible aging at once and is great for those looking for solutions for signs of aging and supporting visibly healthy skin.",
    price: "16.80",
},
{
    id: "6",
    image: "https://productimages.hepsiburada.net/s/36/1500/10534812811314.jpg",
    name: "The Ordinary Squalane Cleanser",
    description: " 150 ml The Ordinary Squalane Cleanser; a gentle, moisturizing facial cleanser.",
    price: "19.90",
},
{
    id: "7",
    image: "https://m.media-amazon.com/images/I/316NEqzIRmL._AC_SY780_.jpg",
    name: "The Ordinary Toning Solution",
    description: "240ml The Ordinary Toning Solution; an exfoliating toning solution with seven percent glycolic acid, amino acids, aloe vera, ginseng, and Tasmanian pepperberry. ",
    price: "10.00",
},
{
    id: "8",
    image: "https://www.dermoeczanem.com/la-roche-posay-effaclar-duo-krem-40-ml-la-roche-posay-120362-16-B.jpg",
    name: "La Roche-Posay Effaclar Duo(+)",
    description: "40ml La Roche Posay Effaclar Duo; best spot treatment for acne reduces the number and severity of acne blemishes, pimples, blackheads and whiteheads. Formulated with 5.5% micronized benzoyl peroxide and micro-exfoliating lipo-hydroxy acid, this acne spot treatment provides fast and visible results in less than 3 days.",
    price: "30.99",
},
{
    id: "9",
    image: "https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzEwcW5KUEh6V0wuX1NMMTUwMF8uanBn.jpg",
    name: "La Roche-Posay Anthelios 50+",
    description: "120ml La Roche-Posay Anthelios 50+ oil-free, 100% mineral sunscreen for face and body with zinc oxide and titanium dioxide leaves skin feeling soothed and protected. It is formulated with Cell-Ox Shield technology: broad spectrum UVA/UVB protection with antioxidants",
    price: "30.99",
},

];