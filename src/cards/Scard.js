import React from "react";

import { Link } from "react-router-dom";

const Scard = ({ item }) => {
  return (
    <Link
      to={`/search${item.name}`}
      style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
    >
      <div className="apibox">
        <img className="apimg" src={item.imageUrl} />
        <h5>{item.name}</h5>
      </div>
    </Link>
  );
};
export default Scard;



    // <>
    //   <Card variant="outlined" sx={{ maxWidth: 250 }}>
    //     {/* <img src={item.imageUrl} alt="testiamge" />
    // <p>{item.name}</p> */}

    //     <CardMedia component="img" image={item.imageUrl} alt="green iguana" />

    //     <CardContent>
    //       <Typography variant="body2" color="text.secondary">
    //         {item.name}
    //       </Typography>
    //     </CardContent>
    //   </Card>
    //   <br />
    // </>