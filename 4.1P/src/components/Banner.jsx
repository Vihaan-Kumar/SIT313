import { Image, Segment } from "semantic-ui-react";

function Banner() {
  return (
        <Segment basic textAlign="center">
      <div style={{ 
        width: "100%", 
        height: "350px",      
        overflow: "hidden"    
      }}>
        <img
          src="/pictures/Banner.jpg"
          alt="Main Banner"
          style={{
            width: "100%",
            objectFit: "cover",   
            objectPosition: "top"  
          }}
        />
      </div>
    </Segment>
  );
}

export default Banner;
