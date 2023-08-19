import { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
  id: string;
};

const Background = ({ children, id }: BackgroundProps) => {
  return (
    <section id={id} className=" bg-blackfogra_2    ">
      <section className={`${id !== "footer" ? "section-bg" : "footer-bg"}`}>
        {children}
      </section>
    </section>
  );
};

export default Background;
