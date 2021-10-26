import Profile from "./profile/Profile";
import './App.css';
import Atef from "./Atef.jpg"
import Houssem from "./Houssem.jpg"
function App() {
  const handleName =(name)=>{
    alert(`Hello${name}`)
  }
  return (
    <div className="App">
      <Profile image={Atef} fullname="Atef Ali" bio="football lover" profession="Student" handleName={handleName} test={50}/>
      <Profile image={Houssem} fullname="Houssem Ben Ncira" bio="FIFA Sports Medicine graduate ⚽ 🎫" profession="Sports Physician and Physiotherapist" handleName={handleName} test={50}/>
     <Profile fullname ="Taha" test={60}/>
   </div>
    
  );
}




export default App;
