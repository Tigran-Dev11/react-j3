import { Link } from "react-router-dom"

const Navbar = ()=>{
    
    return(
        <nav className="z-50">
            <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b">
                <div className="flex items-center fiex-1">
                    <h2 className="trxt-3x1 font-bold text-pink-500">Beauty</h2>
                </div>
                <div>
                    {/* <ul className="flex gap-8 mr-16 text-[18px]">
                    <Link spy={true} smooth={true}  to='Home'>
                        <li className="hovr:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>
                        </Link>
                    <Link spy={true} smooth={true}  to='Logo'>
                        <li className="hovr:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer" >Logo</li>
                        </Link>
                    <Link spy={true} smooth={true}  to='Sop'>
                        <li className="hovr:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Sop</li>
                        </Link>
                    <Link spy={true} smooth={true}  to='Blogs'>
                        <li className="hovr:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Blogs</li>
                        </Link>
                    <Link spy={true} smooth={true}  to='Product'>
                        <li className="hovr:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Product</li>
                        </Link>
                    <Link spy={true} smooth={true}  to='Contact'>
                        <li className="hovr:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">contact</li>
                        </Link>

                    </ul> */}
                
                </div>
                
                <div></div>
            </div>
        </nav>
    )
}
export default Navbar