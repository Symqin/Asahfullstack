import { SayHello, KatakanHalo } from './SayHello';
import News from './news.jsx';

function App() {
  return (
    <div>
      <SayHello name="John" age={30} />
      <KatakanHalo name="Jane" age={25} />
      <News
        title="Annual Planting"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet sagittis metus, eget dapibus risus laoreet sed. Praesent ante magna ..."
        image="https://picsum.photos/id/239/800/600"
        isFeatured={true}
        tags={['plant', 'nature']}
        bookmark={() => alert('Bookmarked!')}
        style={{
          width: 300,
          border: '1px solid black',
          margin: '0 auto',
          padding: 16,
          borderRadius: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}
      />
    </div>

  
  );
}

export default App;