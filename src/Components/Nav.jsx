







import { Link } from "react-router-dom";



const Nav = ()=>{
    const content=
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 translion">
    <ul className="text-center text-xl p-20">
        <Link spu={true} smooth={true} to='Home'>
        <li className="my-4 ry-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
        </Link>
        <Link spu={true} smooth={true} to='About'>
        <li className="my-4 ry-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
        </Link>
        <Link spu={true} smooth={true} to="Servicts">
        <li className="my-4 ry-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Servicts</li>
        </Link>
        <Link spu={true} smooth={true} to='Project'>
        <li className="my-4 ry-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Project</li>
        </Link>
        <Link spu={true} smooth={true} to='Contact'>
        <li className="my-4 ry-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contaqt</li>
        </Link>
    </ul> 
    </div>
    
    return(
<nav>
<div className="h-10vh flex justify z-50 text-white lg:py-5 px-20 py-4 flex-41"> 
                 <div className="flex litems-center flex-1">
                    <span className="text-3xl font-bold">logo</span>              
                 </div>
                <div className="lg:flex md:flex lg: flex-1 ltems center justify-end font-normal hidden">
                     <div className="flex-10">
                  {/* <ul className="flex gap-8 mr-16 text-[18px]">
        <Link to='Home'>
        <li className="hover:text-fuc hsia-600 transition border-b-2 border-slate-900 hover: fuchsia-600 cursor-pointer ">Home</li>
        </Link>
        <Link to='About'>
          <li className="hover:text-fuc hsia-600 transition border-b-2 border-slate-900 hover: fuchsia-600 cursor-pointer ">About</li>
        </Link>
        <Link to="Servicts">
         < li className="hover:text-fuc hsia-600 transition border-b-2 border-slate-900 hover: fuchsia-600 cursor-pointer ">Servicts</li>
        </Link>
      
        <Link to='Contact'>
        <li className="hover:text-fuc hsia-600 transition border-b-2 border-slate-900 hover: fuchsia-600 cursor-pointer ">Contaqt</li>
        </Link>
         </ul> */}
         
            </div>
  <Link to='Project'>
        <li className="hover:text-fuc hsia-600 transition border-b-2 border-slate-900 hover: fuchsia-600 cursor-pointer ">Project</li>
        </Link>
        </div>
    </div>
</nav>


    )
// return(
//         <nav>
//              <div className="h-10vh flex justify z-50 text-white lg:py-5 px-20 py-4 flex-41"> 
//                  <div className="flex litems-center flex-1">
//                     <span className="text-3xl font-bold">logo</span>
//                 </div>
//                  <div className="lg:flex md:flex lg: flex-1 ltems center justify-end font-normal hidden">
//                     <div className="flex-10">
//                     <ul className="flex gap-8 mr-16 text-[18px]">
//         <Link to='Home'>
//         <li>Home</li>
//         </Link>
//         <Link to='About'>
//         <li>About</li>
//         </Link>
//         <Link to="Servicts">
//         <li>Servicts</li>
//         </Link>
//         <Link to='Project'>
//         <li>Project</li>
//         </Link>
//         <Link to='Contact'>
//         <li>Contaqt</li>
//         </Link>
//               </ul>
//              </div>   
//             </div>                
//           </div>               
//     </nav>         

//     )
}
export default Nav;