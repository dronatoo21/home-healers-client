const OurTeam = () => {
    return (
        <div>
            <div className="text-center mb-28 py-5 grid grid-cols-1 md:grid-cols-2 lg:gap-0 md:gap-5 gap-10 lg:grid-cols-4">
                <div >
                    <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/x1YFdy2/person1.png" alt="img" />
                    <h2 className="text-2xl mt-3 font-bold">James</h2>
                    <p className="font-semibold text-xl"><i>@James</i></p>
                </div>
                <div>
                    <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/5x2PvDm/person2.png" alt="img" />
                    <h2  className="text-2xl mt-3 font-bold">William</h2>
                    <p className="font-semibold text-xl"><i>@William</i></p>
                </div>
                <div>
                    <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/ypQW2v9/person3.png" alt="img" />
                    <h2  className="text-2xl mt-3 font-bold">John</h2>
                    <p className="font-semibold text-xl"><i>@John</i></p>
                </div>
                <div>
                    <img className="h-[250px] w-[250px] rounded-full border-2 mx-auto" src="https://i.ibb.co/t8dHnxR/person4.png" alt="img" />
                    <h2  className="text-2xl mt-3 font-bold">Michael</h2>
                    <p className="font-semibold text-xl"><i>@Michael</i></p>
                </div>
            </div>
        </div>            
    );
};

export default OurTeam;