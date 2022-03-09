import React from "react";
import css from "../styles/PostCard.module.css";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaEye } from "react-icons/fa";
import moment from "moment";

const PostCard = ({ charData }) => {
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
          <div className={css.imgContainer}>
            <img className={css.img} src={data.image} alt={data.slug} />
          </div>

          <div className={css.cardDetails}>
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
        <div className={css.card}>
          <div className={css.imgContainer}>
            <img className={css.img} src={data.image} alt={data.slug} />
          </div>

          <div className={css.cardDetails}>
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
        <div className={css.card}>
          <div className={css.imgContainer}>
            <img className={css.img} src={data.image} alt={data.slug} />
          </div>

          <div className={css.cardDetails}>
            <div className="name">
              <h3>{data.name}</h3>
              <span className={css.nameAs}>{data.name_as}</span>
            </div>

            <div className={css.bio}>{data.short_text}</div>

            <div className="social">
              <a target="_blank" href={data.ig}>
                <FaInstagram className={css.icon} />
              </a>
              <a target="_blank" href={data.twitter}>
                <FaTwitter className={css.icon} />
              </a>
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
        <div className={css.card}>
          <div className={css.imgContainer}>
            <img className={css.img} src={data.image} alt={data.slug} />
          </div>

          <div className={css.cardDetails}>
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
