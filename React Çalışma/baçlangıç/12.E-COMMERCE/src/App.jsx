
import './App.css'
import Header from './components/Header'
import PageContainer from './container/PageContainer'


function App() {

  return (
    <div>

      <PageContainer PageContainer childeren={<Header />} >

      </PageContainer>

    </div>
  )
}

export default App
