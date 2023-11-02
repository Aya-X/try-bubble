import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleParent = () => {
    console.log('Parent');
    setIsOpen(!isOpen);
  };

  const handleChild = (event) => {
    console.log('Child');
    event.stopPropagation();
  };

  return (
    <>
      <Container>
        <ParentContainer isOpen={isOpen} onClick={handleParent}>
          <ChildContainer onClick={handleChild}>A</ChildContainer>
        </ParentContainer>
      </Container>

      <Container>
        <ParentContainer isOpen={isOpen} onClick={handleParent}>
          <ChildContainer onClick={() => console.log('Child')}>
            B
          </ChildContainer>
        </ParentContainer>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  max-width: 1280px;
  margin: 2rem auto;
  padding: 2rem;
`;

const ParentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  height: 200px;
  width: ${(props) => (props.isOpen ? '400px' : '200px')};
  background-color: #fff;
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: salmon;
  }
`;

const ChildContainer = styled.div`
  width: 100px;
  padding: 1rem;
  text-align: center;
  background-color: #00a2ff;
  border-radius: 50px;
  border: 2px solid #fff;
  transition: all 0.25s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
