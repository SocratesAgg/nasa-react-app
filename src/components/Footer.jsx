export default function Footer(props) {
    const{handleToggleModal} = props

  return (
    <footer>
        <div className="bgGradient">
            <h2>The Brutal Martian Landscape</h2>
            <h1>Nasa Socrates PROJECT</h1>
        </div>
        <button onClick={handleToggleModal}>
            <i class="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}