import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";
import axios from "axios";

const SignIntitle = ({
  onMouseEnter = () => {},
  className = "",
  children,
}: any) => {
  const [user, setUser] = useState<any>({
    first_name: "",
    last_name: "",
  });
  useEffect(() => {
    async function getData() {
      try {
        const id = Cookie.get("id");
        const res = await axios.get(`/api/user/find?key=${id}`);
        const data = res.data;
        setUser(data);
      } catch (err) {
        console.log("error", err);
      }
    }
    getData();
  }, []);
  const child =
    user.first_name && user.last_name
      ? "Hi, " + user.first_name + " " + user.last_name
      : children;
  return (
    <span
      onMouseEnter={onMouseEnter}
      className={`${className} cursor-pointer mt-1`}
    >
      {child}
    </span>
  );
};

export default SignIntitle;
