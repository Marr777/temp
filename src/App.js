import logo from './logo.svg';
import './App.css';
import { Title } from './components/heading';
import { PetTitle } from './components/title';
import { RenderCard } from './components/petImg';
import { PetDescription } from './components/petDescription';

function App({page, card}) {
  return (
    <div className="App">
      <section>
        <Title>{page.title}</Title>
        <div>
          <PetTitle>{card.name}</PetTitle>
          <RenderCard>{card.img}</RenderCard>
          <PetDescription>{card.description}</PetDescription>
        </div>
      </section>
    </div>
  );
}

export default App;
