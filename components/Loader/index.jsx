import Styles from "styles/components/Loader/Loader.module.scss";

const Loader = ({ isLoading }) => {
  return (
    <section className={isLoading ? Styles.loader : Styles.display_none}>
      <figure className={Styles.loader_image}></figure>
    </section>
  );
};

export default Loader;
