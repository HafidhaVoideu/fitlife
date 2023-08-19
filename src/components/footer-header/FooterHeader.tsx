type FooterHeader = {
  title: string;
};

const FooterHeader = ({ title }: FooterHeader) => {
  return (
    <header className="mb-8">
      <h1 className="underline text-white decoration-coquelicot  hover:text-coquelicot capitalize   underline-offset-[.6rem] text-xl font-extrabold cursor-pointer hover:decoration-white    ">
        {title}
      </h1>
    </header>
  );
};

export default FooterHeader;
