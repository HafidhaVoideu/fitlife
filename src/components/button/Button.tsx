type ButtonProps = {
  text: string;
  style: "white" | "black";
};

// bg-coquelicot text-white  font-primary font-medium  borderRad rounded-lg py-4 px-8

const Button = ({ text, style }: ButtonProps) => {
  return (
    <button
      className={`${
        style === "white" ? "btn--white" : "btn--black"
      }     bg-coquelicot text-white capitalize  font-primary font-medium rounded-lg py-4 px-9  lg:text-md
      hover:transition-colors duration-700  `}
    >
      {text}
    </button>
  );
};

export default Button;
