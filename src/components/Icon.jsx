
function Icon({icon}) {
  return (
    <li>
      <a>
      <i className={icon.class} role="img" aria-label={icon.text}></i>
      </a>
    </li>
  )
}

export default Icon;