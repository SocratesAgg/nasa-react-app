// filepath: c:\Users\Sokag\OneDrive\Σωκράτης\Android_Studio\react\nasa-react-app\src\components\Main.jsx

export default function Main(props) {
  const { data } = props;
  return (
    <div className='imgContainer'>
      <img 
        src={data.hdurl}
        alt={data.title || 'bg-img'}
        className="bgImage"
      />
    </div>
  )
}