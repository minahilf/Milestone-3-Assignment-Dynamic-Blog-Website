export default function Contact() {
    return (
        <div className="bg-[#F0EBE1]">
        <div className="bg-[#EE6352] w-full h-[400px] p-4 rounded-3xl flex flex-col justify-center items-center lg:h-[500px] xl:h-[600px] ">
            <div className="text-white text-center flex flex-col items-center">
                <h3 className="text-[14px] font-medium xl:text-[16px]">SUBSCRIBE</h3>
                <h1 className="text-[30px] font-extrabold sm:text-[40px] lg:text-[50px] xl:text-[70px]">JOIN OUR EXCLUSIVE BEAUTY COMMUNITY</h1>
                <p className="text-[12px] max-w-[300px] sm:max-w-[60%] sm:text-[14px] lg:max-w-[50%] xl:text-[16px] xl:max-w-[40%]">
                    Elevate your beauty journey with personalized recommendations and stay connected
                    with a community that shares your passion for self-care. Subscribe now and embark
                    on a beauty adventure with us!
                </p>
                <div className="mt-4 flex flex-col items-center">
                    <input
                        type="text"
                        className="w-[240px] h-[40px] rounded-full p-4 text-[12px] text-black xl:w-[300px]"
                        placeholder="Email Address"
                    />
                    <button className="bg-[#333333] w-[80px] h-[30px] rounded-full text-white text-[10px] mt-2 relative bottom-[55%] left-[32%] xl:left-[34%]">
                        SUBSCRIBE
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
}
