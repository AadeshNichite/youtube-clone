import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGETION } from "../utils/constant";
import { cashResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [showSuggetion, setShowSuggetion] = useState(false);
  const searchCach = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCach[searchVal]) {
        setSuggetions(searchCach[searchVal]);
      } else {
        getSuggetion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchVal]);

  const getSuggetion = async () => {
    const data = await fetch(YOUTUBE_SUGGETION + searchVal);
    const json = await data.json();
    setSuggetions(json[1]);

    dispatch(cashResults({ [searchVal]: json[1] }));
  };
  const handleToggleAction = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => handleToggleAction()}
          className="h-10 cursor-pointer"
          alt="hamberger"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
        <a href="/">
          <img
            className="h-10"
            alt="youtube-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          />
        </a>
      </div>
      <div className="col-span-10">
        <input
          className="border px-5 border-gray-400 w-1/2 p-2 rounded-l-full"
          type="text"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          onFocus={() => setShowSuggetion(true)}
          onBlur={() => setShowSuggetion(false)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
          search
        </button>
        {showSuggetion && (
          <div className="absolute bg-white py-2 px-2 w-[33rem] rounded-lg">
            <ul>
              {suggetions.map((s) => (
                <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-10"
          alt="user"
          src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
        />
      </div>
    </div>
  );
};

export default Header;
