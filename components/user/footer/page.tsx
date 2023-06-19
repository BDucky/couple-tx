"use client";

const Footer = () => {
    return (
        <footer>
            <div className="bg-[#111] tracking-[1px] max-w-[90rem] mx-auto my-0 p-0">
                <div className="table m-auto w-[calc(100%-40px)] max-w-[1280px] border-b-[1px] border-solid border-[#fff]">
                    <div className="flex justify-around my-[23px] mx-auto max-w-[950px] items-center">
                        <div>
                            <a href="tel:Hotline: 18006516" className="flex justify-center items-center">
                                <img src="https://file.hstatic.net/1000364782/file/footer_phone_d4fdad1325884e1fa904a24fc5d4d69d.svg" alt="" className="invert-[1] mr-[12px] w-[2.4375rem] h-[2.0625rem] transition-[500ms] hover:ease-in-out hover:rotate-[360deg] hover:duration-500" />
                                <span className="text-[13px] font-normal text-[#fff]">Hotline: 18006516</span>
                            </a>
                        </div>
                        <div>
                            <a href="tel:Hotline: 18006516" className="flex justify-center items-center">
                                <img src="https://file.hstatic.net/1000364782/file/envelope_9613e19318f14fd29c0d567d84cd31a7.svg" alt="" className="invert-[1] mr-[12px] w-[2.4375rem] h-[2.0625rem] transition-[500ms] hover:ease-in-out hover:rotate-[360deg] hover:duration-500" />
                                <span className="text-[13px] font-normal text-[#fff]">cskh@coupletx.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;