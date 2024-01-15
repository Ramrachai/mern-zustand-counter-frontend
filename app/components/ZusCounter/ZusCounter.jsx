// "use client"
import React from 'react';
import Button from './Button';
import Input from './Input';
import CountNumber from './CountNumber';
import Alert from './Alert';




const ZusCounter = async () => {



    return (
        <div className="h-full p-10 border bg-gray-100 flex justify-center items-center gap-5 flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">

            <h2 className="text-md mb-6">MERN + Zustand Counter app</h2>

            <div className="rounded-md shadow-sm flex justify-center items-center" role="group">
                <Button label={"Decrease"} />
                    <CountNumber />
                <Button label={"Increase"} />
            </div>
            <Input />
            {/* {counter?.success ? <Alert color={"green"} message={counter?.message} /> : <Alert color={"red"} message={counter?.message}/>} */}

        </div>
    );
};

export default ZusCounter;
