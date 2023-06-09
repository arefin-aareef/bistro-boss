
import SectionTitle from "../../../compoents/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu()
  const popular = menu.filter(item => item.category === 'popular')
  return (
    <section className="mb-12">
      <SectionTitle
        heading="From Our Menu"
        subHeading="Popular Item"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-primary my-8 border-0 border-b-4 text-white">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
