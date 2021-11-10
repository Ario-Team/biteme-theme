import BookTableStyles from "styles/components/BookTable/BookTable.module.scss";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BookTable = () => {
  return (
    <InView as="div" className={BookTableStyles.container}>
      <div className={BookTableStyles.animations}></div>
      <div className={BookTableStyles.main_content}>
        <h2 className={BookTableStyles.heading2}>Reservation</h2>
        <h1 className={BookTableStyles.heading1}>Book a table</h1>
        <div className={BookTableStyles.heading_image_container}>
          <figure>
            <Image
              src="/images/aboutus/heading-element.png"
              alt=""
              width="171px"
              height="21px"
            />
            <div className={BookTableStyles.dates}>
              <div>
                <span>Mon - Fri:</span> 10am - 10pm
              </div>
              <div>
                <span>Sat - Sun:</span> 9am - 12pm
              </div>
            </div>
          </figure>
          <div className={BookTableStyles.form}>
            <form action="#">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <input type="number" name="phone" placeholder="Phone" />
              <input
                type="number"
                name="numberOfPeople"
                placeholder="No. of people"
              />
              <input type="date" name="date" placeholder="YY-MM-DD" />
              <select>
                <option>Please select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <textarea placeholder="Message"></textarea>
              <button type="submit">
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
