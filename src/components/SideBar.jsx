export default function SideBar(props) {
    const{handleToggleModal} = props

  return (
    <div className="sideBar">
        <div onClick={handleToggleModal} className='bgOverlay'></div>
        <div className='sidebarContents'>
        <h2>The Brutal Martian Landscape</h2>
        <div>
            <p>Description</p>
            <p> gerwgergergergergerg
                ergergergergerg
                ergergerg
            </p>
            </div>
            <button onClick={handleToggleModal}>
                <i class="fa-solid fa-right-long"></i>
            </button>
        </div>
    </div>
  )
}