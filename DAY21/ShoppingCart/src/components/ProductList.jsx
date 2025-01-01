import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, CardMedia } from '@mui/material';

const products =[
  {
    "id": 1,
    "name": "Rose Bouquet",
    "description": "A beautiful bouquet of red roses.",
    "image": "https://nectarflowersottawa.ca/cdn/shop/files/roses-ottawa_720x.jpg?v=1706534870",
    "price": 25.99
  },
  {
    "id": 2,
    "name": "Tulip Delight",
    "description": "A vibrant mix of colorful tulips.",
    "image": "https://i.pinimg.com/736x/25/98/cd/2598cdf87c07b3a9451fca4e5b9823c7.jpg",
    "price": 19.99
  },
  {
    "id": 3,
    "name": "Sunflower Charm",
    "description": "Bright and cheerful sunflowers.",
    "image": "https://www.4seasonsflora.com/cdn/shop/articles/9E154A61-6E9E-43F3-B1D3-F9A39C8725B1-72145-00000CB36F6FE364.webp?v=1706901949",
    "price": 15.99
  },
  {
    "id": 4,
    "name": "Lily Elegance",
    "description": "Elegant white lilies.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRb3x4JV8_T4LDF1Iy-f6SQV2azEDgGbPYdw&s",
    "price": 22.99
  },
  {
    "id": 5,
    "name": "Orchid Beauty",
    "description": "Exotic orchid flowers.",
    "image": "https://thumbs.dreamstime.com/b/mother-s-day-womens-birthday-card-beautiful-bouquet-blooming-orchids-carnations-irises-spring-greenery-light-pink-245076662.jpg",
    "price": 30.99
  },
  {
    "id": 6,
    "name": "Daisy Delight",
    "description": "A delightful bunch of daisies.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgASENa7UX-oIje-dGwW0mpoEyTbJeWOYag&s",
    "price": 14.99
  },
  {
    "id": 7,
    "name": "Peony Perfection",
    "description": "Gorgeous pink peonies.",
    "image": "https://southernweddings.com/wp-content/uploads/2013/04/southern-wedding-peony-bouquet.jpg",
    "price": 29.99
  },
  {
    "id": 8,
    "name": "Lavender Love",
    "description": "Soothing lavender bouquet.",
    "image": "https://i.pinimg.com/736x/ba/5c/31/ba5c31184d5ddd47afe995a0eb118c9d.jpg",
    "price": 18.99
  },
  {
    "id": 9,
    "name": "Carnation Bliss",
    "description": "A mix of colorful carnations.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnr4HZYFA3I7R7A40Efc0E4P1w6iZ1xQgeFw&s",
    "price": 16.99
  },
  {
    "id": 10,
    "name": "Chrysanthemum Cheer",
    "description": "Cheerful chrysanthemum flowers.",
    "image": "https://bloomthis.co/cdn/shop/products/bloomthis-flower-stand-teigan-lilac-chrysanthemum-condolence-flower-stand-1200x800-02.jpg?v=1636455481&width=600",
    "price": 21.99
  },
  {
    "id": 11,
    "name": "Iris Inspiration",
    "description": "Elegant purple irises.",
    "image": "https://www.brideandblossom.com/wp-content/uploads/2017/02/Iris-Bouquet-Photo-by-B-Hull-Photography-via-Style-Me-Pretty.jpg",
    "price": 24.99
  },
  {
    "id": 12,
    "name": "Hydrangea Heaven",
    "description": "Beautiful blue hydrangeas.",
    "image": "https://inmyownstyle.com/wp-content/uploads/2014/07/how-to-turn-hydrangeas-pink.jpg",
    "price": 26.99
  },
  {
    "id": 13,
    "name": "Poppy Passion",
    "description": "Bright red poppies.",
    "image": "https://thumbs.dreamstime.com/b/modern-trends-wedding-bouquets-modern-trends-wedding-bouquets-bride-s-bouquet-red-roses-empty-background-wedding-175492745.jpg",
    "price": 17.99
  },
  {
    "id": 14,
    "name": "Ranunculus Radiance",
    "description": "Radiant ranunculus flowers.",
    "image": "https://nectarflowersottawa.ca/cdn/shop/files/nectarflowersottawa-17_720x.jpg?v=1720534282",
    "price": 27.99
  },
  {
    "id": 15,
    "name": "Gardenia Grace",
    "description": "Graceful gardenia flowers.",
    "image": "https://s.yimg.com/ny/api/res/1.2/no0b3hgWEH8D7XbrmNaqWA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTYwMDtoPTkwMA--/https://media.zenfs.com/en-US/homerun/southern_living_806/1f499a72fbe5cf367e403aee92acfdc3",
    "price": 23.99
  },
  {
    "id": 16,
    "name": "Freesia Fantasy",
    "description": "A fantasy mix of freesias.",
    "image": "https://thumbs.dreamstime.com/b/wedding-bouquet-11305486.jpg",
    "price": 20.99
  },
  {
    "id": 17,
    "name": "Anemone Allure",
    "description": "Alluring anemone flowers.",
    "image": "https://i.pinimg.com/736x/77/2d/0c/772d0c1807fbcc9a930fc118cc75695f.jpg",
    "price": 28.99
  },
  {
    "id": 18,
    "name": "Marigold Magic",
    "description": "Magical marigold flowers.",
    "image": "https://flowerexplosion.com/cdn/shop/products/jungle_fever_vertical_2.jpg?v=1658383565",
    "price": 13.99
  },
  {
    "id": 19,
    "name": "Dahlia Dream",
    "description": "Dreamy dahlia flowers.",
    "image": "https://www.elegantweddinginvites.com/wedding-blog/wp-content/uploads/2015/04/dahlia-pink-and-yellow-fall-wedding-bouquets.jpg",
    "price": 25.99
  },
  {
    "id": 20,
    "name": "Zinnia Zest",
    "description": "Zesty zinnia flowers.",
    "image": "https://thumbs.dreamstime.com/b/wedding-bouquet-rose-zinnia-brunia-flowers-festive-decor-wedding-bouquet-rose-zinnia-brunia-flowers-167857683.jpg",
    "price": 19.99
  },
  {
    "id": 21,
    "name": "Gladiolus Glory",
    "description": "Stunning gladiolus flowers in a rainbow of colors.",
    "image": "https://d3t8v3yceu4yk0.cloudfront.net/sites/files/hibye/product-images/600xAUTO/HBO-026C-1.jpg",
    "price": 22.99
  }
  
];


const ProductList = ({ addToCart, removeFromCart, cart }) => (
  <div className="product-list">
    {products.map((product) => (
      <Card key={product.id} variant="outlined" className="product-card" sx={{ margin: 2, width: 250 }}>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
        <CardActions style={{alignSelf:'center',marginTop:'auto'}}>
          {cart.includes(product.id) ? (
            <Button variant="contained" color="secondary" onClick={() => removeFromCart(product.id)}>
              Remove from Cart
            </Button>
          ) : (
            <Button variant="contained" color="error" onClick={() => addToCart(product.id)}>
              Add to Cart
            </Button>
          )}
        </CardActions>
      </Card>
    ))}
  </div>
);

export default ProductList;
