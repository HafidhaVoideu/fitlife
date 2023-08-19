type SectionHeader = {
  title: string;
  btnText: string;
};
const SectionHeader = ({ title, btnText }: SectionHeader) => {
  console.log("bt-classes", btnText);
  return (
    <section
      className={` text-center md:${
        btnText === "about us" && "text-left"
      }    w-full `}
    >
      <button className="bg-coquelicot_2 text-coquelicot mb-8 rounded-md  px-6 py-2 sx:text-sm md:text-lg lg:text-xl  uppercase   font-bold">
        {btnText}
      </button>

      <h1
        className={`${
          btnText === "our classes" ? "text-white" : "text-blackfogra_3"
        } only:text-4xl  font-extrabold md:text-5xl lg:text-6xl `}
      >
        {title}
      </h1>
    </section>
  );
};

export default SectionHeader;
