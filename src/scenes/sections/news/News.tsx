import BlogItem from "../../../components/blogItem/BlogItem";
import SectionHeader from "../../../components/section-header/SectionHeader";
import { blogArticles } from "../../../data/data";
import { motion } from "framer-motion";

const News = () => {
  return (
    <section
      id="news"
      className="flex flex-col gap-14 items-center justify-center section mb-32"
    >
      <SectionHeader title="Latest Blog Feed" btnText="our news" />

      <motion.div className="flex flex-wrap gap-6  items-center justify-center sm:justify-between  w-full">
        {blogArticles.map((item) => (
          <BlogItem key={item.id} {...item} />
        ))}
      </motion.div>
    </section>
  );
};

export default News;
