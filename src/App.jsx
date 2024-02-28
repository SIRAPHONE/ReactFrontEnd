import Hello from './assets/Hello'
import Contact from './assets/Contact'
import Counter from './assets/Counter'

function App () {
const helloData = [
  {name: 'siraphong',message: 'Hi there'},
  {name: 'Tom',message: 'Hello..'}
];

return (
  <div className='App'>
  < counter/ >
  {helloData.map((data, index) => (
  <Hello key={index} name={data.name} message={data.message}/>
  ))}

  <Contact email="s6406021611077@email.kmutnb.ac.th" phone="0123456789"/>
  </div>
  )
}
export default App
