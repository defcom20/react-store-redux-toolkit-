

import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route, Outlet, Link, useSearchParams } from 'react-router-dom'
import NavLink from './NavLink'
import { increment, decrement, incrementBy } from './store/slices/counter'

function App() {

  const { counter } = useSelector(state => state.counter)

  const dispatch = useDispatch()

  const Inicio = () => <h1>inicio</h1>
  const Dashboader = () => {
    const path = [
      { id: 2, name: 'page 1', path: 'page1' },
      { id: 3, name: 'page 2', path: 'page2' },
      { id: 4, name: 'page 3', path: 'page3' },

    ]

    let subPath = location.pathname.split('/')[1];

    return (
      <>
        <div className="flex">
          <div className='w-[15%] h-[calc(100vh-48px)] bg-blue-200'>
            <Link to={`/${subPath}`} >
              <h1 className='text-gray-700 font-bold text-2xl flex justify-center items-center py-2'>dashboader</h1>
            </Link>
            <ul>
              {
                path.map((item, index) => {
                  return <NavLink key={index} to={item.path}>{item.name}</NavLink>
                })
              }
            </ul>
          </div>
          <div className="w-[85%] h-[calc(100vh-48px)] bg-red-700">
            <Outlet />
          </div>
        </div>
      </>
    )
  }
  const PageHome = () => {
    return (
      <>
        <h1 className="flex items-center justify-center text-3xl font-bold underline text-red-400 space-y-4">
          CONTADOR
        </h1>
        <span className='flex justify-center items-center text-3xl'>
          {counter}
        </span>
        <div className="flex items-center justify-center space-x-4">
          <button className='text-white px-4 py-2 rounded-full bg-gray-700' onClick={() => dispatch(increment())}>+</button>
          <button className='text-white px-4 py-2 rounded-full bg-green-700' onClick={() => dispatch(decrement())}>-</button>
          <button className='text-white px-4 py-2 rounded-full bg-green-700' onClick={() => dispatch(incrementBy(2))}> x2</button>
        </div>
      </>
    )
  }
  const Page1 = () => {
    return (
      <>
        <div className="grid grid-cols-2 gap-2 p-2">
          <div className="col-span-1 bg-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ipsum dolores at earum ullam, magni suscipit iure, pariatur ipsam sunt illum tempora voluptatem doloribus quos fugit veniam ratione culpa. Reiciendis?</div>
          <div className="col-span-1 bg-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis enim repellendus quibusdam, maiores dolorem voluptatibus sequi incidunt excepturi velit mollitia aliquid similique alias. Tempora exercitationem nam voluptatem accusantium ut ad!</div>
        </div>
      </>
    )
  }
  const Page2 = () => <h1>Page #2</h1>
  const Page3 = () => <h1>Page #3</h1>
  const Page4 = () => <h1>Page #4</h1>
  const Login = () => <h1>Login</h1>

  return (
    <div className="App">
      <header className='flex items-center justify-between bg-blue-400 px-3'>
        <h1 className='font-bold uppercase'>gitlab page</h1>
        <nav className='py-2 px-4'>
          <ul className='flex justify-center items-center space-x-6'>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><NavLink to='/dashboader'>Dashboader</NavLink></li>
            <li><NavLink to='/'>Inicio</NavLink></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/dashboader' element={<Dashboader />}>
          <Route index element={<PageHome />} />
          <Route path='page1' element={<Page1 />} />
          <Route path='page2' element={<Page2 />} />
          <Route path='page3' element={<Page3 />} />
          <Route path='page4' element={<Page4 />} />
          {/* <Route path=':namePage' element={<Page1 />} /> */}
        </Route>
        <Route path='*' element={<h1>404</h1>}></Route>
      </Routes>
      {/* <h1 className="flex items-center justify-center text-3xl font-bold underline text-red-400 space-y-4">
        CONTADOR
      </h1>
      <span className='flex justify-center items-center text-3xl'>
        {counter}
      </span>
      <div className="flex items-center justify-center space-x-4">
        <button className='text-white px-4 py-2 rounded-full bg-gray-700' onClick={ () => dispatch( increment() ) }>+</button>
        <button className='text-white px-4 py-2 rounded-full bg-green-700' onClick={ () => dispatch( decrement() ) }>-</button>
        <button className='text-white px-4 py-2 rounded-full bg-green-700' onClick={ () => dispatch( incrementBy(2) ) }> x2</button>
      </div> */}
    </div>
  )
}

export default App
