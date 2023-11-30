import { userDetails } from "./data/userDetails";
import { useState } from "react";

export function Notification() {
  const unRead = userDetails.filter((isUnRead) => !isUnRead.isRead);
  const read = userDetails.filter((hasRead) => hasRead.isRead);
  const [unReadCount, setUnReadCount] = useState(unRead.length);
  const [isReading, setIsRead] = useState(true);
  console.log(unReadCount);

  const handleClick = () => {
    setIsRead(false);
    setUnReadCount(0);
  };

  const notReadNotificationItems = unRead.map((details) => (
    <div className="flex mb-8 gap-5   items-start" key={details.id}>
      <img className="w-[44.8px] object-contain" src={details.imgId} />
      <div className="w-full">
        <div className="grid grid-cols-[auto,1fr]">
          <h2 className="space-x-2 col-span-full">
            <a href="#" className="font-bold hover:text-blue">
              {details.name}
            </a>
            <span className="text-base font-light text-Grayish-blue">
              {details.action}
            </span>
            {details.description !== "" && (
              <a
                href="#"
                className="font-semibold hover:text-blue text-Dark-grayish-blue"
              >
                {details.description}
              </a>
            )}
            {/* <a>{details.description}</a> */}
            {isReading && (
              <span className=" text-base font-extrabold text-red">
                &#x2022;
              </span>
            )}
            {/* <span className=" text-base font-extrabold text-red">{isItRead === false &&}&#x2022;</span> */}
          </h2>
          <p className="row-start-2 text-base font-light text-Grayish-blue">
            {details.time}
          </p>
          {details.message && (
            <p
              className="row-start-3 mt-1 text-Dark-grayish-blue hover:bg-Light-grayish-blue-1
             rounded-md p-4 border-Grayish-blue border-solid border-2"
            >
              <a href="#">{details.message}</a>
            </p>
          )}
        </div>
      </div>
    </div>
  ));
  const hasReadNotificationItems = read.map((details) => (
    <div className="flex mb-8 gap-4 items-start" key={details.id}>
      <img className="w-[44.8px] object-contain" src={details.imgId} />
      <div className="w-full">
        <div className="grid grid-cols-[auto,auto] ">
          <h2 className="space-x-2 ">
            <a href="#" className="font-bold hover:text-blue">
              {details.name}
            </a>
            <span className="text-base font-light text-Grayish-blue">
              {details.action}
            </span>
            {details.description && (
              <a
                href="#"
                className="font-semibold hover:text-blue text-Dark-grayish-blue"
              >
                {details.description}
              </a>
            )}
            {/* {details.descriptionImg && (
              <a className='row-start-1 col-start-3 '>
                <img src={details.descriptionImg} className="w-[44.8px]" />
              </a>
            )} */}
          </h2>
          {details.descriptionImg && (
            <a href="#" className="md:ml-auto ">
              <img src={details.descriptionImg} className="w-[44.8px]" />
            </a>
          )}
          <p className="row-start-2 text-base font-light text-Grayish-blue">
            {details.time}
          </p>
          {details.message && (
            <p
              className="row-start-3 mt-1 text-Dark-grayish-blue hover:bg-Light-grayish-blue-1
             rounded-md p-4 border-Light-grayish-blue-2 border-solid border-[1px]"
            >
              <a href="#">{details.message}</a>
            </p>
          )}
        </div>
      </div>
    </div>
  ));
  return (
    <div className=" mx-[15.5px] md:mx-[30px] pt-6 md:my-[64px] md:pt-[24px]">
      <div className="flex justify-between mb-10">
        <div className=" font-bold text-xl">
          <h3>
            Notification{" "}
            <span className="bg-blue rounded-[0.35rem] text-[0.95rem] font-medium px-[11.2px] py-[2.5px] text-white">
              {unReadCount}
            </span>
          </h3>
        </div>
        <button
          className="text-Grayish-blue text-[15.35px] font-light hover:text-blue "
          onClick={handleClick}
        >
          <a href="#">Mark all as read</a>
        </button>
      </div>
      {notReadNotificationItems}
      {hasReadNotificationItems}
    </div>
  );
}
