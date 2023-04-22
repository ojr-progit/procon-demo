import { type NextPage } from "next";

import { api } from "~/utils/api";
import {LoadingPage} from "~/loading";
import {useState} from "react";


const Home: NextPage = () => {
    const ctx = api.useContext();

  const {data, isLoading, isError, error} = api.fridgeRouter.getAlleFridgeItems.useQuery(
        {fridgeId: 1}
  )
     const addFridgeItem = api.fridgeRouter.addFridgeItem.useMutation({
        onSuccess: (data) => {
            void ctx.fridgeRouter.getAlleFridgeItems.invalidate()
        }
     });
    type FridgeItem = {
        quantity: number;
        name: string;

    }

    const [fridgeItem, setFridgeItem] = useState<FridgeItem>({
        quantity: 0,
        name: "",

    })


    if(isLoading) {
       return <LoadingPage />
    }

    if (isError) {
        return <div>{error?.message}</div>
    }



  return (
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-gray-50 sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                  <h1>Welcome to Fridge Tracker</h1>

                  <input type="text" value={fridgeItem.name} onChange={(e) => setFridgeItem({...fridgeItem, name: e.target.value})} />
                    <input type="number" value={fridgeItem.quantity} onChange={(e) => setFridgeItem({...fridgeItem, quantity: parseInt(e.target.value)})} />

                  <button onClick={() => addFridgeItem.mutate(
                        {


                                fridgeId: 1,
                                name: fridgeItem.name,
                                quantity: fridgeItem.quantity
                            }

                  )}>Add Item</button>

                  {data?.map((item) => (
                      <div key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.quantity}</p>
                        </div>
                  ))}

              </div>
          </div>
      </div>
  );
};

export default Home;
