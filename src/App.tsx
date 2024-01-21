import { DarkModeToggle, WaterDropView } from './components'

function App() {
  return (
    <main className='container mx-auto h-screen grid place-content-center'>
      <DarkModeToggle />
      <WaterDropView>
        <p className='text-3xl'>Hello World</p>
      </WaterDropView>
    </main>
  )
}

export default App
