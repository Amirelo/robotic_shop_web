// Components
import { CustomImage, CustomText } from "../../components";

// Icons
import { ic_linkedin } from "../../assets/social";

const ContactPage = () => {
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div style={{ width: "90%" }}>
        {/* General Info */}
        <CustomText preset={"title"} marginBottom={10}>
          General Info
        </CustomText>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: 20,
          }}
        >
          {/* Information */}
          <div style={styles.cardInfo}>
            <CustomText preset={"title"}>Information</CustomText>
            <CustomText>Location: Tan Phu</CustomText>
            <CustomText>Phone number: 058 281 4653</CustomText>
            <CustomText>Email: trandang210799@gmail.com</CustomText>
          </div>

          {/* Work hours */}
          <div style={styles.cardInfo}>
            <CustomText preset={"title"}>Work hour</CustomText>
            <CustomText>Mon to Fri: 8:00 AM - 7:00PM</CustomText>
            <CustomText>Sat: 8:00 AM - 12:00 PM</CustomText>
          </div>

          {/* Social media */}
          <div style={styles.cardInfo}>
            <CustomText preset={"title"} marginBottom={8}>
              Social media
            </CustomText>
            <CustomImage preset={"social"} src={ic_linkedin} />
          </div>
        </div>

        {/* Time line */}
        <div style={{ marginBottom: 20 }}>
          <CustomText preset={"title"}>Our Timeline</CustomText>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                ...styles.blockContainer,
                right: 60,
              }}
            >
              <p style={{ ...styles.block, backgroundColor: "#5356FF" }}></p>
              <p
                style={{
                  ...styles.block,
                  backgroundColor: "#67C6E3",
                  left: 20,
                }}
              ></p>
              <div
                style={{
                  ...styles.descriptionBlock,
                  backgroundColor: "#5356FF",
                  left: 60,
                }}
              >
                <div
                  style={{ ...styles.timeBlock, backgroundColor: "#67C6E3" }}
                >
                  <p>2023</p>
                </div>
                <p style={{ color: "white" }}>Create company</p>
              </div>
            </div>

            <div
              style={{
                ...styles.blockContainer,
                left: 60,
              }}
            >
              <p
                style={{
                  ...styles.block,
                  backgroundColor: "#5356FF",
                  right: 0,
                }}
              ></p>
              <p
                style={{
                  ...styles.block,
                  backgroundColor: "#67C6E3",
                  right: 20,
                }}
              ></p>
              <div
                style={{
                  ...styles.descriptionBlock,
                  backgroundColor: "#5356FF",

                  right: 60,

                  justifyContent: "flex-end",
                }}
              >
                <p style={{ color: "white" }}>Bankrupt</p>
                <div
                  style={{
                    ...styles.timeBlock,
                    backgroundColor: "#67C6E3",
                  }}
                >
                  <p>2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <CustomText preset={"title"} marginBottom={10}>
            Our team
          </CustomText>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              gap: 24,
              marginBottom: 10,
            }}
          >
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CustomImage
                preset={"team"}
                src={
                  "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress"
                }
              />
              <CustomText preset={"title"}>SEO</CustomText>
              <CustomText preset={"subTitle"}>Random Girl 1</CustomText>
            </article>

            <article
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CustomImage
                preset={"team"}
                src={
                  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress"
                }
              />
              <CustomText preset={"title"}>Store Manager</CustomText>
              <CustomText preset={"subTitle"}>Random Guy 1</CustomText>
            </article>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CustomImage
                preset={"team"}
                src={
                  "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress"
                }
              />
              <CustomText preset={"title"}>Logistics</CustomText>
              <CustomText preset={"subTitle"}>Random Guy 2</CustomText>
            </article>
            <article
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CustomImage
                preset={"team"}
                src={
                  "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress"
                }
              />
              <CustomText preset={"title"}>Delivery man</CustomText>
              <CustomText preset={"subTitle"}>Random Guy 3</CustomText>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

const styles: { [key: string]: React.CSSProperties } = {
  blockContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: 150,
    width: "50%",
  },
  block: {
    width: 100,
    height: 100,
    borderRadius: 12,
    rotate: "45deg",
    position: "absolute",
  },
  descriptionBlock: {
    position: "relative",
    display: "flex",
    gap: 16,
    padding: 8,
    alignItems: "center",

    width: "100%",
    borderRadius: 4,
  },
  timeBlock: {
    height: 40,
    paddingInline: 8,
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#5356FF",
    fontWeight: "bold",
    fontSize: 20,
  },
  cardInfo: {
    border: "1px solid black",
    borderRadius: 4,
    padding: 8,
    width: "20%",
  },
};
