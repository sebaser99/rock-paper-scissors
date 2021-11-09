import React, {useState, createContext} from 'react'
import styled from 'styled-components'
import {Wrapper} from './Wrapper'
import {Header} from './Header'
import {Table} from './Table'
import {Rules} from './Rules'
import {Modal} from './Modal'

const AppStyled = styled.main `
background-image: radial-gradient(circle at top, #1f3761 30%, #131537 100%);


.app-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  padding: 1.4em;
  box-sizing: border-box;
}
`
export const ScoreContext = createContext()

function App() {
  const [score, setScore] = useState(0)
  const [openModal, setOpenModal] = useState(false)
   return (
     <>
     <ScoreContext.Provider value={{ 
       score, setScore
     }}>
      
      <AppStyled>
        <Wrapper>
          <div className="app-content" >
            <Header />
            <Table />
            <Rules setOpenModal={setOpenModal} />
          </div>
        </Wrapper>
      </AppStyled>
     </ScoreContext.Provider>

    {!!openModal && (
      <Modal setOpenModal={setOpenModal} />
    )
    }
    </>
  );
}

export default App;
