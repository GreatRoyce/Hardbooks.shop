import React from "react";
import OrderSummary from "../../components/OrderSummary";
import NavBar from "../../../public/components/NavBar";

const getStatesFromApi = async () => {
  const response = await fetch("https://nga-states-lga.onrender.com/fetch");
  const json = await response.json();
  return json.states ?? json;
};

const getLgasFromApi = async (stateName) => {
  if (!stateName) return [];
  const response = await fetch(
    `https://nga-states-lga.onrender.com/?state=${encodeURIComponent(
      stateName,
    )}`,
  );
  const json = await response.json();
  return json.lga || [];
};

const texter = {
  base: "text-inverted/70 font-semibold text-xs mt-2 tracking-widest uppercase",
};
const inbg = {
  base: "text-inverted/80 bg-offwhite/50 text-sm p-2 border-b-2 border-inverted/20 w-full outline-0 focus:outline-none font-semibold tracking-widest ",
};

const fallbackStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT",
];

const CheckOut = () => {
  const [states, setStates] = React.useState([]);
  const [lgas, setLgas] = React.useState([]);
  const [selectedState, setSelectedState] = React.useState("");
  const [selectedLga, setSelectedLga] = React.useState("");
  const [statesLoading, setStatesLoading] = React.useState(true);
  const [statesError, setStatesError] = React.useState("");
  const [lgasLoading, setLgasLoading] = React.useState(false);
  const [lgasError, setLgasError] = React.useState("");
  const [stateLgaMap, setStateLgaMap] = React.useState(null);

  React.useEffect(() => {
    let isMounted = true;
    setStatesLoading(true);
    setStatesError("");
    getStatesFromApi()
      .then((data) => {
        if (!isMounted) return;
        if (Array.isArray(data)) {
          setStates(data);
          setStateLgaMap(null);
        } else if (data && typeof data === "object") {
          const keys = Object.keys(data);
          setStates(keys);
          setStateLgaMap(data);
        } else {
          setStates([]);
          setStateLgaMap(null);
        }
        setStatesLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setStates(fallbackStates);
        setStateLgaMap(null);
        setStatesError("Failed to load states. Using offline list.");
        setStatesLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  React.useEffect(() => {
    let isMounted = true;
    setSelectedLga("");
    if (!selectedState) {
      setLgas([]);
      setLgasLoading(false);
      setLgasError("");
      return () => {
        isMounted = false;
      };
    }

    if (stateLgaMap && stateLgaMap[selectedState]) {
      setLgas(stateLgaMap[selectedState]);
      setLgasLoading(false);
      setLgasError("");
      return () => {
        isMounted = false;
      };
    }

    setLgasLoading(true);
    setLgasError("");
    getLgasFromApi(selectedState)
      .then((data) => {
        if (!isMounted) return;
        setLgas(data);
        setLgasLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setLgas([]);
        setLgasError("Failed to load LGAs");
        setLgasLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [selectedState, stateLgaMap]);

  return (
    <div>
        <NavBar/>
      <div className="min-h-screen pt-16 sm:pt-20 flex flex-col lg:flex-row items-start lg:items-center justify-center gap-6 px-4 sm:px-8 pb-8">
        <div className="w-full lg:w-3/5 p-4 sm:p-6 flex flex-col items-start justify-center gap-2">
          <p className={texter.base}>Step 02/03</p>
          <p className="text-2xl sm:text-4xl font-semibold text-inverted">
            Delivery Details
          </p>

          <form className="flex flex-col space-y-4 w-full p-4 sm:p-8" action="">
            <p className={texter.base}>full name</p>
            <input
              type="text"
              placeholder="Johnson Maleek"
              className={inbg.base}
            />
            <p className={texter.base}>email</p>
            <input
              type="email"
              placeholder="myemail@gmail.com"
              className={inbg.base}
            />
            <p className={texter.base}>phone</p>
            <input type="tel" placeholder="07066666666" className={inbg.base} />

            <div
              className={`justify-center items-start sm:items-center gap-4 sm:gap-8 flex flex-col sm:flex-row ${texter.base}`}
            >
              <div className="flex flex-col w-full">
                <p>state</p>
                <select
                  className={`px-2 ${inbg.base}`}
                  value={selectedState}
                  onChange={(event) => setSelectedState(event.target.value)}
                  disabled={
                    statesLoading || (statesError && states.length === 0)
                  }
                >
                  <option value="">
                    {statesLoading
                      ? "Loading states..."
                      : statesError
                        ? "Failed to load states"
                        : "Select state"}
                  </option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full">
                <p>LGA</p>

                {lgasError && !lgasLoading && lgas.length === 0 ? (
                  <input
                    type="text"
                    placeholder="Enter LGA manually"
                    className={inbg.base}
                    value={selectedLga}
                    onChange={(event) => setSelectedLga(event.target.value)}
                  />
                ) : (
                  <select
                    className={`px-2 ${inbg.base}`}
                    value={selectedLga}
                    onChange={(event) => setSelectedLga(event.target.value)}
                    disabled={!selectedState || lgasLoading}
                  >
                    <option value="">
                      {!selectedState
                        ? "Select state first"
                        : lgasLoading
                          ? "Loading LGAs..."
                          : "Select LGA"}
                    </option>
                    {lgas.map((lga) => (
                      <option key={lga} value={lga}>
                        {lga}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            <p className={texter.base}>Detailed address</p>
            <input type="text" className={inbg.base} />
          </form>
        </div>
        <div className="mt-6 lg:mt-16 w-full lg:w-auto">

        <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
