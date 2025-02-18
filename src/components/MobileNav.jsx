import React from 'react'
import { ArrowsDownUp, ChartDonut, House, Jar, Receipt } from '../assets/icons'
import { Link, useLocation } from 'react-router';
import { cn } from '../utils/cn';



const MobileNav = () => {
   


    const Nav_Link = [
      {
        id: 1,
        name: "Overview",
        link: "/dashboard",
        icon: <House />,
      },
      {
        id: 2,
        name: "Transactions",
        link: "/transactions",
        icon: <ArrowsDownUp />,
      },
      {
        id: 3,
        name: "Budgets",
        link: "/budgets",
        icon: <ChartDonut />,
      },
      {
        id: 4,
        name: "Pots",
        link: "/pots",
        icon: <Jar />,
      },
      {
        id: 5,
        name: "Recurring Bills",
        link: "/recurring-bills",
        icon: <Receipt />,
      },
    ];




  return (
    <div className='fixed bottom-0 w-full pt-4 rounded-t-[10px] overflow-hidden bg-secondary-dark lg:hidden'>
        <div className='flex justify-around'>
            {Nav_Link.map((link) => (
                <NavLink key={link.id} name={link.name} link={link.link} icon={link.icon} />
            ))}
        </div>
    </div>
  )
}

export default MobileNav


const NavLink = ({link, icon}) => {

    const location = useLocation()

    const isActive = location.pathname === link

    return (
        <Link to={link} className='flex flex-col items-center text-gray-300'>
            <div className={cn('w-[7rem] py-2 flex justify-center', {
                "border-secondary-green border-b-4 bg-white text-secondary-green rounded-t-[8px]": isActive
            })}>
            {icon}
            </div>
        </Link>
    )
}