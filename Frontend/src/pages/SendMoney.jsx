import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    return <div class="flex justify-center h-screen bg-violet-500 ">
        <div className="h-full flex flex-col justify-center">
            <div
                class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-indigo-100 shadow-lg rounded-xl"
            >
                <div class="p-1">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center">
                    <span class="text-2xl text-indigo-700">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 class="text-2xl font-semibold">{name}</h3>
                </div>
                <div class="space-y-4 ">
                    <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        type="number"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button onClick={() => {
                        axios.post("http://localhost:8080/api/v1/account/transfer", {
                            to: id,
                            amount
                        }, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                    }} class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-indigo-700 text-white">
                        Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}