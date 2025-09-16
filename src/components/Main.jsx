// filepath: c:\Users\Sokag\OneDrive\Σωκράτης\Android_Studio\react\nasa-react-app\src\components\Main.jsx
import marsImg from '../assets/mars.png'; // adjust path if needed

export default function Main() {
  return (
    <div className='imgContainer'>
        <img 
            src={marsImg} alt="Mars" 
            className='bgImage'
        />
    </div>
  )
}