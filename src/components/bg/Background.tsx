import { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
  id: string;
};

const Background = ({ children, id }: BackgroundProps) => {
  return (
    <section id={id} className=" bg-blackfogra_2    ">
      <section
        className={`${
          id !== "contact" ? "section-bg  gradient__bg  " : "footer-bg"
        }`}
      >
        {children}
      </section>
    </section>
  );
};

export default Background;
