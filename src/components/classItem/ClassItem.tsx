type ClassProps = {
  photo: string;
  icon: string;
  classType: string;
  des: string;
  percentage: number;
};

const ClassItem = ({ icon, classType, des, photo, percentage }: ClassProps) => {
  return (
    <article className="rounded-lg bg-white flex-shrink-0 w-full max-w-sm md:w-[47%] ">
      {/* photo */}
      <div
        className="overflow-hidden mx-auto
      rounded-t-lg "
      >
        <img
          className="hover:scale-110 transition-transform ease-in-out duration-500  cursor-pointer"
          src={photo}
          alt="person-in-gym"
        />
      </div>

      {/* info */}

      <div className="p-6">
        {/* class type */}

        <div className=" flex justify-between items-center mb-4 ">
          <img src={icon} alt={`${classType}-icon`} />

          <div className="w-[0.04rem] h-12  bg-lightgray   "></div>
          <span className="capitalize font-extrabold text-lg ">
            {" "}
            {classType}
          </span>
        </div>

        <p className="text-sonicsilver">{des}</p>

        {/* progress */}

        <div>
          <div className="flex items-center justify-between my-4 font-bold">
            <span>Progress</span>
            <span>{percentage}%</span>
          </div>

          {/* progress Bar */}

          <div className="rounded-lg bg-coquelicot_2 ">
            <div
              className={` bg-coquelicot  rounded-lg  p-[.4rem]`}
              style={{
                width: `${percentage}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ClassItem;
