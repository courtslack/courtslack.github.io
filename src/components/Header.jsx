import { BsStars } from "react-icons/bs";

function Header({ title, tagline }) {
  return (
    <div className="header">
      <header>{title}</header>

      <h4>
        {tagline}
        <BsStars className="header-star" />
      </h4>
    </div>
  )
}

export default Header