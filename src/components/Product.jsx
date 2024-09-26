// export default function Product() {
//   const price = 999;
//   const imgUrl = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";

//   return (
//     <div>
//       <h2>Tacos</h2>
//       <img src={imgUrl} alt="Tacos With Lime" width="640" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// };
import PropTypes from 'prop-types';

const Product = ({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) => (
  <div>
		<img src={imgUrl} alt={name} width="480" />
		<h2>{name}</h2>
    <p>Price: {price} credits</p>
  </div>
);

// Опис типів пропсів компонента 
Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};

export default Product;