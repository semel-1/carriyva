import React from "react";

const Container = (props) => {
  return (
    <div className={`bg-ServiceBG bg-cover bg-center ${props.className} w-full `}>
      <div className=" py-16 flex flex-col justify-between gap-36">
        <div className="flex flex-col items-center gap-10">
          <h3 className="font-semibold text-4xl text-center text-100">
            {props.title}
          </h3>
          {props.description && (
            <p className="font-medium text-base text-center text-75 w-3/5 ">
              {props.description}
            </p>
          )}
        </div>
        <div className="flex justify-center  ">{props.children}</div>
      </div>
    </div>
  );
};

export default Container;
