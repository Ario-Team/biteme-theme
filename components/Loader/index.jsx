import Styles from "styles/components/Loader/Loader.module.scss";

const Loader = ({ isLoading }) => {
  return (
    <div className={isLoading ? Styles.loader : Styles.display_none}>
      <figure className={Styles.loader_image}></figure>
    </div>
  );
};

export default Loader;
