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

const PostCard = ({ data }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  console.log(data);

  return (
    <div className={css.container}>
      <div className={css.cardContainer}>
        <div className={css.card}>
          <div className={css.faIcon} onClick={handleClick}>
            <i>{clicked ? <FaRegEyeSlash /> : <FaRegEye />}</i>
          </div>

          <div className={css.imgContainer}>
            <img
              className={`${css.img} `}
              src={data.image.url}
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
              <a target="_blank" href={data.ig}>
                <span>
                  <FaInstagram className={css.icon} />
                </span>
              </a>
              <a target="_blank" href={data.twitter}>
                <span>
                  <FaTwitter className={css.icon} />
                </span>
              </a>
            </div>

            <div>
              <Link href={`/post/${data.slug}`}>
                <span className="iconEye">
                  <FaEye className={css.eye} />
                </span>
              </Link>
            </div>
            <div>
              <p>
                Posted on {
                  moment.data.createdAt()
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
