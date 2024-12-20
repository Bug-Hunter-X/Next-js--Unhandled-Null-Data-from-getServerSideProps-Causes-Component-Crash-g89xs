// pages/index.js

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data: data // Data could be null if the API fails
    },
  };
}

function Home({ data }) {
  //Improved error handling with optional chaining and nullish coalescing
  return (
    <div>
      <h1>{data?.title ?? 'No title available'}</h1>
      {/*If data or data.title is null/undefined, it gracefully displays 'No title available'*/}
      <pre>{JSON.stringify(data, null, 2)}</pre> {/*Helps debug the actual data received*/}
    </div>
  );
}

export default Home; 