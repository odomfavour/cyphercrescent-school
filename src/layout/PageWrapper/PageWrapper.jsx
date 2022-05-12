import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
// import Loader from '../../components/Loading/Loading'


const PageWrapper = ({ children }) => {
  // const [isLoading, setIsLoading] = useState(false)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 3000)
  //   setIsLoading(true)
  // }, [])

  return (
    <main>
      <Header />
      <section>
        {children}
      </section>
      <Footer />
    </main>
  )
}

export default PageWrapper