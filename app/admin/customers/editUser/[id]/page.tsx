"use client";

import Input from "@/components/admin/customers/Input";
import Layout from "@/components/admin/layout";
import { Select } from "antd";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const EditUser = () => {
  const { id } = useParams();
  const [phone, setPhone] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<any>(null);
  const [birthDate, setBirthDate] = useState<any>(null);

  const options = [
    { value: "Nam", label: "Nam" },
    { value: "Nữ", label: "Nữ" },
  ];

  const getData = useCallback(async () => {
    await axios
      .get(`/api/user/find?key=${id}`)
      .then((response) => {
        const data = response.data;
        setPhone(data.phone);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        if (data.gender == "" || data.gender == null) {
          setGender(null);
        } else {
          const value = { value: data.gender, label: data.gender };
          setGender(value);
        }
        setBirthDate(data.date_of_birth);
      })

      .catch((err) => console.log(err));
  }, [id]);

  const handleClick = useCallback(async () => {
    await axios.post("/api/user/update", {
      id,
      phone,
      last_name: firstName,
      first_name: lastName,
      gender,
      date_of_birth: birthDate,
    });
  }, [id, phone, firstName, lastName, gender, birthDate]);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <Layout>
      <div className=" m-10 shadow-xl bg-[#fff] flex flex-wrap justify-between p-6 pl-28 pr-28">
        <Input value={phone} label="Phone" onChange={setPhone} />
        <Input value={firstName} label="First Name" onChange={setFirstName} />
        <Input value={lastName} label="Last Name" onChange={setLastName} />

        <div className=" w-[100%]">
          <p className=" w-[200px] block">Gender</p>
          <Select
            size="large"
            onChange={(e) => {
              setGender(e);
            }}
            options={options}
            value={gender}
          />
        </div>
        <Input
          date={true}
          value={birthDate !== "" && birthDate}
          label="Day Of Birth"
          onChange={setBirthDate}
        />

        <p className="w-[100%]" />
        <div
          onClick={handleClick}
          className=" mt-3 cursor-pointer hover:opacity-70  inline-block p-3 bg-blue-500 text-white"
        >
          {" "}
          Save Change
        </div>
      </div>
    </Layout>
  );
};

export default EditUser;
