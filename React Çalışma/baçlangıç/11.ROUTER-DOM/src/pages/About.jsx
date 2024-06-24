import { Link, Outlet } from "react-router-dom"
function About() {
    return (
        <div>
            <h1>About</h1>
            <hr />
            <Link to="employee">Çalışanlar Hk.</Link> {/* /about/employee gönderildi. Eğer /employee yazsaydık bunu kök kabul eder ve /employee diye ayrı bir sayfaya giderdi. */}
            <Link to="company">Firma Hk.</Link>

            <Outlet />

            {/* Outlet parent child arasındaki ilişki için geeklidir. abour/ 'dan sonrasının çalışması için kullanımı gereklidir. */}
        </div>
    )
}

export default About