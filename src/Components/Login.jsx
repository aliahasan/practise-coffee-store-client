import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {

    const  {loggedInUser} = useContext(AuthContext)

    const handleSignUp = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;



        loggedInUser(email,password)
        .then(result => {
            console.log(result.user)

            const user = {
                email, 
                lastLoginAt : result.user?.metadata?.
                lastSignInTime
            }

            fetch('https://practise-coffee-store-server.vercel.app/users',{

                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body:  JSON.stringify(user)
            })

            .then(res =>res.json())
            .then(data => {
                console.log(data)
            })
        })

        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label"> 
                  <span className="label-text">Password</span>
                </label>
                <input type="password"        placeholder="password" name="password" className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;