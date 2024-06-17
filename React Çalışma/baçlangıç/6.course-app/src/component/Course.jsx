/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import '../css/Course.css'
function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className="course">
            <div>
                <img src={image} width={200} height={100} />
                <h4 className='course-title'>{title}</h4>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>{price} ₺</h3>
                <div className='course-link'><a href={link}>Gitmek için</a></div>
            </div>
        </div>
    )
}

export default Course