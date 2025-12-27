import React from "react";

const Card = ({ title, disc1, disc2, oldPrice, newPrice }) => {
  return (
    <>
      <div className=" inline-block w-70 border-2 border-yellow-300 mt-8 ml-8 rounded-3xl bg-cyan-400">
        <h3 className="font-extrabold pt-3 text-center">{title}</h3>

        <ul className="font-bold pt-40 ml-10 list-disc">
          <li> {disc1}</li>
          <li>{disc2}</li>
        </ul>

        <span className="h-12 w-full mt-4 text-center bg-yellow-200 inline-block rounded-2xl">
          <s className="inline-block mr-20 mt-2">{oldPrice}</s>
          <b>{newPrice}</b>
        </span>
      </div>
    </>
  );
};

export default Card;
