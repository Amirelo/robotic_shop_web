// React and libs
import React from "react";

// Components
import { CustomText } from "../../components";
import { SearchBar } from "../../features/products";

const HomePage = () => {
  const [showSearch, setShowSearch] = React.useState(false);

  const onSearchIconPressed = () => {
    setShowSearch(prev => !prev);
  };

  return (
    <div>
      {/* Navigation */}
      <header>
        <nav style={{ display: "flex", justifyContent: "flex-end", alignItems:'center', height:52, gap: 16 }}>
        {/* Search bar */}
        {showSearch ? (
              <SearchBar/>
            ) : (
              <></>
            )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: 16,
              paddingRight: 20,
            }}
          >
            
            
            <img
            width={24}
            height={24}
              src="/icons/ic_search.svg"
              onClick={onSearchIconPressed}
              alt=""
            />
            <p>Contact us</p>
            <p>Location</p>
            <p>Sign In</p>
          </div>
        </nav>

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
        </nav>
      </header>
      <main>
        {/* Category */}
        <div
          style={{
            width: 200,
            display: "flex",
            position: "relative",
            textAlign: "center",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <img
            style={{ width: "100%", position: "relative" }}
            src="https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg"
            alt=""
          />
          <p
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              backgroundImage:
                "linear-gradient(to top,gold 20%, rgba(255,0,0,0))",
            }}
          >
            Robot parts
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignItems: "center",
          }}
        >
          <img
            src="https://images.pexels.com/photos/8849287/pexels-photo-8849287.jpeg"
            height={350}
            width={"20%"}
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/844874/pexels-photo-844874.jpeg"
            height={300}
            width={"20%"}
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/8294666/pexels-photo-8294666.jpeg"
            height={350}
            width={"20%"}
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/8566428/pexels-photo-8566428.jpeg"
            height={300}
            width={"20%"}
            alt=""
          />
        </div>

        <h2>New Products</h2>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
        </section>

        <h2>Robotics</h2>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
        </section>

        <h2>Kits</h2>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
        </section>

        <h2>Robots</h2>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
        </section>

        <h2>Parts</h2>
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
          <article
            style={{
              backgroundColor: "gold",
              padding: 8,
              borderRadius: 4,
              width: "20%",
              justifySelf: "left",
              alignSelf: "flex-start",
            }}
          >
            <img
              style={{ borderRadius: 4, width: "100%" }}
              src="https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg"
              alt=""
            />
            <p>Test product</p>
            <div style={{ display: "flex", gap: 16 }}>
              <p>50.000VND</p>
              <p style={{ textDecorationLine: "line-through" }}>67.000VND</p>
            </div>
            <p>Rating stars</p>
            <p>Instock: 18 units</p>
            <button style={{ width: "100%" }}>Add To Cart</button>
          </article>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
