// React and libs
import React from "react";

// Components
import { CustomText } from "../../components";
import { ItemBanner } from "../../features/products";

const HomePage = () => {
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <main style={{width:'90%'}}>
        <ItemBanner 
        title="Buy some stuff"
        src="https://images.pexels.com/photos/20222375/pexels-photo-20222375/free-photo-of-scruffy-dog-in-meadow.jpeg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </ItemBanner>
        {/* Category */}
        <div
          style={{
            width: 200,
            height: 300,
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
