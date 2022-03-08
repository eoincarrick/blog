import React from "react";
import moment from "moment";

const PostCard = ({ charData }) => {
  console.log(charData);

  const data = {
    name: "Eoin Carrick",
    name_as: "iamthobi",
    slug: "eoin_carrick",
    short_text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit consectetur ex provident! Nobis corrupti dolorem iure, dicta nisi sunt consequuntur provident officia maiores et nihil veniam, at itaque aliquid vitae.",
    createdAt: "2022-03-08T13:05:39.048085+00:00",
    image: "https://media.graphcms.com/l7aPvgeYSCC8889qVPVc",
  };

  return (
    <div className="container py-10">
      <div className="bg-pink">
        <div id="card" className="px-10 rounded-lg drop-shadow-lg">
          <img
            src={data.image}
            alt={data.slug}
            className="object-middle absolute h-80 w-50 rounded-t-lg object-cover shadow-lg lg:rounded-lg"
          />
          <div className="h-80 w-30 bg-sky-500"></div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
