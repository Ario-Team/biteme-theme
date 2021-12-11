import UpcomingEventsStyle from "styles/components/UpcomingEvents/UpcomingEvents.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faClock } from "@fortawesome/free-solid-svg-icons";

const UpcomingEvents = () => {
  return (
    <div className={UpcomingEventsStyle.container}>
      <h2 className={UpcomingEventsStyle.heading2}>Enjoy our</h2>
      <h1 className={UpcomingEventsStyle.heading1}>Upcoming Events</h1>
      <div
        style={{ position: "relative" }}
        className={UpcomingEventsStyle.events_container}
      >
        <section className={UpcomingEventsStyle.event_container}>
          <figure className={UpcomingEventsStyle.event_image_container}>
            <Image
              className={UpcomingEventsStyle.event_image}
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/event-1.jpg"
              layout="fill"
              width="571px"
              height="318px"
              alt="Event image"
            />
            <div className={UpcomingEventsStyle.event_date}>
              <span>26 apr</span>
            </div>
          </figure>
          <Link href="/events/newYear" passHref>
            <h3 className={UpcomingEventsStyle.event_title}>
              New year party with DJ
            </h3>
          </Link>
          <ul className={UpcomingEventsStyle.event_address_time}>
            <li className={UpcomingEventsStyle.event_address}>
              <FontAwesomeIcon icon={faMapMarker} />
              Foody Restaurant, Est bay 12356
            </li>
            <li className={UpcomingEventsStyle.event_time}>
              <FontAwesomeIcon icon={faClock} />
              6PM to 12PM
            </li>
          </ul>
          <div style={{ clear: "both" }}></div>
          <Link href="/book" passHref>
            <button className={UpcomingEventsStyle.event_button}>
              Book Ticket
            </button>
          </Link>
        </section>
        <section className={UpcomingEventsStyle.event_container}>
          <figure className={UpcomingEventsStyle.event_image_container}>
            <Image
              className={UpcomingEventsStyle.event_image}
              src="http://kalanidhithemes.com/live-preview/landing-page/BiteMe/html/black-version/images/event-2.jpg"
              layout="fill"
              width="571px"
              height="318px"
              alt="Event image"
            />
            <div className={UpcomingEventsStyle.event_date}>
              <span>26 apr</span>
            </div>
          </figure>
          <Link href="/events/newYear" passHref>
            <h3 className={UpcomingEventsStyle.event_title}>
              DJ &#38; Dance Party
            </h3>
          </Link>
          <ul className={UpcomingEventsStyle.event_address_time}>
            <li className={UpcomingEventsStyle.event_address}>
              <FontAwesomeIcon icon={faMapMarker} />
              Foody Restaurant, Est bay 12356
            </li>
            <li className={UpcomingEventsStyle.event_time}>
              <FontAwesomeIcon icon={faClock} />
              6PM to 12PM
            </li>
          </ul>
          <div style={{ clear: "both" }}></div>
          <Link href="/book" passHref>
            <button className={UpcomingEventsStyle.event_button}>
              Book Ticket
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default UpcomingEvents;
