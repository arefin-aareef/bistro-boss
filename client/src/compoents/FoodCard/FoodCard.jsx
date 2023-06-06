const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="img"
        />
      </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-800 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-primary bg-slate-200 border-0 border-b-4 text-white">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
