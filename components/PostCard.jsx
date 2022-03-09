import React, { useState } from "react";
import css from "../styles/PostCard.module.css";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaEye,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import moment from "moment";

const PostCard = ({ charData }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  console.log(charData);

  const data = {
    name: "Eoin Carrick",
    name_as: "iamthobi",
    slug: "eoin_carrick",
    ig: "https://www.instagram.com/alvaromorte",
    twitter: "https://twitter.com/alvaromorte",
    short_text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
    createdAt: "2022-03-08T13:05:39.048085+00:00",
    image: "https://media.graphcms.com/l7aPvgeYSCC8889qVPVc",
  };

  return (
    <div className={css.container}>
      <div className={css.cardContainer}>
        <div className={css.card}>
          <div className={css.faIcon} onClick={handleClick}>
            <i>{clicked ? <FaRegEyeSlash /> : <FaRegEye />}</i>
          </div>
          <div className={css.imgContainer}>
            <img
              className={`${css.img} ${clicked ? css.noView : css.view}`}
              src={data.image}
              alt={data.slug}
            />
          </div>

          <div
            className={`${css.cardDetails} ${clicked ? css.noView : css.view}`}
          >
            <div className="name">
              <h3>{data.name}</h3>
              <span className={css.nameAs}>{data.name_as}</span>
            </div>

            <div className={css.bio}>{data.short_text}</div>

            <div className="social">
              <Link href={data.ig}>
                <span>
                  <FaInstagram className={css.icon} />
                </span>
              </Link>
              <Link href={data.twitter}>
                <span>
                  <FaTwitter className={css.icon} />
                </span>
              </Link>
            </div>

            <div>
              <Link href={data.slug}>
                <span className="iconEye">
                  <FaEye className={css.eye} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={css.cardContainer}>
        <div className={css.card}>
          <div className={css.faIcon} onClick={handleClick}>
            <i>{clicked ? <FaRegEyeSlash /> : <FaRegEye />}</i>
          </div>
          <div className={css.imgContainer}>
            <img
              className={`${css.img} ${clicked ? css.noView : css.view}`}
              src={data.image}
              alt={data.slug}
            />
          </div>

          <div
            className={`${css.cardDetails} ${clicked ? css.noView : css.view}`}
          >
            <div className="name">
              <h3>{data.name}</h3>
              <span className={css.nameAs}>{data.name_as}</span>
            </div>

            <div className={css.bio}>{data.short_text}</div>

            <div className="social">
              <Link href={data.ig}>
                <span>
                  <FaInstagram className={css.icon} />
                </span>
              </Link>
              <Link href={data.twitter}>
                <span>
                  <FaTwitter className={css.icon} />
                </span>
              </Link>
            </div>

            <div>
              <Link href={data.slug}>
                <span className="iconEye">
                  <FaEye className={css.eye} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={css.cardContainer}>
        <div className={css.card}>
          <div className={css.faIcon} onClick={handleClick}>
            <i>{clicked ? <FaRegEyeSlash /> : <FaRegEye />}</i>
          </div>
          <div className={css.imgContainer}>
            <img
              className={`${css.img} ${clicked ? css.noView : css.view}`}
              src={data.image}
              alt={data.slug}
            />
          </div>

          <div
            className={`${css.cardDetails} ${clicked ? css.noView : css.view}`}
          >
            <div className="name">
              <h3>{data.name}</h3>
              <span className={css.nameAs}>{data.name_as}</span>
            </div>

            <div className={css.bio}>{data.short_text}</div>

            <div className="social">
              <Link href={data.ig}>
                <span>
                  <FaInstagram className={css.icon} />
                </span>
              </Link>
              <Link href={data.twitter}>
                <span>
                  <FaTwitter className={css.icon} />
                </span>
              </Link>
            </div>

            <div>
              <Link href={data.slug}>
                <span className="iconEye">
                  <FaEye className={css.eye} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={css.cardContainer}>
        <div className={css.card}>
          <div className={css.faIcon} onClick={handleClick}>
            <i>{clicked ? <FaRegEyeSlash /> : <FaRegEye />}</i>
          </div>
          <div className={css.imgContainer}>
            <img
              className={`${css.img} ${clicked ? css.noView : css.view}`}
              src={data.image}
              alt={data.slug}
            />
          </div>

          <div
            className={`${css.cardDetails} ${clicked ? css.noView : css.view}`}
          >
            <div className="name">
              <h3>{data.name}</h3>
              <span className={css.nameAs}>{data.name_as}</span>
            </div>

            <div className={css.bio}>{data.short_text}</div>

            <div className="social">
              <Link href={data.ig}>
                <span>
                  <FaInstagram className={css.icon} />
                </span>
              </Link>
              <Link href={data.twitter}>
                <span>
                  <FaTwitter className={css.icon} />
                </span>
              </Link>
            </div>

            <div>
              <Link href={data.slug}>
                <span className="iconEye">
                  <FaEye className={css.eye} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
