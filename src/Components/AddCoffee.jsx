import Swal from 'sweetalert2';
const AddCoffee = () => {


const handleAddCoffee = e =>{
  e.preventDefault()

  const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, taste, details, supplier, photo,category}
        console.log(newCoffee)
  
        fetch('https://practise-coffee-store-server.vercel.app/coffees',{
            method:'POST',
            headers: {
              'content-type': 'application/json'

            },
            body:JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then( data => {
          console.log(data)
          if(data.insertedId){
            Swal.fire({
              title: "Good job!",
              text: "Coffee added successfully!",
              icon: "success"
            });
          }
         
        })

}

  

    return (
        <div>
        <div className=" bg-[#F4F3F0] max-w-7xl mx-auto pb-20">
          <h1 className="text-center text-2xl"> Add a Coffee</h1>
          <form onSubmit={handleAddCoffee}>
            {/* form name and quantity row */}
            <div className="md:flex px-20 gap-x-4">
              <div className="form-control md:w-1/2">
                <label htmlFor="" className="label">
                  <span className="label-text text-black">Coffee Name</span>
                </label>
                <label className="input-group">
                  <input
                    className="input input-bordered w-full"
                    placeholder="Coffee Name"
                    type="text"
                    name="name"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label htmlFor="" className="label">
                  <span className="label-text text-black">
                    Available Quantity
                  </span>
                </label>
                <label className="input-group">
                  <input
                    className="input input-bordered w-full"
                    placeholder="Quantity"
                    type="text"
                    name="quantity"
                  />
                </label>
              </div>
            </div>
            {/* form row */}
            <div className="md:flex px-20 gap-x-4">
              <div className="form-control md:w-1/2">
                <label htmlFor="" className="label">
                  <span className="label-text text-black">Supplier</span>
                </label>
                <label className="input-group">
                  <input
                    className="input input-bordered w-full"
                    placeholder="Supplier name"
                    type="text"
                    name="supplier"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label htmlFor="" className="label">
                  <span className="label-text text-black">Taste</span>
                </label>
                <label className="input-group">
                  <input
                    className="input input-bordered w-full"
                    placeholder="Taste"
                    type="text"
                    name="taste"
                  />
                </label>
              </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex px-20 gap-x-4">
              <div className="form-control md:w-1/2">
                <label htmlFor="" className="label">
                  <span className="label-text text-black">Category</span>
                </label>
                <label className="input-group">
                  <input
                    className="input input-bordered w-full"
                    placeholder="Category"
                    type="text"
                    name="category"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label htmlFor="" className="label">
                  <span className="label-text text-black">Category Details</span>
                </label>
                <label className="input-group">
                  <input
                    className="input input-bordered w-full"
                    placeholder="Details"
                    type="text"
                    name="details"
                  />
                </label>
              </div>
            </div>
            {/* form photo urlrow */}
            <div className="px-20 mt-4">
              <label className="input-group">
                <span className="label-text text-black">Photo URL</span>
                <input
                  className="input input-bordered w-full"
                  placeholder="Photo url"
                  type="text"
                  name="photo"
                />
              </label>
              <div className="mt-8">
                <input
                  type="submit"
                  value="Add Coffee"
                  className="btn btn-block bg-red-300 text-white"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddCoffee;