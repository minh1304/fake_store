import config from '~/config';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Menu from './Menu';
// import { HomeIcon } from '~/components/Icons';
function Sidebar() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((res) => res.json())
            .then((res) => setCategories(res));
    }, []);

    return (
        <div className="grid grid-cols-10 h-[82px] bg-black text-white fixed w-full z-10">
            <div className="col-span-2 h-[82px] text-center ">
                <Link className="w-[100px] h-[82px]" to={config.routes.home}>
                    <img
                        className="w-[100px] md:ml-16 mt-2"
                        src="https://seeklogo.com/images/O/off-white-virgilabloh-logo-766416FD87-seeklogo.com.png"
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="col-span-6 grid grid-cols-4 pt-8">
                {categories.map((category, index) => (
                    // <NavLink
                    //     key={index}
                    //     to={`/categories/${category}`}
                    //     // className="uppercase col-span-1 w-[170px] hover:text-primary duration-300"
                    //     className={(navData) =>
                    //         navData.isActive
                    //             ? 'uppercase col-span-1 w-[170px] text-primary'
                    //             : 'uppercase col-span-1 w-[170px] hover:text-primary duration-300'
                    //     }
                    //     end
                    // >
                    //     {category}
                    // </NavLink>
                    <Menu key={index} data={category} />
                ))}
            </div>
            <div className="col-span-2 pt-8">basket</div>
        </div>
    );
}

export default Sidebar;
