const HomePage = () => {
  return (
    <div>
      <header>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "50%",
            margin: "auto",
          }}
        >
          <a href="#">Home</a>
          <a href="#">Explore</a>
          <a href="#">Robotic kits</a>
          <a href="#">Robots</a>
          <a href="#">Contacts</a>
        </nav>
      </header>
      <main>
        <div style={{display:'flex', justifyContent:'center', gap:20, alignItems:'center'}}>
            <img src="https://images.pexels.com/photos/8849287/pexels-photo-8849287.jpeg" height={350} width={'20%'} alt="" />
            <img src="https://images.pexels.com/photos/844874/pexels-photo-844874.jpeg" height={300} width={'20%'} alt="" />
            <img src="https://images.pexels.com/photos/8294666/pexels-photo-8294666.jpeg" height={350} width={'20%'} alt="" />
            <img src="https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg" height={300} width={'20%'} alt="" />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
