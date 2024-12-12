
const SelectedPlayer = ({ selectItem,handleRemoveCard }) => {
    
    // const remainingBookmarks = selectItems.filter(selectItem => selectItem.id !== id);
    // // setSelectItems(remainingBookmarks);


    const {playerId, name, image, role,biddingPrice } = selectItem;
    

    return (
        <div>
        

            {/* selected players list */}


            <div className="flex justify-between border border-gray-400 rounded-xl p-2 items-center ">
                <div className="flex items-center gap-4  p-4">

                    <div className="rounded-full w-20 h-20 overflow-hidden">
                        <img className="object-cover w-full h-full " src={image} alt="" />

                    </div>
                    <div >
                        <h1>{name}</h1>
                        <h1>{role}</h1>
                        <h1>{biddingPrice}</h1>
                    </div>


                </div>


                <div className="mx-4">
                    <button onClick={()=> handleRemoveCard(playerId)} className="btn border-none bg-transparent shadow-none hover:bg-transparent "><img width="35" height="35" src="https://img.icons8.com/ios/50/recycle-bin.png" alt="recycle-bin" /></button>
                </div>



            </div>

        </div>







    );
};

export default SelectedPlayer;