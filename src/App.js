import './App.css';
import data from './data.js'
import Header from './components/Header'
import Card from './components/Card'
function App() {
  return (
    <div>
      <Header />
      {data.map(card => (
        <Card 
          title={card.title}
          location={card.location}
          googleMapsUrl={card.googleMapsUrl}
          startDate={card.startDate}
          endDate={card.endDate}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );

}

export default App;
