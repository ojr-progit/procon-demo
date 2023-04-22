import { type NextPage } from "next";

import { api } from "~/utils/api";


const Home: NextPage = () => {
  const {data, isLoading} = api.example.hello.useQuery({ text: "from tRPC" });

  return (
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-gray-50 sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                  <h1>Welcome to Fridge Tracker</h1>
                  <div>{data?.greeting}</div>
              </div>
          </div>
      </div>
  );
};

export default Home;
