import BookTableStyles from "styles/components/BookTable/BookTable.module.scss";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import animationController from "./utils/animationController";

const BookTable = () => {
  return (
    <InView
      as="div"
      className={BookTableStyles.container}
      threshold={[0.05]}
      onChange={animationController}
    >
      <div className={BookTableStyles.animations_container}>
        <div className={BookTableStyles.animation_one}>
          <figure>
            <Image
              src="/images/BookTable/book-table-element-1.png"
              width="212px"
              height="227px"
              alt="animation"
            />
          </figure>
        </div>
        <div className={BookTableStyles.animation_two}>
          <figure>
            <Image
              src="/images/BookTable/book-table-element-2.png"
              width="340px"
              height="478px"
              alt="animation"
            />
          </figure>
        </div>
      </div>
      <div className={BookTableStyles.main_content}>
        <h2 className={BookTableStyles.heading2}>Reservation</h2>
        <h1 className={BookTableStyles.heading1}>Book a table</h1>
        <div className={BookTableStyles.heading_image_container}>
          <figure className={BookTableStyles.heading_image}>
            <Image
              src="/images/aboutus/heading-element.png"
              alt=""
              width="171px"
              height="21px"
            />
          </figure>
          <div className={BookTableStyles.dates}>
            <div>
              <span>Mon - Fri:</span> 10am - 10pm
            </div>
            <div>
              <span>Sat - Sun:</span> 9am - 12pm
            </div>
          </div>
          <div className={BookTableStyles.form}>
            <form action="#">
              <div className={BookTableStyles.form_booktable}>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className={BookTableStyles.form_booktable}>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className={BookTableStyles.form_booktable}>
                <input type="number" name="phone" placeholder="Phone" />
              </div>
              <div className={BookTableStyles.form_booktable}>
                <input
                  type="number"
                  name="numberOfPeople"
                  placeholder="No. of people"
                />
              </div>
              <div className={BookTableStyles.form_booktable}>
                <input type="date" name="date" placeholder="YY-MM-DD" />
              </div>
              <div className={BookTableStyles.form_booktable}>
                <select>
                  <option>Please select</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className={BookTableStyles.form_booktable_message}>
                <textarea placeholder="Message"></textarea>
              </div>
              <button
                type="submit"
                className={BookTableStyles.form_booktable_button}
              >
                Book Table
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default BookTable;
