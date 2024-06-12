import { Link } from "react-router-dom";

export const Navbar = () =>{
    return(
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <div className="typewriter">
    <h1>Priyanshu Sethi</h1>
    </div>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><label className="cursor-pointer grid place-items-center">
 
</label></li>
    </ul>
  </div>
</div>
    )
}