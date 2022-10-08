import './App.css';
import data from './data.js'
import Header from './components/Header'
import Card from './components/Card'
function App() {
  return (
    <div>
      <Header />
      <Card 
        title={data[0].title}
        location={data[0].location}
        googleMapsUrl={data[0].googleMapsUrl}
        startDate={data[0].startDate}
        endDate={data[0].endDate}
        description={data[0].description}
        imageUrl={data[0].imageUrl}
      />
    </div>
  );

}

export default App;
