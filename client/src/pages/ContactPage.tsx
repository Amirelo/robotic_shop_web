// Components
import { ic_linkedin } from "../assets/social";
import { CustomImage, CustomText } from "../components";

const ContactPage = () => {
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div style={{ width: "90%" }}>
        <CustomText preset={"title"} marginBottom={10}>
          General Info
        </CustomText>
        <div style={{ display: "flex", justifyContent: "space-around", marginBottom:20 }}>
          <div
            style={{
              border: "1px solid black",
              borderRadius: 4,
              padding: 8,
              width: "20%",
            }}
          >
            <CustomText preset={"title"}>Information</CustomText>
            <CustomText>Location: Tan Phu</CustomText>
            <CustomText>Phone number: 058 281 4653</CustomText>
            <CustomText>Email: trandang210799@gmail.com</CustomText>
          </div>

          <div
            style={{
              border: "1px solid black",
              borderRadius: 4,
              padding: 8,
              width: "20%",
            }}
          >
            <CustomText preset={"title"}>Work hour</CustomText>
            <CustomText>Mon to Fri: 8:00 AM - 7:00PM</CustomText>
            <CustomText>Sat: 8:00 AM - 12:00 PM</CustomText>
          </div>

          <div
            style={{
              border: "1px solid black",
              borderRadius: 4,
              padding: 8,
              width: "20%",
            }}
          >
            <CustomText preset={"title"} marginBottom={8}>
              Social media
            </CustomText>
            <CustomImage preset={"social"} src={ic_linkedin} />
          </div>
        </div>

        <div style={{marginBottom:20}}>
            <CustomText preset={"title"}>Our Timeline</CustomText>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center'}}>
                
                <div style={{position:'relative', display:'flex', alignItems:'center', height:150, width:'50%', right:60}}>
                    <p style={{width:100, height:100, backgroundColor:'#5356FF', borderRadius:12, rotate:'45deg', position:'absolute'}}></p>
                    <p style={{width:100, height:100, backgroundColor:'#67C6E3', borderRadius:12, rotate:'45deg', position:'absolute', left:20}}></p>
                    <div style={{position:'relative',backgroundColor:"#5356FF", display:'flex', gap:16,padding:8, alignItems:'center', left:60, width:'100%', borderRadius:4}}>
                        <div style={{width:40, height:40, borderRadius:4, backgroundColor:"#67C6E3", display:'flex', alignItems:'center', justifyContent:'center', color:'#5356FF', fontWeight:'bold', fontSize:20 }}>
                        <p>1</p>
                        </div>
                        <p style={{color:'white'}}>Testing</p>
                    </div>
                </div>

                <div style={{position:'relative', display:'flex', alignItems:'center', height:150, width:'50%', left:60}}>
                    <p style={{width:100, height:100, backgroundColor:'#5356FF', borderRadius:12, rotate:'45deg', position:'absolute', right:0}}></p>
                    <p style={{width:100, height:100, backgroundColor:'#67C6E3', borderRadius:12, rotate:'45deg', position:'absolute', right:20}}></p>
                    <div style={{position:'relative',backgroundColor:"#5356FF", display:'flex', gap:16,padding:8, alignItems:'center', right:60, width:'100%', borderRadius:4, justifyContent:'flex-end'}}>
                        <p style={{color:'white'}}>Testing</p>
                        <div style={{width:40, height:40, borderRadius:4, backgroundColor:"#67C6E3", display:'flex', alignItems:'center', justifyContent:'center', color:'#5356FF', fontWeight:'bold', fontSize:20 }}>
                        <p>2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
        <CustomText preset={"title"} marginBottom={10}>
          Our team
        </CustomText>
        <div style={{display:'flex', justifyContent:'space-around', gap: 24, marginBottom:10}}>
        <article style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <CustomImage preset={"team"} src={"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"}/>
          <CustomText preset={"title"}>SEO</CustomText>
          <CustomText preset={"subTitle"}>Random Girl 1</CustomText>
          </article>

          <article style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <CustomImage preset={"team"} src={"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"}/>
          <CustomText preset={"title"}>Store Manager</CustomText>
          <CustomText preset={"subTitle"}>Random Guy 1</CustomText>
          </article>
          <article style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <CustomImage preset={"team"} src={"https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg"}/>
          <CustomText preset={"title"}>Logistics</CustomText>
          <CustomText preset={"subTitle"}>Random Guy 2</CustomText>
          </article>
          <article style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <CustomImage preset={"team"} src={"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"}/>
          <CustomText preset={"title"}>Delivery man</CustomText>
          <CustomText preset={"subTitle"}>Random Guy 3</CustomText>
          </article>
          <article style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <CustomImage preset={"team"} src={"https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg"}/>
          <CustomText preset={"title"}>Supplier</CustomText>
          <CustomText preset={"subTitle"}>Random Girl 2</CustomText>
          </article>
          <article style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <CustomImage preset={"team"} src={"https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg"}/>
          <CustomText preset={"title"}>EAT Lead</CustomText>
          <CustomText preset={"subTitle"}>Random Guy 4</CustomText>
          </article>
          </div>
</div>
      </div>
    </div>
  );
};

export default ContactPage;
