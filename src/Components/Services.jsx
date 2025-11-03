import Card from "./Card";
const Services = () => {

  return (
    <div className="flex justify-between items-center gap-4">
        {
            Card.map( ({id, image, title, description, price}) => {
                return (
                    <div key={id} className="bg-white shadow-blue-800 items-center w-full">
                        <img src={image} alt="" />
                        <h2 className="font-bold text-amber-800">{title}</h2>
                        <p className="text-gray-800">{description}</p>
                        <h5>${price}</h5>

                    </div>
                )
            })
        }
    </div>
  )
}

export default Services