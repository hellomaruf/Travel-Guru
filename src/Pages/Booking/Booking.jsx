import { useState } from "react";
import Nav from "../../Shared/Nav";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

function Booking() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="">
      <div
        className="min-h-screen bg-cover"
        style={{
          backgroundImage: "url('/images/hero.png')",
        }}
      >
        <div className="bg-black min-h-screen bg-opacity-60">
          <Nav />
          <div className="flex items-center justify-center space-y-10 pt-5  max-w-7xl mx-auto ">
            <div className="flex-1 space-y-3">
              <h1 className="text-white font-bebas font-bold text-5xl">
                Cox's bazar
              </h1>
              <p className="text-white max-w-2xl ">
                Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
                known for its very long, sandy beachfront, stretching from Sea
                Beach in the north to Kolatoli Beach in the south. Aggameda
                Khyang monastery is home to bronze statues and centuries-old
                Buddhist manuscripts. South of town, the tropical rainforest of
                Himchari National Park has waterfalls and many birds. North, sea
                turtles breed on nearby Sonadia Island.
              </p>
            </div>
            <div className="">
              <form className="card-body bg-white rounded-xl">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <div className="flex gap-3">
                    <div className="">
                      <label className="label">
                        <span className="label-text">From</span>
                      </label>
                      <DatePicker
                        className="input input-bordered"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                    <div className="">
                      <label className="label">
                        <span className="label-text">To</span>
                      </label>
                      <DatePicker
                        className="input input-bordered"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <Link to='/login' className="btn bg-amber-400">Start Booking</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
