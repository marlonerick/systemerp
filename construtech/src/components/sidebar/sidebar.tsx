import {
  ArrowLeftCircle,
  ArrowRightCircle,
  PlusCircle,
  GanttChart,
  ShoppingBag,
  Store,
  Wallet,
  Calculator,
  FolderCog,
  BarChart4,
  Undo2,
  Newspaper,
  BookMarked,
  ArrowDownUpIcon,
  CandlestickChart,
  LayoutDashboard,
  ShoppingCart,
  Archive,
  User2,
  Users2,
  LineChart,
  LogOut,
  Settings,
  Package,
} from 'lucide-react'

import LogoHome from '../../assets/img/logoHome.png'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Sidebar() {
  const [open, setOpen] = useState(true)

  const SideMenu = [
    {
      title: 'Painel',
      icon: <LayoutDashboard color="#06B6D4" size={20} />,
      rota: '/home',
    },
    {
      title: 'Clientes',
      icon: <User2 color="#06B6D4" size={20} />,
      subMenuItems: [
        {
          title: 'Cadastrados',
          rota: '/pdv',
          icon: <Users2 color="#06B6D4" size={18} />,
        },
      ],
    },
    {
      title: 'Estoque',
      icon: <Archive color="#06B6D4" size={20} />,
      subMenuItems: [
        {
          title: 'Produtos',
          rota: '/pdv',
          icon: <Package color="#06B6D4" size={18} />,
        },
      ],
    },
    {
      title: 'Vendas',
      icon: <ShoppingCart color="#06B6D4" size={20} />,
      subMenuItems: [
        {
          title: 'PDV',
          rota: '/pdv',
          icon: <Newspaper color="#06B6D4" size={18} />,
        },
        {
          title: 'Devolução',
          rota: '/devolucao',
          icon: <Undo2 color="#06B6D4" size={18} />,
        },
      ],
    },
    {
      title: 'Gestão',
      icon: <FolderCog color="#06B6D4" size={20} />,
      subMenuItems: [
        {
          title: 'Metas',
          rota: '/pdv',
          icon: <Undo2 color="#06B6D4" size={18} />,
        },
        {
          title: 'Balanço',
          icon: <BarChart4 color="#06B6D4" size={18} />,
        },
        {
          title: 'Livro Caixa',
          icon: <BookMarked color="#06B6D4" size={18} />,
        },
        {
          title: 'Fluxo de Caixa',
          icon: <ArrowDownUpIcon color="#06B6D4" size={18} />,
        },
        {
          title: 'Lucro/Despesas',
          icon: <ShoppingBag color="#06B6D4" size={18} />,
        },
        {
          title: 'Analise de vendas',
          icon: <ShoppingBag color="#06B6D4" size={18} />,
        },
        {
          title: 'Analise Avançada',
          icon: <LineChart color="#06B6D4" size={18} />,
        },
        {
          title: 'Balanço Patrimonial',
          icon: <CandlestickChart color="#06B6D4" size={18} />,
        },
      ],
    },
    {
      title: 'Cadastros',
      icon: <PlusCircle color="#06B6D4" size={20} />,
      subMenuItems: [
        {
          title: 'ITEM1',
          rota: '/produto',

          icon: <ShoppingBag color="#06B6D4" size={18} />,
        },
        {
          title: 'ITEM2',
          icon: <Undo2 color="#06B6D4" size={18} />,
        },
      ],
    },
    {
      title: 'Comercial',
      icon: <GanttChart color="#06B6D4" size={20} />,
      subMenuItems: [
        {
          title: 'ITEM1',
          rota: '/produto',

          icon: <ShoppingBag color="#06B6D4" size={18} />,
        },
        {
          title: 'ITEM2',
          icon: <Undo2 color="#06B6D4" size={18} />,
        },
      ],
    },
    {
      title: 'Compras',
      icon: <Store color="#06B6D4" size={20} />,
      subMenuItems: [
        {
          title: 'ITEM1',
          icon: <ShoppingBag color="#06B6D4" size={18} />,
        },
        {
          title: 'ITEM2',
          icon: <Undo2 color="#06B6D4" size={18} />,
        },
      ],
    },
    {
      title: 'Contábil',
      icon: <Calculator color="#06B6D4" size={20} />,
      subMenuItems: [
        {
          title: 'ITEM1',
          icon: <ShoppingBag color="#06B6D4" size={18} />,
        },
        {
          title: 'ITEM2',
          icon: <Undo2 color="#06B6D4" size={18} />,
        },
      ],
    },
    {
      title: 'Fiscal',
      icon: <Wallet color="#06B6D4" size={20} />,
      subMenuItems: [
        {
          title: 'ITEM1',
          icon: <ShoppingBag color="#06B6D4" size={18} />,
        },
        {
          title: 'ITEM2',
          icon: <Undo2 color="#06B6D4" size={18} />,
        },
      ],
    },
    {
      title: 'Configurações',
      icon: <Settings color="#06B6D4" size={20} />,
      subMenuItems: [
        {
          title: 'ITEM1',
          icon: <ShoppingBag color="#06B6D4" size={18} />,
        },
        {
          title: 'ITEM2',
          icon: <Undo2 color="#06B6D4" size={18} />,
        },
      ],
    },
  ]

  const [subMenuOpen, setSubMenuOpen] = useState(
    Array(SideMenu.length).fill(false),
  )

  const toggleSubMenu = (index: any) => {
    setSubMenuOpen((prevSubMenuOpen) => {
      const updatedSubMenuOpen = [...prevSubMenuOpen]
      updatedSubMenuOpen[index] = !updatedSubMenuOpen[index]
      return updatedSubMenuOpen
    })
  }

  return (
    <>
      <div className="flex">
        <div
          className={`${
            open ? 'w-72' : 'w-32'
          } relative max-h-screen overflow-y-auto bg-[#6096B4] p-5 pt-6 duration-700 scrollbar-none`}
        >
          {open ? (
            <ArrowLeftCircle
              size={36}
              color="#111"
              className="absolute -right-0 top-9 z-10 w-9 cursor-pointer rounded-full"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <ArrowRightCircle
              size={36}
              color="#111"
              className="absolute -right-0 top-9 z-10 w-9 cursor-pointer rounded-full"
              onClick={() => setOpen(!open)}
            />
          )}
          <div className="m-0 flex w-full flex-col items-center gap-x-3">
            <img
              src={LogoHome}
              alt=""
              className={`h-12 w-12 cursor-pointer rounded-xl duration-500 ${
                open && 'rotate-[360deg]'
              }`}
            />
            <h1
              className={`text-md origin-left font-medium text-white duration-500 ${
                !open && 'scale-0'
              }`}
            >
              SOFTWARE HOUSE
            </h1>
          </div>
          <div className="m-3 rounded-xl bg-white p-1 ">
            <ul>
              {SideMenu.map((menuItem, index) => (
                <div key={index}>
                  <Link to={menuItem.rota ? menuItem.rota : ''} key={index}>
                    <li
                      className="my-1 flex cursor-pointer flex-col items-center justify-between gap-x-2 space-x-1 rounded-md p-1 hover:bg-[#BDCDD6] "
                      onClick={() => toggleSubMenu(index)}
                    >
                      {menuItem.icon}
                      <span
                        className={`${
                          !open && 'hidden'
                        } origin-left text-sm font-medium uppercase text-cyan-500 duration-500`}
                      >
                        {menuItem.title}
                      </span>
                    </li>
                  </Link>
                  {menuItem.subMenuItems && subMenuOpen[index] && (
                    <ul>
                      {menuItem.subMenuItems.map((subItem, subIndex) => (
                        <Link
                          to={subItem.rota ? subItem.rota : ''}
                          key={subIndex}
                        >
                          <li className="items-centers my-1 flex origin-left cursor-pointer justify-center gap-x-2 rounded-md p-1 text-xs font-medium uppercase text-white duration-500 hover:bg-[#BDCDD6]">
                            <span className="flex w-full origin-left items-center justify-center gap-x-2 text-[10px] font-normal uppercase text-cyan-500 duration-500">
                              {subItem.icon}
                              {subItem.title}
                            </span>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex  w-24 items-center justify-center ">
              <LogOut color="red" size={40} />
              <h1 className="rounded-xl p-1 text-lg font-bold text-red-600">
                LOGOUT
              </h1>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
