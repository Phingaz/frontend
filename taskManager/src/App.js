import { useContext } from 'react';
import { EditPage } from './components/EditPage';
import { Landing } from './components/Landing';
import Main from './store/ctx';
import { Loader } from './components/Loader';



function App() {
  const editPage = useContext(Main)
  return (
    <div className="App" >
      {editPage.loading ? <Loader /> :

        <div>
          {!editPage.edit && <Landing />}
          {editPage.edit && <EditPage />}
        </div>
      }
      
    </div>
  );
}

export default App;
