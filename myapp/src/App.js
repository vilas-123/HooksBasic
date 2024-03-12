import React from 'react';
import './App.css';
import Demo from './Components/Demo'
import Counter from './Components/Counter';
import Hookcounter from './Components/Hookcounter';
import Hooktwo from './Components/Hooktwo';
import HookcounterThree from './Components/HookcounterThree';
import Hookcounterfour from './Components/Hookcounterfour';
import Hookcounterfive from './Components/Hookcounterfive';
import Hookmouse from './Components/Hookmouse';
import Mousecontainer from './Components/Mousecontainer';
import IntervalCounter from './Components/IntervalCounter';
import Datafetch from './Components/Datafetch';
import ComponentA from './Components/ComponentA';
import Usereducercounter from './Components/Usereducercounter';
import UserProfile from './Components/UserProfile';
import Usereducercountertwo from './Components/Usereducercountertwo';
import Parent from './Components/Parent';
import Todo from './Components/Todo';
import Memo from './Components/Memo';
import Ref from './Components/Ref';
import Hooktimer from './Components/Hooktimer';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();



function App() {
  return (
    <div className="App">
        {/* <PostList /> */}
        {/* <Demo /> */}
     
        {/* <Hooktwo /> */}
        {/* <Hookcounter /> */}
        {/* <Hookcounterfour/> */}
        {/* <Hookcounterfive/> */}
      {/* <IntervalCounter /> */}
      {/* <Datafetch/> */}
      {/* <UserContext.Provider value={'VILAS'}>
       <ChannelContext.Provider value={'Beehyv'}>
         <ComponentA/>
       </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <Usereducercounter /> */}
      <UserProfile />
      {/* < Parent /> */}
      {/* <Todo /> */}
    
    </div>
  );
}

export default App;
