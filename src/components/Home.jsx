import React, { useContext, useEffect, useState } from "react";
import home from "../assets/image/dark.svg";
import homeDark from "../assets/image/light.svg";
import { DarkModeContext } from "../context/DarkModeProvider";
import Button from "./Button";
import { HomeData } from "../utils/Data";
import ChartComponent from "./Chart";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const Home = () => {
  const { darkMode, contacme, setContacme, lenguage } =
    useContext(DarkModeContext);
  const { es, en } = HomeData;
  const [dataProfile, setDataProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const cvEn =
    "https://drive.google.com/file/d/1fjgwkkKaSJ1QgGtZqgg-kcXRdRfG1ABG/view?usp=sharing";
  const cvEs =
    "https://drive.google.com/file/d/1WMzlUczWlMioX77Lr9U4piwD9NbrkOdq/view?usp=share_link";

  const request = async () => {
    const response = await fetch(`https://api.github.com/users/RusselUc`);
    const data = await response.json();

    console.log(data);

    const responseRepos = await fetch(data.repos_url);
    const repos = await responseRepos.json();
    setDataProfile(data);
    setRepos(repos);
  };

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { name: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        // stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const data01 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 278 },
    { name: "Group F", value: 189 },
  ];

  useEffect(() => {
    request();
  }, []);
  return (
    <div
      className="mt-14 flex min-h-screen items-center justify-center bg-[#F6F8FF] transition-all duration-500 ease-in dark:bg-[#141D2F]"
      id="home"
    >
      <div className="container  mx-10 flex flex-col items-center justify-center md:flex-row">
        <div className="flex flex-col items-center justify-center lg:w-11/12">
          <h1 className="mt-10 text-center text-4xl font-semibold tracking-widest text-[#4B6A9B] dark:text-gray-300">
            {lenguage ? en.title : es.title}
          </h1>
          <p className="mt-8 text-xl dark:text-gray-300">
            {lenguage ? en.subtitle : es.subtitle}
          </p>

          <Button
              text={lenguage ? en.cv : es.cv}
              icon="document-outline"
              href={ lenguage ? cvEn : cvEs}
              target="_blank"
            />
          {/* <div className="flex gap-4 ">
            <Button
              text={lenguage ? en.contact : es.contact}
              icon="send-outline"
              onClick={() => setContacme(!contacme)}
            />
            <Button
              text={lenguage ? en.cv : es.cv}
              icon="document-outline"
              href={ lenguage ? cvEn : cvEs}
              target="_blank"
            />
          </div> */}

          {/* {contacme && (
            <div
              className={`mt-8 flex flex-col transition-all duration-500 ease-in-out`}
            >
              <div className="flex gap-4 transition-all duration-500 ease-in">
                <span className="w-12 text-3xl dark:text-gray-300">
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                <span className="text-md dark:text-gray-300">
                  russelarielucpuc@gmail.com
                </span>
              </div>

              <a
                className="flex items-center justify-start gap-4 overflow-hidden transition-all duration-500"
                href="https://www.linkedin.com/in/russel-uc-5819141b0/"
              >
                <span className="w-12 text-3xl dark:text-gray-300">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </span>
                <span className="text-md dark:text-gray-300">
                  www.linkedin.com/in/russel-uc-5819141b0
                </span>
              </a>
            </div>
          )} */}
        </div>

        <div className="m-10 flex w-full flex-wrap justify-center rounded-lg dark:bg-[#1E2A47] dark:shadow-lg dark:shadow-blue-500/20">
          {dataProfile && (
            <div className="flex w-full flex-col">
              <span className="mt-6 text-center font-semibold dark:text-gray-200">
                GitHub information
              </span>
              <div className="m-5 flex flex-wrap lg:flex-col">
                <div className="flex">
                  <img
                    className="rounded-full"
                    src={dataProfile.avatar_url}
                    width={100}
                  />

                  <span className="ml-10 mt-10 text-gray-200">
                    <a href="https://github.com/RusselUc">
                      @{dataProfile.login}
                    </a>
                  </span>
                </div>

                <div className="">
                  <span className="my-10 flex gap-2 text-gray-200">
                    <svg
                      height="20"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
                        fill={darkMode ? "#4b6a9b" : "#fff"}
                      />
                    </svg>{" "}
                    {dataProfile.location}
                  </span>

                  <span className="text-gray-200">{dataProfile.bio}</span>
                </div>
              </div>

              <div className="m-5 flex justify-around rounded-xl bg-[#141D2F] p-4">
                <div className="flex flex-col">
                  <span className="text-gray-200">Repos</span>
                  <span className="text-center font-bold text-gray-200">
                    {dataProfile.public_repos}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-200">Following</span>
                  <span className="text-center font-bold text-gray-200">
                    {dataProfile.following}
                  </span>
                </div>
              </div>

              <div
              className={`mt-8 flex flex-row justify-center transition-all duration-500 ease-in-out`}
            >
              <div className="flex flex-row gap-4 transition-all duration-500 ease-in">
                <span className="w-12 text-3xl dark:text-gray-300">
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                {/* <span className="text-md dark:text-gray-300">
                  russelarielucpuc@gmail.com
                </span> */}
              </div>

              <a
                className="flex items-center justify-start gap-4 overflow-hidden transition-all duration-500"
                href="https://www.linkedin.com/in/russel-ariel-uc-puc/"
              >
                <span className="w-12 text-3xl dark:text-gray-300">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </span>
                
              </a>
            </div>
            </div>
          )}

          {/* <span>@{dataProfile.name}</span> */}
        </div>
        {/* <div className="md:h-10/12 mt-8 flex h-72 w-72 items-center justify-center md:w-1/2">
          {
            <img
              className="object-cover transition-all duration-500 "
              src={darkMode ? home : homeDark}
            />
          }
        </div> */}
      </div>
    </div>
  );
};

export default Home;
