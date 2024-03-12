import { useLocation } from "react-router-dom";
import { GoChevronUp } from "react-icons/go";

import Address from "../../components/Address";
import { getStoreOpenStatus } from "../../services/helpers";

import "./StoreDetails.scss";

const StoreDetails = () => {
  const { state } = useLocation();
  const showStoreOpenStatus = getStoreOpenStatus(state);
  const timings = Object.entries(state.store_timings);
  const today = new Date().getDay() - 1;

  return (
    <main className="container store-details-container">
      <div className="row h-100">
        <section className="col-lg-5 offset-lg-1 col-xs-12 img-container pb-1">
          <img alt={state.branch_name} src={state.image} />
        </section>

        <section className="col-lg-5 h-auto branch-details-container">
          <div className="d-flex flex-column justify-content-center h-100">
            <p className="branch-name">{state.branch_name} Branch</p>
            <p className="description">{state.description}</p>

            <div className="row">
              <section className="col-lg-6 col-xs-12">
                <p className="sub-heading">Contact Details</p>

                <div className="address-container">
                  <Address address={state.address} className="address" />
                </div>

                <p className="mt-3 contact-details">{state.phone_no}</p>
                <p className="contact-details">{state.email}</p>
              </section>

              <section className="col-lg-6 col-xs-12">
                <p className="sub-heading store-timings">Store Timings</p>
                <p className="store-open-status">
                  {showStoreOpenStatus} <GoChevronUp />
                </p>

                {timings.map((timing, index) => (
                  <div className="row" key={index}>
                    <section className="col-lg-6 col-5">
                      <p
                        className={`default-timings ${
                          index === today ? "today-timings" : "timings"
                        }`}
                      >
                        {timing[0]}
                      </p>
                    </section>
                    <section className="col-lg-6 col-4">
                      <p
                        className={`default-timings ${
                          index === today ? "today-timings" : "timings"
                        }`}
                      >
                        {timing[1]}
                      </p>
                    </section>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default StoreDetails;
