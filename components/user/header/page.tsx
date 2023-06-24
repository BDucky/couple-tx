import React from 'react';
import Marquee from "react-fast-marquee";

const Header: React.FC = () => {
    return (
        <header className="">
            <div className="relative h-[50px] text-xs flex-wrap bg-[#000] text-[#fff] flex justify-center items-center font-bold uppercase tracking-widest leading-tight overflow-hidden">
                <div className='flex h-[50px] justify-center items-center font-bold uppercase tracking-widest leading-tight overflow-hidden max-w-[80%]'>
                    <Marquee direction="left" speed={70}>
                        <a href="https://coupletx.com/collections/outlet-blooming-sale" className='mr-[100px]'>GIÁ ĐẶC BIỆT TỚI 50%</a>
                        <a href="https://coupletx.com/collections/best-saler" className='mr-[100px]'>TRẢI NGHIỆM SẢN PHẨM BEST SELLER, ƯU ĐÃI KHI THANH TOÁN</a>
                        <a href="https://zalo.me/app/link/zapps/4446199182319379222?utm_campaign=followOA_voucher_drop&amp;utm_medium=online&amp;cdpaid=df39c562ae2f3ea87017d2283971527d-1680495445535&amp;gidzl=J4VTPF_nzsTDMzHc_-ZtPq1Ors7akV1k20pGRk3izcuEMD0ujEltDbjNWpdauw9eMLA2QpIAX18tz_7_PG&amp;orgId=e7bbb4006dac3dd86c2673d4c497a279&amp;qrVersion&amp;brandCode=CoupleTX&amp;utm_source=Website" className='mr-[100px]'>FOLLOW ZALO NHẬN NGAY MÃ 30K</a>
                        <a href="https://coupletx.com/collections/bst-f10" className='mr-[100px]'>BST FAST X MUA 2 ÁO TẶNG NÓN FF 199K</a>
                        <a href="https://coupletx.com/collections/ic-markdown-23" className='mr-[100px]'>CHÀO HÈ HỨNG KHỞI MUA 2 TẶNG 1</a>
                    </Marquee>
                </div>
            </div>
            <div className="flex relative items-start justify-between">
                <button aria-label="Open menu" className="header__menu--toggle toggle_menu d-lg-none d-block">
                    <img className="icon navigation-menu svg-navigation-menu-dims w-100" src="https://file.hstatic.net/1000364782/file/hamburger_167d1eb64106499f94c58df4a3f0c10b.svg" alt="Menu" />
                </button>
                <div className="my-25 mx-auto mb-45">
                    <a aria-label="home" href="/">
                        <img src="/image/logo.svg" alt="CPTX" className='w-[172px] h-[41px]' />
                    </a>
                </div>
                <div className='mt-25 absolute flex right-100 top-0'>
                    <span className="flex flex-row-reverse border-b-1 border-black text-black pb-3 w-145 items-baseline justify-between cursor-pointer">
                        <span className='text-gray-700 text-xs'>Tìm kiếm</span>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;