import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkModeProvider";
import Button from "./Button";
import { HomeData } from "../utils/Data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const Home = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const { darkMode, contacme, setContacme, lenguage } =
    useContext(DarkModeContext);

  const { es, en } = HomeData;
  const [dataProfile, setDataProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  const [labels, setLabels] = useState([]);
  // const [data, setData] = useState([])

  const cvEn =
    "https://drive.google.com/file/d/1fjgwkkKaSJ1QgGtZqgg-kcXRdRfG1ABG/view?usp=sharing";
  const cvEs =
    "https://drive.google.com/file/d/1WMzlUczWlMioX77Lr9U4piwD9NbrkOdq/view?usp=share_link";

  const request = async () => {
    const response = await fetch(`https://api.github.com/users/RusselUc`);
    const data = await response.json();


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
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  const data = {
    labels: mostUsed.map((item) => item.name),
    datasets: [
      {
        label: "used",
        data: mostUsed.map((item) => item.value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 0.5,
      },
    ],
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <div
      className="mt-14 flex min-h-screen w-full items-center justify-center bg-[#F6F8FF] transition-all duration-500 ease-in dark:bg-[#141D2F]"
      id="home"
    >
      <div className="mx-10 flex w-full flex-col items-center justify-center md:flex-row">
        <div className="flex flex-col items-center justify-center lg:w-1/2">
          <h1 className="mt-10 text-center text-4xl font-semibold tracking-widest text-[#4B6A9B] dark:text-gray-300">
            {lenguage ? en.title : es.title}
          </h1>
          <p className="mt-8 text-xl dark:text-gray-300">
            {lenguage ? en.subtitle : es.subtitle}
          </p>

          <Button
            text={lenguage ? en.cv : es.cv}
            icon="document-outline"
            href={lenguage ? cvEn : cvEs}
            target="_blank"
          />
        </div>

        <div className="m-10 flex w-full flex-wrap justify-center rounded-2xl bg-white shadow-lg dark:bg-[#1E2A47] dark:shadow-lg dark:shadow-blue-500/20 lg:w-1/2">
          {dataProfile && (
            <div className="flex w-full flex-col">
              <span className="mt-6 text-center font-semibold dark:text-gray-200">
                {lenguage ? "GitHub information" : "Información de GitHub"}
              </span>
              <div className="m-5 flex flex-wrap lg:flex-col">
                <div className="flex">
                  <img
                    className="rounded-full"
                    src={dataProfile.avatar_url}
                    width={100}
                  />

                  <span className="ml-10 mt-10 text-[#4b6a9b] dark:text-gray-200">
                    <a href="https://github.com/RusselUc">
                      @{dataProfile.login}
                    </a>
                  </span>
                </div>

                <div className="">
                  <span className="my-10 flex gap-2 text-[#4b6a9b] dark:text-gray-200">
                    <svg
                      height="20"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z"
                        fill={darkMode ? "#fff" : "#4b6a9b"}
                      />
                    </svg>
                    {dataProfile.location}
                  </span>

                  <span className="text-[#4b6a9b] dark:text-gray-200">
                    {dataProfile.bio}
                  </span>
                </div>
              </div>

              <div className="m-5 flex justify-around rounded-xl bg-[#F6F8FF] p-4 dark:bg-[#141D2F]">
                <div className="flex flex-col">
                  <span className="text-[#4b6a9b] dark:text-gray-200">
                    Repos
                  </span>
                  <span className="text-center font-bold dark:text-gray-200">
                    {dataProfile.public_repos}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#4b6a9b] dark:text-gray-200">
                    Following
                  </span>
                  <span className="text-center font-bold dark:text-gray-200">
                    {dataProfile.following}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center lg:absolute lg:right-28 lg:top-1/3 xl:top-1/3 2xl:right-52 2xl:top-[350px]">
                <span className="mb-4 text-[#4b6a9b] dark:text-gray-200">
                  {lenguage ? "Most used lenguagues" : "Lenguajes más usados"}
                </span>
                <div className="w-52">
                  <Pie data={data} />
                </div>
              </div>

              <div
                className={`mt-8 flex flex-row justify-center transition-all duration-500 ease-in-out`}
              >
                <div className="flex flex-row gap-4 transition-all duration-500 ease-in">
                  <span className="w-12 text-3xl text-[#4b6a9b] dark:text-gray-300">
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
                  <span className="w-12 text-3xl text-[#4b6a9b] dark:text-gray-300">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
