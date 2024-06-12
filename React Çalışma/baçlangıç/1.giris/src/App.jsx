
import './App.css'

function App() {
  // Jsx : Javascript + XML , {} sayesinde html kodlarına dönüştürülür.
  // Javascript kodları yazılır

  let isimler = ["Ahmet", "Mehmet", "Ali", "Veli"]

  return (
    // HTML kodları yazılır
    <div>
      {isimler.map((isim, index) => (
        <div key={index}>{isim}</div>
      ))}
    </div>
    

  )
}

 export default App // başka yerden import etmek için gerekli.
